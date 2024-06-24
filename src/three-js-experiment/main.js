import '../scss/main.scss';
import * as THREE from 'three';
import fragment from '../shaders/fragment.glsl';
import fragment2 from '../shaders/fragment2.glsl';
import vertex3 from '../shaders/vertex3.glsl';
import vertex4 from '../shaders/vertex4.glsl';
import fragment3 from '../shaders/fragment3.glsl';
import lygiaFrag1 from '../shaders/lygiaShaderFragment2.glsl';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ToneSynth } from '../js/Tone.js';
import { ToneSynth2 } from '../js/Tone2';
import '@fortawesome/fontawesome-free/css/all.css';

window.onload = function () {
    document.getElementById('loading-screen').style.display = 'none';
};

const scene = new THREE.Scene();
const raycaster = new THREE.Raycaster();
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / 400,
    0.1,
    1000
);
const canvasElm = document.getElementById('threeCan');

const renderer = new THREE.WebGLRenderer({ canvas: canvasElm, alpha: true });
renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 0.3;
renderer.setSize(window.innerWidth, window.innerHeight);

const synth = new ToneSynth(3, 4, 50);
const synth2 = new ToneSynth2(3, 4, 50);

const soundButton = document.getElementById('play-sound');
soundButton.addEventListener('click', async () => {
    await synth.start();
    await synth2.startup();
    soundButton.innerText = 'Sound is ready';
});

const volumeSlider = document.getElementById('volume-slider');
synth.setVolume(0.2);
synth2.setVolume(0.2);
volumeSlider.addEventListener('input', (event) => {
    // Get the current value of the slider
    const volume = event.target.value;
    // Set the volume of the synth
    synth.setVolume(volume);
    synth2.setVolume(volume);
});

const xIcon = document.getElementById('x-icon');

xIcon.addEventListener('click', () => {
    const modal = document.getElementById('audioPopup');
    modal.style.display = 'none';
});

const capsules = [];
let position = -6;
const clock = new THREE.Clock();

const mouse = new THREE.Vector2();
function onDocumentMouseMove(event) {
    event.preventDefault();
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
}
let audioLevel = 0.0;
const uniforms = {
    time: { type: 'f', value: 0 },

    uBigWavesElevation: { value: 0.2 },
    uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
    uBigWavesSpeed: { value: 0.75 },

    uSmallWavesElevation: { value: 0.15 },
    uSmallWavesFrequency: { value: 3 },
    uSmallWavesSpeed: { value: 0.2 },
    uSmallIterations: { value: 4 },

    resolution: {
        type: 'v2',
        value: new THREE.Vector2(window.innerWidth, window.innerHeight),
    },
    uMouse: { value: mouse },
    uAudioLevel: { type: 'f', value: audioLevel },
    uPosition: { type: 'v3', value: new THREE.Vector3() },
};

const shaderMat = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertex4,
    fragmentShader: fragment,
});

const shaderMat2 = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertex3,
    fragmentShader: fragment2,
});

const shaderMat3 = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertex3,
    fragmentShader: fragment3,
});

const shaderMat4 = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertex3,
    fragmentShader: lygiaFrag1,
});

const vertexShaderPicker = (i) => {
    if (i % 3 === 0) {
        return vertex3;
    } else if (i % 2 === 0) {
        return vertex3;
    } else {
        return vertex4;
    }
};
const fragmentShaderPicker = (i) => {
    if (i % 3 === 0) {
        return fragment3;
    } else if (i % 2 === 0) {
        return fragment2;
    } else {
        return fragment;
    }
};

for (let i = 0; i < 30; i++) {
    const sphereGeo = new THREE.SphereGeometry(1, 30, 30, 8);
    const sphere = new THREE.Mesh(
        sphereGeo,
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    );
    sphere.position.set(
        Math.sin(Math.pow(position, 2)) * 2 + Math.pow(position, 2),
        Math.pow(position, 2),
        (position - 1) * 2
    );
    sphere.material = new THREE.ShaderMaterial({
        uniforms: {
            ...uniforms,
            uPosition: { type: 'v3', value: sphere.position },
        },
        vertexShader: vertexShaderPicker(i),
        fragmentShader: fragmentShaderPicker(i),
    });
    sphere.scale.set(i * 0.05, i * 0.05, i * 0.05);
    sphere.rotation.set(Math.PI / 2, Math.PI / 2, Math.PI / 2);
    sphere.name = `sphere${i}`;
    sphere.material.uniforms.uPosition = sphere.position;

    scene.add(sphere);
    capsules.push(sphere);
    position += 0.2;
}
// Moon
const materialsArray = [shaderMat, shaderMat2, shaderMat3];
const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertex3,
        fragmentShader: fragment2,
    })
);

