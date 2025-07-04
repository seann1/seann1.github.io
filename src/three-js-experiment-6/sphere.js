import * as THREE from 'three';

export class AnimatedSphere {
	constructor(radius, segments) {
		this.radius = radius;
		this.geometry = new THREE.SphereGeometry(radius, segments, segments);
		this.originalSpherePositions = [];
		// const originalSpherePositions = [];
		for (let i = 0; i < this.geometry.attributes.position.count; i++) {
			this.originalSpherePositions.push(
				this.geometry.attributes.position.getX(i),
				this.geometry.attributes.position.getY(i),
				this.geometry.attributes.position.getZ(i)
			);
		}
		
		this.material = new THREE.MeshPhysicalMaterial({
			color: 0x88e0ff,
			roughness: 0.2,
			metalness: 0.5,
			transmission: 0.8, // Makes it glassy/translucent
			thickness: 2.0,
			transparent: true,
			opacity: 0.9,
			ior: 1.3,
			clearcoat: 1.0,
			clearcoatRoughness: 0.1
		});
		
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.position.set(0, 30, 0); // Float above the plane
	}
	
	// In AnimatedSphere.js
	updateSphereVertices(time, noise, planeMesh, stepInterval) {
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
			const noiseVal = noise.perlin3(nx * 2, ny * 2, nz * 2 + (time*5) * 0.5);
			// console.log(noiseVal);
			// function noiseStep(noiseVal) {
			// 	if (noiseVal > 0.9) {
			// 		noiseVal = 0.1;
			// 	} else if (noiseVal > 0.7) {
			// 		noiseVal = 0;
			// 	} else if (noiseVal > 0.5) {
			// 		noiseVal = 1
			// 	} else if (noiseVal > 0.4) {
			// 		noiseVal = 0
			// 	} else if (noiseVal < 0) {
			// 		noiseVal = -0.5;
			// 	}
			// 	return noiseVal
			// }
			
			function zigZagStep(noiseVal, stepInterval, values = [1, 0, 1, 0, 1, 0, 1]) {
				// Map noiseVal from [-1, 1] to [0, 1] if needed
				const norm = (noiseVal + 1) / 2;
				// Choose interval size (e.g., 0.2)
				// const interval = 0.15;
				// Find which interval we're in
				const idx = Math.floor(norm / stepInterval);
				// console.log(idx % 5);
				// Alternate between high (1) and low (0)
				return values[idx % 5];
			}
			
			const displacement = 2 + zigZagStep(noiseVal, stepInterval) * 50; // Adjust lumpiness

			let newX = ox * (1 + displacement / this.radius * 0.2);
			let newY = oy * (1 + displacement / this.radius * 0.2);
			let newZ = oz * (1 + displacement / this.radius * 0.2);
			// Transform to world, then to plane local
			const worldPos = this.mesh.localToWorld(new THREE.Vector3(newX, newY, newZ));
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
				newY = localPos.y+5;
			}
			
			this.geometry.attributes.position.setXYZ(i, newX, newY, newZ);
		}
		this.geometry.attributes.position.needsUpdate = true;
		this.geometry.computeVertexNormals();
	}
}
