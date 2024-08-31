import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
const canvasElm = document.getElementById('threeCanMain');
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
light.position.set(0, -4, 10);
light.position.set(0, 4, -10);
scene.add(light, light2);

const targetObject = new THREE.Object3D();
targetObject.position.set(0, 0, 0);
light.target = targetObject;
light2.target = targetObject;

let hue = 0;



const group = new THREE.Group();
const cube = new THREE.BoxGeometry(0.9, 0.9, 0.9);

// for (let g=0; g < 3; g++) {
//     for (let h = 0; h < 20; h++) {
//         for (let i = 0; i < 30; i++) {
//             const cubeMesh = new THREE.Mesh(cube, new THREE.MeshPhongMaterial({color: getNextColor()}));
//             cubeMesh.position.set(i-5, h+i, g+h);
//             cubeMesh.rotation.set(i/10, h/10, g/10);
//             group.add(cubeMesh);
//         }
//     }
// }
function getNextColor() {
    // Create a new color with the current hue
    const color = new THREE.Color(`hsl(${hue}, 100%, 50%)`);
    // Increment the hue
    hue = (hue + 0.1) % 360;
    return color;
}

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);

const cubeSize = 10; // The number of cubes along each edge of the larger cube

for (let x = 0; x < 50; x++) {
    for (let y = 0; y < 50; y++) {
        for (let z = 0; z < 3; z++) {
            const material = new THREE.MeshPhongMaterial({ color: getNextColor() });
            const cube = new THREE.Mesh(cubeGeometry, material);
            cube.position.set(x - cubeSize / 2, y - cubeSize / 2, z - cubeSize / 2);
            cube.rotation.set(x/10, y/10, z/10);
            cube.scale.set(0.9, 0.9, 0.9);
            group.add(cube);
        }
    }
}
group.position.set(-20,-25, 0);
scene.add(group);
// for (let i = 0; i < 10; i++) {
//     const cubeMesh = new THREE.Mesh(cube, new THREE.MeshPhongMaterial({ color: getNextColor() }));
//     cubeMesh.position.set(i - 5, 0, 0);
//     cubeMesh.rotation.set(i / 10, i / 10, i / 10);
//     group.add(cubeMesh);
//     for (let j = 0; j < 10; j++) {
//         const newGroup = group.clone();
//         group.position.set(0, j, 0);
//         scene.add(newGroup);
//         for (let k = 0; k < 10; k++) {
//             const newGroup = group.clone();
//         }
//     }
// }
console.log(scene);
// group.position.set(0, -10, -20);
// group.rotation.set(0,Math.PI/2,Math.PI*0.25)
// scene.add(group);
camera.lookAt(group)
renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 0.3;

document.addEventListener('mousemove', onDocumentMouseMove, false);

let windowHalfX = window.innerWidth / 2;
let windowHalfY = window.innerHeight / 2;

let targetRotationX = 0, targetRotationY = 0;
let currentRotationX = 0, currentRotationY = 0;
const easing = 0.03; // This controls the speed of the easing. Smaller values make the rotation slower.

function onDocumentMouseMove(event) {
    targetRotationX = (event.clientY - windowHalfY) / windowHalfY;
    targetRotationY = (event.clientX - windowHalfX) / windowHalfX;
}

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

group.children.forEach((child) => {
    child.userData.targetColor = new THREE.Color(Math.random(), Math.random(), Math.random());
});

function animate() {
    // requestAnimationFrame(raf);
    requestAnimationFrame(animate);
    // const elapsedTime = clock.getElapsedTime();
    // Apply easing to the rotation
    currentRotationX += (targetRotationX - currentRotationX) * easing;
    currentRotationY += (targetRotationY - currentRotationY) * easing;
    
    group.rotation.x = currentRotationX*0.05;
    group.rotation.y = currentRotationY*0.05;
    
    group.children.forEach((child) => {
        
        // Lerp the color
        // child.material.color.lerp(child.userData.targetColor, 0.01);
        //
        // // If the color is close to the target color, set a new target color
        // if (child.material.color.distanceTo(child.userData.targetColor) < 0.01) {
        //     child.userData.targetColor.set(Math.random(), Math.random(), Math.random());
        // }
        
        child.rotation.x += 0.005;
        child.rotation.y += 0.005;
        child.scale.x = (Math.sin(Date.now() * 0.0001 + (child.position.x * 0.2)));
        child.scale.y = (Math.sin(Date.now() * 0.0001 + (child.position.y * 0.2)));
        child.scale.z = (Math.sin(Date.now() * 0.0001 + (child.position.z * 0.2)));
    });
    controls.update();
    renderer.render(scene, camera);
    // console.log(camera.position, camera.rotation);
}
animate();
