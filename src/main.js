import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
import Lenis from '@studio-freight/lenis';

const canvasElm = document.getElementById('threeCanMain');
const wrapper = canvasElm.parentElement;
const renderer = new THREE.WebGLRenderer({ canvas: canvasElm, alpha: true });
import SVGComponent from './Components/SVGComponent';
import PortfolioItem from './Components/PortfolioItem';
import ExperimentItem from './Components/ExperimentItem';
import SkillItem from './Components/SkillItem';

import vertexShader from './shaders/snLogo/vertex.glsl?raw';
import fragmentShader from './shaders/snLogo/fragment.glsl?raw';

let model;
/**
 * Initialize a marquee effect for an HTML element.
 *
 * @param {HTMLElement} element - The element to apply the marquee effect to.
 * @param {number} [repeatCount=7] - The number of times to repeat the element's content.
 * @param {number} [step=1] - The step size for the marquee animation.
 */
const startMarquee = (element, repeatCount = 7, step = 1) => {
    /**
     * Function that animates the marquee effect.
     */
    const animateMarquee = () => {
        position = position < width ? position + step : 1;
        element.style.marginLeft = `${-position}px`;
        element.style.overflow = 'hidden';
        element.style.whiteSpace = 'nowrap';
        requestAnimationFrame(animateMarquee);
    };

    let position = 0;
    const space = '';
    const content = element.innerHTML;
    element.innerHTML = Array(repeatCount)
        .fill(content + space)
        .join('');
    element.style.position = 'absolute';
    const width = element.clientWidth + 1;
    element.style.position = '';

    // Start the marquee animation
    animateMarquee();
};

const lenis = new Lenis({
    duration: 1.7, // Adjust the duration for smoothness
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing function
    smooth: true,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const camera = new THREE.PerspectiveCamera(
    60, // fov
    canvasElm.getBoundingClientRect().width /
        canvasElm.getBoundingClientRect().height, // aspect
    0.1, // near
    1000 // far
);

// Add this near the top, after your scene/camera setup
let mouse = { x: 0, y: 0 };
let targetRotation = { x: 0, y: 0 };

window.addEventListener('mousemove', (e) => {
    // Normalize to -1 .. 1
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
});

window.onload = function () {
    setTimeout(() => {
        document.getElementById('loading-screen').style.display = 'none';
    }, '50');
    // renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // Example usages:
    startMarquee(document.getElementById('marquee'), 32, 0.5); // Customize repeatCount and step
};

// ASCII --------------------------------------------------------

const asciiChars = ' .:-=+*#%@';

const effect = new AsciiEffect(renderer, asciiChars, {
    // invert: true, // false = dark chars on light background (good for your grey)
    // color: true,
    // alpha: true,
    resolution: 0.1,
});

// IMPORTANT: AsciiEffect uses its own DOM element instead of the canvas
// So append it to the document (instead of using the canvas directly)
// document.body.appendChild(effect.domElement);
// wrapper.appendChild(effect.domElement);

function updateSize() {
    const rect = canvasElm.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height || 1;

    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    effect.setSize(width, height);
}

// Initial sizing
updateSize();

const shaderMaterial = new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
        // 0xa6034f
        uBaseColor: { value: new THREE.Color(0xa6034f) },
        uLightDir: { value: new THREE.Vector3(5, 5, 5).normalize() },
        uLightColor: { value: new THREE.Color(1, 1, 1) },
        uRimStrength: { value: 1.5 },
        uTime: { value: 0 },
        uNoiseStrength: { value: 0.05 }, // small Z displacement
        uNoiseFrequency: { value: 20.0 },
        uNoiseFrequency2: { value: 5.0 },
    },
});

const loader = new GLTFLoader();
const modelUrl = new URL('./models/sn-logo-remesh-7.glb', import.meta.url);
let mixer; // <-- animation mixer
const target = new THREE.Vector3(0, 0, 0);
const baseCamPos = new THREE.Vector3(0.05, 0, 1.2);

loader.load(
    modelUrl.href,
    (gltf) => {
        model = gltf.scene;
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        model.traverse((child) => {
            console.log(child);
            if (child.isMesh) {
                console.log(child);
                child.material = shaderMaterial;
                child.rotation.x = 0;
            }
        });
        // --- Frame the model automatically ---
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        // Compute ideal camera distance based on model size
        const maxDim = Math.max(size.x, size.y, size.z);
        const fov = camera.fov * (Math.PI / 180);
        let cameraZ = maxDim / (2 * Math.tan(fov / 2));

        // camera.position.set(baseCamPos);
        // camera.lookAt(target);
    },
    undefined,
    (error) => {
        console.error('Error loading GLB:', error);
    }
);

// const canvas = document.getElementById('threeCan');
const scene = new THREE.Scene();

// Ambient light - base illumination so nothing is pitch black
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

// Directional light - main light source (like the sun)
const dirLight = new THREE.DirectionalLight(0xffffff, 2);
dirLight.position.set(5, 5, 5);
scene.add(dirLight);

// Optional: fill light from the opposite side to soften shadows
const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
fillLight.position.set(-5, -2, -5);
scene.add(fillLight);

// Optional: point light for a localized glow effect
const pointLight = new THREE.PointLight(0xa6034f, 2, 10); // using your brand color
pointLight.position.set(0, 2, 2);
scene.add(pointLight);

camera.position.set(baseCamPos); // Basic starting position
scene.add(camera);
const clock = new THREE.Clock();

const sizes = {
    width: canvasElm.getBoundingClientRect().width,
    height: canvasElm.getBoundingClientRect().height,
};

window.addEventListener('resize', () => {
    updateSize();
});

function updateCameraFromScroll() {
    const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
    const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const s = docHeight > 0 ? scrollTop / docHeight : 0;

    // baseCamPos and target defined elsewhere
    const maxOffsetX = 1;
    const maxOffsetY = 3;

    const offsetX = maxOffsetX * s;
    const offsetY = maxOffsetY * s;

    camera.position.set(
        baseCamPos.x - offsetX,
        baseCamPos.y - offsetY,
        baseCamPos.z
    );
    // Rotate model based on scroll
    if (model) {
        const maxSpin = Math.PI * 2; // full 360° spin over the full scroll range
        model.userData.scrollRotationY = s * maxSpin;
    }
}
updateCameraFromScroll();
window.addEventListener('scroll', () => {
    updateCameraFromScroll();
});

// const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();
    shaderMaterial.uniforms.uTime.value = elapsedTime;

    // Oscillate between 10 and 30
    shaderMaterial.uniforms.uNoiseFrequency.value =
        20.0 + Math.sin(elapsedTime * 0.1) * 20.0;

    const delta = clock.getDelta();
    if (mixer) {
        mixer.update(delta);
    }

    // Smoothly lerp toward mouse position
    if (model) {
        const tiltStrength = 0.9; // max radians of tilt
        const lerpSpeed = 0.05; // 0 = no movement, 1 = instant

        targetRotation.x = mouse.y * tiltStrength;
        targetRotation.y = mouse.x * tiltStrength;

        const scrollY = model.userData.scrollRotationY || 0;

        // Lerp current rotation toward target
        // Keep your existing Math.PI / 2 X offset by adding to it
        model.rotation.x = THREE.MathUtils.lerp(
            model.rotation.x,
            Math.PI / 2 + targetRotation.x,
            lerpSpeed
        );
        model.rotation.y = THREE.MathUtils.lerp(
            model.rotation.y,
            targetRotation.y,
            lerpSpeed
        );
        model.rotation.z = scrollY * 5;
    }
    renderer.render(scene, camera);
    // effect.render(scene, camera);
}
animate();
