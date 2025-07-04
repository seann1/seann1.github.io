
import * as THREE from 'three';
import { Noise } from 'noisejs';
import { createSceneAndRenderer } from "./sceneSetup";
import { addLights } from "./lighting";
import { AnimatedPlane } from "./plane";
import { AnimatedSphere } from "./sphere";
import { OrbitControls } from "three/addons/controls/OrbitControls";
import GUI from 'lil-gui';

const gui = new GUI();

const guiParams = {
	sphereHeight: 0,
	stepInterval: 0.15
}
const noise = new Noise(Math.random());
const noise2 = new Noise(Math.random());

const {scene, camera, renderer} = createSceneAndRenderer("threeCan");
let zoff = 0;
let sphereStepInterval = 0.15;
// Add this after creating camera and renderer:
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Optional: smooth motion

const plane = new AnimatedPlane(400, 200, 200);
plane.mesh.receiveShadow = true;
scene.add(plane.mesh);

const sphere = new AnimatedSphere(30, 64);
sphere.mesh.castShadow = true;
scene.add(sphere.mesh);

gui.add(guiParams, "sphereHeight", -30, 100).onChange(value => {
	sphere.mesh.position.y = value;
});

gui.add(guiParams, "stepInterval", 0.1, 0.3).onChange(value => {
	sphereStepInterval = value;
});

addLights(scene);
camera.position.set(0, 60, 100);
camera.lookAt(0, 0, 0);
let frameCount = 0;
function animate() {
	requestAnimationFrame(animate);
	plane.updateVertices(frameCount, noise, noise2, zoff);
	plane.updateColors();
	sphere.updateSphereVertices(zoff, noise, plane.mesh, sphereStepInterval);
	controls.update(); // Add this line
	renderer.render(scene, camera);
	zoff += 0.01;
	frameCount++;
}
animate();
