import * as THREE from 'three';
import { gsap } from 'gsap';
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

const raycaster = new THREE.Raycaster();

const light = new THREE.DirectionalLight(0xffffff, 1, 1000);
const light2 = new THREE.DirectionalLight(0xffffff, 1, 1000);
light.position.set(0, -4, 10);
light2.position.set(0, 4, -10);
scene.add(light, light2);

const targetObject = new THREE.Object3D();
targetObject.position.set(0, 0, 0);
light.target = targetObject;
light2.target = targetObject;

let mouse = new THREE.Vector2(-1,1);

function onDocumentMouseMove(event) {
	event.preventDefault();
	
	// Calculate mouse position in normalized device coordinates (-1 to +1) for both components
	mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
	mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

document.addEventListener('mousemove', onDocumentMouseMove, false);

renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 0.3;
let hue = 0;
function getNextColor() {
	// Create a new color with the current hue
	const color = new THREE.Color(`hsl(${hue}, 100%, 50%)`);
	// Increment the hue
	hue = (hue + 1) % 360;
	return color;
}

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

const cubeSize = 10; // The number of cubes along each edge of the larger cube
const group = new THREE.Group();

for (let x = 0; x < 20; x++) {
	for (let y = 0; y < 20; y++) {
		for (let z = 0; z < 20; z++) {
			const material = new THREE.MeshPhongMaterial({ color: getNextColor() });
			const cube = new THREE.Mesh(cubeGeometry, material);
			cube.position.set(x - cubeSize / 2, y - cubeSize / 2, z - cubeSize / 2);

			cube.scale.set(0.4, 0.4, 0.4);
			cube.originalColor = material.color.clone();
			group.add(cube);
		}
	}
}

scene.add(group);
// Calculate the bounding box of the group
const box = new THREE.Box3().setFromObject(group);
// Calculate the center of the bounding box
const center = box.getCenter(new THREE.Vector3());
// Move the group so that its center is at the origin
group.children.forEach(child => {
	child.position.sub(center);
});

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

let lastIntersected;
let neighbors = [];
function animate() {
	requestAnimationFrame(animate);
	const allObjects = group.children.slice();
	raycaster.setFromCamera(mouse, camera);
	const intersects = raycaster.intersectObjects(group.children);
	
	if (intersects.length > 0) {
		// If the closest object intersected is not the currently stored intersection object
		if (intersects[0].object !== lastIntersected) {
			// Restore previous intersection object (if it exists) to its original scale
			if (lastIntersected) {
				gsap.to(lastIntersected.scale, { x: 0.4, y: 0.4, z: 0.4, duration: 10 });
				gsap.to(lastIntersected.material.color, { r: lastIntersected.originalColor.r, g: lastIntersected.originalColor.g, b: lastIntersected.originalColor.b, duration: 1 });
				
				neighbors.forEach(neighbor => {
					gsap.to(neighbor.scale, { x: 0.4, y: 0.4, z: 0.4, duration: 10 });
					gsap.to(neighbor.material.color, { r: neighbor.originalColor.r, g: neighbor.originalColor.g, b: neighbor.originalColor.b, duration: 1 });
				});
				neighbors = [];
			}
			
			// Store reference to closest object as current intersection object
			lastIntersected = intersects[0].object;
			
			// Set the scale of the current intersected object
			const distance = lastIntersected.position.distanceTo(intersects[0].point);
			const scaleFactor = 1 / Math.pow(distance, 0.1);
			// gsap.to(lastIntersected.scale, { x: scaleFactor, y: scaleFactor, z: scaleFactor, duration: 0.1 });
			if (lastIntersected.scale.x === 0.4 && lastIntersected.scale.y === 0.4 && lastIntersected.scale.z === 0.4) {
				gsap.to(lastIntersected.scale, { x: scaleFactor, y: scaleFactor, z: scaleFactor, duration: 1 });
				gsap.to(lastIntersected.material.color, { r: 0, g: 1, b: 0, duration: 1 });
			}
			
			// Find neighbors
			allObjects.forEach(object => {
				if (object !== lastIntersected && object.position.distanceTo(lastIntersected.position) <= 3) {
					neighbors.push(object);
					const neighborDistance = object.position.distanceTo(lastIntersected.position);
					const neighborScaleFactor = 1 / Math.pow(neighborDistance, 0.1);
					gsap.to(object.scale, { x: neighborScaleFactor, y: neighborScaleFactor, z: neighborScaleFactor, duration: 1 });
					gsap.to(object.material.color, { r: 1, g: 1, b: 1, duration: 1 });
					// if (object.scale.x < 0.8 && object.scale.y < 0.8 && object.scale.z < 0.8 ) {
					// 	gsap.to(object.scale, { x: neighborScaleFactor, y: neighborScaleFactor, z: neighborScaleFactor, duration: 1 });
					// }
				}
			});

		}
	} else { // There are no intersections
		// Restore previous intersection object (if it exists) to its original scale
		// if (lastIntersected) {
		// 	gsap.to(lastIntersected.scale, { x: 0.4, y: 0.4, z: 0.4, duration: 10 });
		// }
		if (lastIntersected) {
			gsap.to(lastIntersected.scale, { x: 0.4, y: 0.4, z: 0.4, duration: 10 });
			gsap.to(lastIntersected.material.color, { r: lastIntersected.originalColor.r, g: lastIntersected.originalColor.g, b: lastIntersected.originalColor.b, duration: 1 });
			neighbors.forEach(neighbor => {
				gsap.to(neighbor.scale, { x: 0.4, y: 0.4, z: 0.4, duration: 10 });
				gsap.to(neighbor.material.color, { r: neighbor.originalColor.r, g: neighbor.originalColor.g, b: neighbor.originalColor.b, duration: 1 });
			});
			neighbors = [];
			lastIntersected = undefined;
		}
		
		// Remove previous intersection object reference
		// By setting to undefined, there is no object to restore to original scale
		// lastIntersected = undefined;
	}
	controls.update();
	renderer.render(scene, camera);
}
animate();
