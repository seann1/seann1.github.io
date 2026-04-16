import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Lenis from '@studio-freight/lenis';

import { initVimeoSketch } from './js/videoSketch.js';

const canvasElm = document.getElementById('threeCanMain');
const renderer = new THREE.WebGLRenderer({ canvas: canvasElm, alpha: true });
import SVGComponent from './Components/SVGComponent';
import PortfolioItem from './Components/PortfolioItem';
import ExperimentItem from './Components/ExperimentItem';
import SkillItem from './Components/SkillItem';

import vertexShader from './shaders/snLogo/vertex.glsl?raw';
import fragmentShader from './shaders/snLogo/fragment.glsl?raw';
import particleVertexShader from './shaders/snParticles/vertex.glsl?raw';
import particleFragmentShader from './shaders/snParticles/fragment.glsl?raw';

let threeFraction = 0;
let videoFraction = 0;

initVimeoSketch().then(() => {
    videoFraction = 1;
    updateCombinedProgress();
    console.log('sketchLoaded');
});

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

const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;

if (!isTouchDevice) {
    // Desktop: drive tilt with mouse
    window.addEventListener('mousemove', (e) => {
        // Normalize to -1 .. 1
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = (e.clientY / window.innerHeight) * 2 - 1;
    });
} else {
    // Mobile: drive tilt with gyroscope
    const TILT_RANGE = 30; // degrees of device tilt that map to full ±1

    const attachGyroscope = () => {
        window.addEventListener('deviceorientation', (e) => {
            // gamma = left/right tilt (-90 to 90), beta = front/back tilt (-180 to 180)
            const gamma = e.gamma ?? 0; // left/right → X axis
            const beta = e.beta ?? 0; // front/back → Y axis

            mouse.x = Math.max(-1, Math.min(1, gamma / TILT_RANGE));
            mouse.y = Math.max(-1, Math.min(1, (beta - 45) / TILT_RANGE)); // offset by 45° for natural hold angle
        });
    };

    // iOS 13+ requires a user-gesture permission request
    if (
        typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
        console.log('button');
        // Create a small tap-to-enable button that auto-dismisses
        const btn = document.createElement('button');
        btn.textContent = 'Enable Motion';
        btn.style.cssText = `
            position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
            z-index: 9999; padding: 10px 22px; border-radius: 999px;
            background: rgba(0,0,0,0.7); color: #fff; border: none;
            font-size: 14px; cursor: pointer;
        `;
        document.body.appendChild(btn);

        btn.addEventListener('click', () => {
            DeviceOrientationEvent.requestPermission()
                .then((state) => {
                    if (state === 'granted') attachGyroscope();
                })
                .catch(console.error)
                .finally(() => btn.remove());
        });
    } else {
        // Android / older iOS — no permission needed
        attachGyroscope();
    }
}

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

function updateSize() {
    const rect = canvasElm.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height || 1;

    renderer.setSize(width, height, false);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
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
const ui = document.getElementById('loader-ui');
const loaderPercent = document.getElementById('loader-percent');
///////////////
function setProgress(pct) {
    ui.style.width = pct + '%';
    loaderPercent.innerText = pct + '%';
    // ui.percent.textContent = pct + '%';
}

function updateCombinedProgress() {
    const pct = Math.round(threeFraction * 50 + videoFraction * 50);
    setProgress(pct);
    if (pct >= 100) {
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
        }, 300);
    }
}
// Create a LoadingManager and wire it to the UI
const manager = new THREE.LoadingManager();
manager.onStart = (url, itemsLoaded, itemsTotal) => {
    console.log(itemsLoaded, itemsTotal);
    threeFraction = itemsTotal ? itemsLoaded / itemsTotal : 0;
    updateCombinedProgress();
};
manager.onProgress = (url, itemsLoaded, itemsTotal) => {
    threeFraction = itemsTotal ? itemsLoaded / itemsTotal : 0;
    updateCombinedProgress();
};
manager.onLoad = () => {
    threeFraction = 1;
    updateCombinedProgress();
};
manager.onError = (url) => {
    console.error('Loading error:', url);
    // hide UI on fatal error to avoid blocking the app
    // hideProgressUI();
};
///////////////////

const loader = new GLTFLoader(manager);
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
            if (child.isMesh) {
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

// --- Firefly Particle System ---
const FIREFLY_COUNT = 150;

const fireflyGeo = new THREE.BufferGeometry();
const fireflyPositions = new Float32Array(FIREFLY_COUNT * 3);
const fireflySeeds = new Float32Array(FIREFLY_COUNT * 3); // random offsets per particle

for (let i = 0; i < FIREFLY_COUNT; i++) {
    // Spread particles in a volume slightly in front of the logo (z ~ 0.2 to 0.6)
    fireflyPositions[i * 3 + 0] = (Math.random() - 0.5) * 0.6; // x: ±0.4
    fireflyPositions[i * 3 + 1] = (Math.random() - 0.5) * 0.6 + 0.2; // y: ±0.3
    fireflyPositions[i * 3 + 2] = Math.random() * 0.4 + 0.15; // z: 0.15 – 0.55

    // Unique seed per particle for staggered animation
    fireflySeeds[i * 3 + 0] = Math.random() * Math.PI * 2; // phase offset
    fireflySeeds[i * 3 + 1] = 0.4 + Math.random() * 0.5; // rise speed multiplier
    fireflySeeds[i * 3 + 2] = Math.random() * Math.PI * 2; // drift phase
}

fireflyGeo.setAttribute(
    'position',
    new THREE.BufferAttribute(fireflyPositions, 3)
);
fireflyGeo.setAttribute('aSeed', new THREE.BufferAttribute(fireflySeeds, 3));

const fireflyMaterial = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: {
        uTime: { value: 0 },
        uSize: { value: 18.0 * window.devicePixelRatio },
        uMouse: { value: new THREE.Vector2(0, 0) },
    },
    vertexShader: particleVertexShader,
    fragmentShader: particleFragmentShader,
});

// Track mouse only on non-touch devices
const smoothMouse = new THREE.Vector2(0, 0);
const targetMouse = new THREE.Vector2(0, 0);

if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('mousemove', (e) => {
        // Convert screen coords to world-space XZ plane coords
        targetMouse.x = (e.clientX / window.innerWidth - 0.5) * 2.0;
        targetMouse.y = (e.clientY / window.innerHeight - 0.5) * -2.0;
    });
}

const fireflies = new THREE.Points(fireflyGeo, fireflyMaterial);
scene.add(fireflies);
/// END FIREFLIES

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
    fireflyMaterial.uniforms.uTime.value = elapsedTime;

    // Lerp for smooth lag effect
    smoothMouse.lerp(targetMouse, 0.005);
    fireflyMaterial.uniforms.uMouse.value.copy(smoothMouse);

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
