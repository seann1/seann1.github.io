import * as THREE from 'three';
import fragment from './shaders/fragment.glsl';
import fragment2 from './shaders/fragment2.glsl';
import vertex3 from './shaders/vertex3.glsl';
import vertex4 from './shaders/vertex4.glsl';
import fragment3 from './shaders/fragment3.glsl';
import lygiaFrag1 from './shaders/lygiaShaderFragment2.glsl';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ToneSynth } from './js/Tone.js';
import { ToneSynth2 } from './js/Tone2';

window.onload = function () {
    document.getElementById('loading-screen').style.display = 'none';
};
