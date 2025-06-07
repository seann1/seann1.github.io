import * as THREE from 'three';
import { gsap } from 'gsap';
import { OrbitControls } from 'three/addons/controls/OrbitControls';
import { ExtendedPhongMaterial } from '../extendThreeJSMaterial/ExtendedPhongMaterial';

const canvasElm = document.getElementById('threeCan');
const renderer = new THREE.WebGLRenderer({ canvas: canvasElm, alpha: true });
// var customVertexShader = document.getElementById('js-custom-vertex-shader').textContent;
window.onload = function () {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
    }, '50');
    renderer.setSize(window.innerWidth, window.innerHeight);
};

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.set(0, 0, -20);
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

const raycaster = new THREE.Raycaster();

const light = new THREE.DirectionalLight(0xffffff, 1);
const light2 = new THREE.DirectionalLight(0xffffff, 2);
light.position.set(4, -4, 10);
light2.position.set(-1, 4, -10);
scene.add(light, light2);

const envTexture = new THREE.CubeTextureLoader().load([
    '../environmentMaps/2/nx.png',
    '../environmentMaps/2/ny.png',
    '../environmentMaps/2/nz.png',
    '../environmentMaps/2/px.png',
    '../environmentMaps/2/py.png',
    '../environmentMaps/2/pz.png',
]);

const targetObject = new THREE.Object3D();
targetObject.position.set(0, 0, 0);
light.target = targetObject;
light2.target = targetObject;

let mouse = new THREE.Vector2(-1, 1);

function onDocumentMouseMove(event) {
    event.preventDefault();

    // Calculate mouse position in normalized device coordinates (-1 to +1) for both components
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}

document.addEventListener('mousemove', onDocumentMouseMove, false);

renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 0.3;

const cubeSize = 10; // The number of cubes along each edge of the larger cube
const group = new THREE.Group();

for (let x = 0; x < 5; x++) {
    for (let y = 0; y < 5; y++) {
        for (let z = 0; z < 5; z++) {
            const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
            cubeGeometry.scale.x = Math.random();

            const uniforms = {
                time: { type: 'f', value: 0 },
                position: {
                    type: 'v3',
                    value: {
                        x: 0.0,
                        y: 0.0,
                        z: 0.0,
                    },
                },
            };

            const material = new ExtendedPhongMaterial({}, uniforms);
            const cube = new THREE.Mesh(cubeGeometry, material);
            cube.position.set(
                x - cubeSize / 2,
                y - cubeSize / 2,
                z - cubeSize / 2
            );

            cube.scale.set(Math.random(), 0.4, 0.4);
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
group.children.forEach((child) => {
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

const clock = new THREE.Clock();
let lastIntersected;
let neighbors = [];

const boundingBox = new THREE.Box3().setFromObject(group);

// Get the size of the bounding box
const size = new THREE.Vector3();
boundingBox.getSize(size);
function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    const allObjects = group.children.slice();
    group.children.map((o) => {
        const position = o.position;

        // Normalize the position values to be between 0 and 1
        const normalizedPosition = new THREE.Vector3(
            (position.x - boundingBox.min.x) / size.x,
            (position.y - boundingBox.min.y) / size.y,
            (position.z - boundingBox.min.z) / size.z
        );
        o.material.uniforms.time.value = elapsedTime;
        o.material.uniforms.position.value = normalizedPosition;
        o.material.needsUpdate = true;
    });
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(group.children);

    if (intersects.length > 0) {
        // If the closest object intersected is not the currently stored intersection object
        if (intersects[0].object !== lastIntersected) {
            // Restore previous intersection object (if it exists) to its original scale
            if (lastIntersected) {
                gsap.to(lastIntersected.scale, {
                    x: Math.random(),
                    y: 0.4,
                    z: 0.4,
                    duration: 10,
                });

                neighbors.forEach((neighbor) => {
                    gsap.to(neighbor.scale, {
                        x: Math.random(),
                        y: 0.4,
                        z: 0.4,
                        duration: 10,
                    });
                });
                neighbors = [];
            }

            // Store reference to closest object as current intersection object
            lastIntersected = intersects[0].object;

            // Set the scale of the current intersected object
            const distance = lastIntersected.position.distanceTo(
                intersects[0].point
            );
            const scaleFactor = 1 / Math.pow(distance, 0.1);
            if (
                lastIntersected.scale.x === 0.4 &&
                lastIntersected.scale.y === 0.4 &&
                lastIntersected.scale.z === 0.4
            ) {
                gsap.killTweensOf(lastIntersected.scale); // Add this line
                gsap.to(lastIntersected.scale, {
                    x: scaleFactor,
                    y: scaleFactor,
                    z: scaleFactor,
                    duration: 1,
                });
            }

            // Find neighbors
            allObjects.forEach((object) => {
                if (
                    object !== lastIntersected &&
                    object.position.distanceTo(lastIntersected.position) <= 3
                ) {
                    neighbors.push(object);
                    const neighborDistance = object.position.distanceTo(
                        lastIntersected.position
                    );
                    const neighborScaleFactor =
                        1 / Math.pow(neighborDistance, 0.1);
                    gsap.killTweensOf(object.scale); // Add this line
                    gsap.to(object.scale, {
                        x: neighborScaleFactor,
                        y: neighborScaleFactor,
                        z: neighborScaleFactor,
                        duration: 1,
                    });
                }

            });
        }
    } else {
        if (lastIntersected) {
            gsap.killTweensOf(lastIntersected.scale); // Add this line
            gsap.to(lastIntersected.scale, {
                x: Math.random(),
                y: 0.4,
                z: 0.4,
                duration: 10,
            });
            neighbors.forEach((neighbor) => {
                gsap.killTweensOf(neighbor.scale); // Add this line
                gsap.to(neighbor.scale, {
                    x: Math.random(),
                    y: 0.4,
                    z: 0.4,
                    duration: 10,
                });
            });
            neighbors = [];
            lastIntersected = undefined;
        }
    }
    controls.update();
    renderer.render(scene, camera);
}
animate();
