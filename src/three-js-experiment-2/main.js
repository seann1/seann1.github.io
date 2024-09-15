import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
const canvasElm = document.getElementById('threeCan');
const renderer = new THREE.WebGLRenderer({ canvas: canvasElm, alpha: true });


window.onload = function () {
	setTimeout(() => {
		document.getElementById('loading-screen').style.display = 'none';
	}, '50');
	renderer.setSize(window.innerWidth, window.innerHeight);
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
camera.position.set(0,0,-20);
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};
const light = new THREE.DirectionalLight(0xffffff, 1, 1000);
const light2 = new THREE.DirectionalLight(0xffffff, 1, 1000);
const light3 = new THREE.DirectionalLight(0xffffff, 1, 1000);
light.position.set(0, -4, 10);
light2.position.set(0, 4, -10);
// light3.position.set(0, 4, -10);
scene.add(light, light2);

const targetObject = new THREE.Object3D();
targetObject.position.set(0, 0, 0);
light.target = targetObject;
light2.target = targetObject;

renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 0.3;
let hue = 0;
function getNextColor() {
	// Create a new color with the current hue
	const color = new THREE.Color(`hsl(${hue}, 100%, 50%)`);
	// Increment the hue
	hue = (hue + 5) % 360;
	return color;
}

// Create a group to hold all the spheres
const sphereGroup = new THREE.Group();

// Define the radius of the imaginary sphere
const radius = 10;

// Define the number of spheres
const sphereCount = 500;

// Create spheres
for (let i = 0; i < sphereCount; i++) {
	// Create sphere geometry and material
	const sphereGeometry = new THREE.SphereGeometry(0.2, 10, 10);
	const sphereMaterial = new THREE.MeshPhongMaterial({color: getNextColor()});
	
	// Create sphere mesh
	const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
	
	// Generate random spherical coordinates
	const phi = (i*0.01) * 4 * Math.PI; // azimuthal angle
	const theta = (i*0.01) * Math.PI; // polar angle
	
	// Convert spherical coordinates to Cartesian coordinates
	sphereMesh.position.x = radius * Math.sin(theta) * Math.cos(phi);
	sphereMesh.position.y = radius * Math.sin(theta) * Math.sin(phi);
	sphereMesh.position.z = radius * Math.cos(theta);
	// sphereMesh.scale.set(new THREE.Vector3(i/10));
	
	// Add sphere mesh to group
	sphereGroup.add(sphereMesh);
}

for (let j = 0; j < 11; j++) {
	const newSphereGroup = sphereGroup.clone();
	newSphereGroup.rotation.y = (j/10) * Math.PI;
	scene.add(newSphereGroup);
}

// Add group to scene
// scene.add(sphereGroup);

const sphere = new THREE.SphereGeometry(2, 32, 32);
const material = new THREE.MeshPhongMaterial({ color: 0x3ac978});
const sphereMesh = new THREE.Mesh(sphere, material);

// scene.add(sphereMesh);

const controls = new OrbitControls(camera, renderer.domElement);

controls.update();
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
camera.aspect = sizes.width / sizes.height;
window.addEventListener('resize', () => {
	// Update sizes
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	
	// Update camera
	camera.aspect = sizes.width / sizes.height;
	camera.updateProjectionMatrix();
	
	// Update renderer
	renderer.setSize(sizes.width, sizes.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});
const clock = new THREE.Clock();

function animate() {
	const elapsedTime = clock.getElapsedTime()
	requestAnimationFrame(animate);
	sphereMesh.position.y = Math.sin(elapsedTime)*6;
	sphereMesh.position.x = Math.cos(elapsedTime)*6;
	scene.children.forEach((child, index) => {
		if (child instanceof THREE.Group) {
			if (index % 2 === 0) {
				child.rotation.x += 0.00005 * index;
				child.rotation.y += 0.00005 * index;
			} else {
				child.rotation.x -= 0.00005 * index;
				child.rotation.y -= 0.00005 * index;
			}
			// child.rotation.y += 0.00005 * index;
			// child.children.forEach((sphere, index) => {
			// 	if (index % 2 === 0) {
			// 		sphere.position.x += Math.sin(elapsedTime)*0.1;
			// 		sphere.position.y += Math.sin(elapsedTime)*0.1;
			// 		sphere.position.z += Math.sin(elapsedTime)*0.1;
			// 	} else {
			// 		sphere.position.x -= Math.sin(elapsedTime)*0.1;
			// 		sphere.position.y -= Math.sin(elapsedTime)*0.1;
			// 		sphere.position.z -= Math.sin(elapsedTime)*0.1;
			// 	}
			// });
		}
	});
	controls.update();
	renderer.render(scene, camera);
}
animate();
