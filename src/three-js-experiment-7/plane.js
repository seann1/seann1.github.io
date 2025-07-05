import * as THREE from 'three';
import { Noise } from 'noisejs';
export class AnimatedPlane {
	constructor(width, height, segments) {
		this.noise = new Noise(Math.random());
		this.geometry = new THREE.PlaneGeometry(width, height, segments, segments);
		
		// 1. Add a color attribute to the geometry
		const colors = [];
		for (let i = 0; i < this.geometry.attributes.position.count; i++) {
			const z = this.geometry.attributes.position.getZ(i);
			// Map z to a color (e.g., blue for low, green for mid, brown for high)
			const color = new THREE.Color();
			// Example: use HSL, mapping z from -20 to 20 to hue 0.6 (blue) to 0.1 (red)
			const hue = THREE.MathUtils.mapLinear(z, -10, 10, 0.9, 0.1);
			color.setHSL(hue, 1.0, 0.5);
			colors.push(color.r, color.g, color.b);
		}
		this.geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
		
		// 2. Use vertexColors in the material
		this.material = new THREE.MeshStandardMaterial({
			vertexColors: true,
			flatShading: true
		});
		this.mesh = new THREE.Mesh(this.geometry, this.material);
		this.mesh.rotation.x = -Math.PI / 2;
	}
	updateColors() {
		const colors = this.geometry.attributes.color;
		for (let i = 0; i < this.geometry.attributes.position.count; i++) {
			const z = this.geometry.attributes.position.getZ(i);
			const hue = THREE.MathUtils.mapLinear(z, -10, 10, 0.9, 0.1);
			// masterHueCalc = hue;
			const color = new THREE.Color();
			
			const manipulatedY = Math.abs(Math.sin(this.geometry.attributes.position.getY(i)*0.05))*0.6;
			color.setHSL(hue, 1.0, 0.5);
			colors.setXYZ(i, color.r, color.g, color.b);
		}
		colors.needsUpdate = true;
	}
	updateVertices(frameCount, noise, noise2, zoff) {
		let noiseValue2
		const sine1 = Math.sin(frameCount* 0.0009);
		for (let i = 0; i < this.geometry.attributes.position.count; i++) {
			const x = this.geometry.attributes.position.getX(i) * (sine1*0.1);
			const y = this.geometry.attributes.position.getY(i) / 30;
			
			const z = noise.perlin2(x, y + zoff) * 20;
			noiseValue2 = noise2.perlin2(x, y + zoff);
			// console.log(noiseValue2)
			this.geometry.attributes.position.setZ(i, z);
		}
		this.geometry.attributes.position.needsUpdate = true;
		this.geometry.computeVertexNormals();
	}
}
