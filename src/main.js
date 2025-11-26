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
    invert: false, // false = dark chars on light background (good for your grey)
    resolution: 0.1,
});

// Brand colors (from your SCSS)
// $main-color: #bfbdbd;
// $secondary-color: #a6034f;
const asciiEl = effect.domElement;
asciiEl.style.color = '#6b6b6b'; // text color: maroon
asciiEl.style.backgroundColor = '#bfbdbd'; // background: grey
asciiEl.style.position = 'absolute';
asciiEl.style.top = '0';
asciiEl.style.left = '0';
asciiEl.style.right = '0';
asciiEl.style.bottom = '0';
asciiEl.style.width = '100%';
asciiEl.style.height = '100%';
asciiEl.style.margin = '0';
asciiEl.style.pointerEvents = 'none'; // behind content like your canvas
asciiEl.style.fontSize = '12px';
asciiEl.style.zIndex = '-1';

// IMPORTANT: AsciiEffect uses its own DOM element instead of the canvas
// So append it to the document (instead of using the canvas directly)
// document.body.appendChild(effect.domElement);
wrapper.appendChild(effect.domElement);

function updateSize() {
    const rect = canvasElm.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height || 1;

    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    effect.setSize(width, height);

    // Update asciiEl dimensions
    asciiEl.style.width = `${width}px`;
    asciiEl.style.height = `${height}px`;
}

// Initial sizing
updateSize();

const loader = new GLTFLoader();
const modelUrl = new URL('./models/sn-logo-9.glb', import.meta.url);
let mixer; // <-- animation mixer
const target = new THREE.Vector3(0, 0, 0);
const baseCamPos = new THREE.Vector3(0.05, 0, 1.2);
loader.load(
    modelUrl.href,
    (gltf) => {
        const model = gltf.scene;
        scene.add(model);
        model.traverse((child) => {
            if (child.isDirectionalLight) {
                child.intensity = 10; // Reduce intensity by 50%
            }
        });
        // --- SETUP ANIMATION ---
        if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            // Play the first animation clip
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
        }

        // --- Frame the model automatically ---
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);

        // Move model so its center is at the origin
        model.position.x += model.position.x - center.x;
        model.position.y += model.position.y - center.y;
        model.position.z += model.position.z - center.z;

        model.rotation.y = Math.PI / 8; // Turn left/right
        model.rotation.x = Math.PI / 4; // Tilt forward/back

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
    // camera.lookAt(target);
}
updateCameraFromScroll();
window.addEventListener('scroll', () => {
    updateCameraFromScroll();
});

function animate() {
    requestAnimationFrame(animate);

    // Optional: small rotation to show movement
    // scene.rotation.y += 0.003;
    const delta = clock.getDelta();
    if (mixer) {
        mixer.update(delta);
    }

    // renderer.render(scene, camera);
    effect.render(scene, camera);
}
animate();