const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(100, 100, 100, 100),
    shaderMat4
);

plane.name = 'plane';

plane.position.set(-30, 0, -40);
plane.rotation.y = -Math.PI / 32;

scene.add(moon, plane);

moon.position.setX(-10);

// moon.material.uniforms.uPosition = moon.position;

const stars = [];
function addStar() {
    const geometry = new THREE.SphereGeometry(1, 24, 24);
    const star = new THREE.Mesh(
        geometry,
        new THREE.MeshBasicMaterial({ color: 0xffffff })
    );

    const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));

    star.position.set(x, y, z);
    console.log(star.position);
    star.material = new THREE.ShaderMaterial({
        uniforms: {
            ...uniforms,
            uPosition: { type: 'v3', value: star.position },
        },
        vertexShader: vertexShaderPicker(Math.floor(Math.random() * 30)),
        fragmentShader: fragmentShaderPicker(Math.floor(Math.random() * 30)),
    });
    // star.material.uniforms.uPosition = star.position;
    scene.add(star);
    stars.push(star);
}

Array(200).fill().forEach(addStar);

camera.position.z = 20;
camera.position.y = 5;

camera.lookAt(scene.getObjectByName('sphere29').position);

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.005;
    moon.rotation.y += 0.0075;
    moon.rotation.z += 0.005;

    camera.position.z = t * -0.01;
    camera.position.x = t * -0.0002;
    camera.rotation.y = t * -0.0002;
}

document.body.onscroll = moveCamera;
moveCamera();

// resize

const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
};

document.addEventListener('mousemove', onDocumentMouseMove, false);

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

const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
let lastIntersected;

function animateScale(obj, up = true) {
    if (obj.name === 'plane') return null;
    if (up) {
        return gsap.to(obj.scale, {
            x: 2 + uniforms.uAudioLevel.value * 2,
            y: 2 + uniforms.uAudioLevel.value * 2,
            z: 2 + uniforms.uAudioLevel.value * 2,
            duration: 0.5,
        });
    } else {
        return gsap.to(obj.scale, { x: 1, y: 1, z: 1, duration: 0.5 });
    }
}
const synths = [synth];
const synthsAndPlayers = [synth, synth2];
const setupNote = () => {
    let mappedFreq;
    const randomSynth =
        synthsAndPlayers[Math.floor(Math.random() * synthsAndPlayers.length)];
    synths.map((s) => {
        s.setHarmonicity(Math.abs(lastIntersected.position.z));
        s.setModulationIndex(Math.abs(lastIntersected.position.z));
        const synthFreq = Math.abs(lastIntersected.position.y) * 1000;
        mappedFreq = synth.mapRange(synthFreq, 0, 10000, 200, 800);
        s.setRoomSize(
            Math.abs(
                synth.mapRange(
                    Math.abs(lastIntersected.position.x),
                    0,
                    30,
                    1,
                    0
                )
            )
        );
        s.setRelease(
            Math.abs(
                synth.mapRange(
                    Math.abs(lastIntersected.position.x),
                    0,
                    30,
                    1,
                    0
                )
            ) * 2
        );
    });

    synth2.setHarmonicity(Math.abs(lastIntersected.position.z));
    synth2.setModulationIndex(Math.abs(lastIntersected.position.z));
    synth2.setRelease(
        Math.abs(
            synth.mapRange(Math.abs(lastIntersected.position.x), 0, 30, 1, 0)
        ) * 2
    );

    synth.play(mappedFreq, '8n');
};

function animate() {
    requestAnimationFrame(raf);
    requestAnimationFrame(animate);
    const elapsedTime = clock.getElapsedTime();

    raycaster.setFromCamera(mouse, camera);

    const intersects = raycaster.intersectObjects(scene.children);

    capsules.forEach((sphere) => {
        sphere.material.uniforms.uPosition.value = sphere.position;
        sphere.material.needsUpdate = true;
    });

    if (intersects.length > 0) {
        if (lastIntersected && lastIntersected !== intersects[0].object) {
            // Reset scale of last intersected object
            animateScale(lastIntersected, false);
            setupNote();
        }

        // Increase scale of current intersected object
        animateScale(intersects[0].object, true);
        // Update last intersected object
        lastIntersected = intersects[0].object;
    } else if (lastIntersected) {
        // Reset scale of last intersected object
        animateScale(lastIntersected, false);
        setupNote();
        lastIntersected = null;
    }

    // Update material
    uniforms.uAudioLevel.value = synth.getLevel();
    uniforms.time.value = elapsedTime;
    renderer.render(scene, camera);
}

animate();
