import * as THREE from 'three';

export function createSceneAndRenderer(canvasId) {
	const scene = new THREE.Scene();
	const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
	const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById(canvasId) });
	renderer.shadowMap.enabled = true;
	renderer.shadowMap.type = THREE.PCFSoftShadowMap;
	
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	window.addEventListener('resize', () => {
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();
		renderer.setSize(window.innerWidth, window.innerHeight);
	});
	
	return { scene, camera, renderer };
}
