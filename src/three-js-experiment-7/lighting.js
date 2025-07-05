import * as THREE from 'three';

export function addLights(scene) {
	const light = new THREE.DirectionalLight(0xffffff, 1);
	light.position.set(0, 100, 100).normalize();
	light.castShadow = true;
	scene.add(light);
}
