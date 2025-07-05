import * as THREE from 'three';
import { createMaterial1 } from './materials/SphereMaterial-1';

export class AnimatedSphere {
    constructor(radius, segments, gui, time, material, params, x, y, z) {
        this.radius = radius;
        this.geometry = new THREE.SphereGeometry(radius, segments, segments);
        this.params = params;

        this.originalSpherePositions = [];

        for (let i = 0; i < this.geometry.attributes.position.count; i++) {
            this.originalSpherePositions.push(
                this.geometry.attributes.position.getX(i),
                this.geometry.attributes.position.getY(i),
                this.geometry.attributes.position.getZ(i)
            );
        }

        this.material = material;
        this.multiplierKeyName = Object.keys(params).find((p) =>
            p.startsWith('noiseTimeMultiplier')
        );

        if (gui) {
            gui.add(this.params, this.multiplierKeyName, 0, 10).onChange(
                (value) => {
                    this.params[this.multiplierKeyName] = value;
                }
            );
        }

        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.mesh.position.set(x, y, z); // Float above the plane
    }

    // In AnimatedSphere.js
    updateSphereVertices(time, noise, planeMesh, stepInterval) {
        if (
            this.material.userData.shader &&
            this.material.userData.shader.uniforms.time
        ) {
            this.material.userData.shader.uniforms.time.value = time;
        }
        const planeGeo = planeMesh.geometry;
        const planePos = planeGeo.attributes.position;
        const planeWidth = planeMesh.geometry.parameters.width;
        const planeHeight = planeMesh.geometry.parameters.height;
        const planeSegmentsW = planeMesh.geometry.parameters.widthSegments;
        const planeSegmentsH = planeMesh.geometry.parameters.heightSegments;
        const dx = planeWidth / planeSegmentsW;
        const dz = planeHeight / planeSegmentsH;
        const halfW = planeWidth / 2;
        const halfH = planeHeight / 2;

        for (let i = 0; i < this.geometry.attributes.position.count; i++) {
            // ... your noise/displacement code ...
            // Get original position
            const ox = this.originalSpherePositions[i * 3];
            const oy = this.originalSpherePositions[i * 3 + 1];
            const oz = this.originalSpherePositions[i * 3 + 2];

            // Use normalized direction for noise
            const nx = ox / this.radius;
            const ny = oy / this.radius;
            const nz = oz / this.radius;

            // Perlin noise based on direction and time
            const noiseVal = noise.perlin3(
                nx * 2,
                ny * 2,
                nz * 2 + time * this.params[this.multiplierKeyName] * 0.5
            );

            function zigZagStep(
                noiseVal,
                stepInterval,
                values = [1, 0, 1, 0, 1, 0, 1]
            ) {
                // Map noiseVal from [-1, 1] to [0, 1] if needed
                const norm = (noiseVal + 1) / 2;
                // Choose interval size (e.g., 0.2)
                // Find which interval we're in
                const idx = Math.floor(norm / stepInterval);
                return values[idx % 5];
            }

            const displacement = 2 + zigZagStep(noiseVal, stepInterval) * 50; // Adjust lumpiness

            let newX = ox * (1 + (displacement / this.radius) * 0.2);
            let newY = oy * (1 + (displacement / this.radius) * 0.2);
            let newZ = oz * (1 + (displacement / this.radius) * 0.2);
            // Transform to world, then to plane local
            const worldPos = this.mesh.localToWorld(
                new THREE.Vector3(newX, newY, newZ)
            );
            const planeLocal = planeMesh.worldToLocal(worldPos.clone());

            // Map (x, z) to grid indices
            let px = Math.round((planeLocal.x + halfW) / dx);
            let pz = Math.round((planeLocal.z + halfH) / dz);
            px = THREE.MathUtils.clamp(px, 0, planeSegmentsW);
            pz = THREE.MathUtils.clamp(pz, 0, planeSegmentsH);

            // Get plane vertex index
            const planeIdx = pz * (planeSegmentsW + 1) + px;
            const planeY = planePos.getY(planeIdx);

            // Clamp
            if (worldPos.y < planeY + 10) {
                worldPos.y = planeY + 10;
                const localPos = this.mesh.worldToLocal(worldPos);
                newY = localPos.y + 5;
            }

            this.geometry.attributes.position.setXYZ(i, newX, newY, newZ);
        }
        this.geometry.attributes.position.needsUpdate = true;
        this.geometry.computeVertexNormals();
    }
}
