import './scss/main.scss';
import * as THREE from 'three';
import fragment from './shaders/fragment.glsl';
import vertex from './shaders/vertex.glsl';
import fragment2 from './shaders/fragment2.glsl';
import vertex2 from './shaders/vertex2.glsl';
import fragment3 from './shaders/fragment3.glsl';
import Lenis from '@studio-freight/lenis';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / 400, 0.1, 1000 );
const canvasElm = document.getElementById("threeCan");

const renderer = new THREE.WebGLRenderer({ canvas: canvasElm, alpha: true });
renderer.toneMapping = THREE.LinearToneMapping;
renderer.toneMappingExposure = 0.3;
renderer.setSize( window.innerWidth, window.innerHeight );


const colors = [];
for(let col=0x000000; col<=0xFFFFFF; col += 100) {
  if (col.toString().length === 6) colors.push(col);
  if (col.toString().length > 6) break;
}

let lineValue = 0;
let lineValue2 = 0;

const lineGeometries = [];
for(let i =0; i < 20; i++) {
    const points = [];
    points.push( new THREE.Vector3( -lineValue, -1, -lineValue2 ) );
    points.push( new THREE.Vector3( 0, -1, 0 ) );
    points.push( new THREE.Vector3( lineValue, 0, -lineValue2 ) );
    lineGeometries[i] = new THREE.BufferGeometry().setFromPoints( points );

    lineValue += Math.sin(0.5);
    lineValue2 += Math.sin(0.3);
}

const curves = [];
const capsules = [];
let position = -6;
const clock = new THREE.Clock();

const uniforms = {
    time: { type: "f", value: 0 },
    resolution: { type: "v2", value: new THREE.Vector2() }
};

const shaderMat = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertex,
    fragmentShader: fragment
});

const shaderMat2 = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertex2,
    fragmentShader: fragment2
});

const shaderMat3 = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: vertex2,
    fragmentShader: fragment3
});

for (let i = 0; i < 30; i++) {
    const curve = new THREE.EllipseCurve(
        position,  position,            // ax, aY
        3, 3,           // xRadius, yRadius
        0,  2 * Math.PI,  // aStartAngle, aEndAngle
        false,            // aClockwise
        0                 // aRotation
    );
    const capsuleGeo = new THREE.CapsuleGeometry( 1, 1, 4, 8 );
    
    const capsule = new THREE.Mesh( capsuleGeo, shaderMat);
    capsule.position.set(Math.pow(position, 2), Math.pow(position,2), (position - 1) *  2);
    scene.add(capsule);
    capsules.push(capsule);
    const points = curve.getPoints( 20 );
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    curves.push(new THREE.Line( geometry, new THREE.LineBasicMaterial( { color:  colors[Math.floor(Math.random()*colors.length)]}) ));
    position += 0.2;
};

const lines = [];
lineGeometries.map(l => lines.push(new THREE.Line(l, new THREE.LineBasicMaterial( { color:  colors[Math.floor(Math.random()*colors.length)]}))));
lines.map(l => scene.add(l));
curves.map(w => scene.add(w));
const light = new THREE.AmbientLight( 0x404040, 30 ); // soft white light
light.position.set(10,10,3);

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

scene.add( light, pointLight );
const materialsArray = [shaderMat, shaderMat2, shaderMat3];
// Moon

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    shaderMat2
);

scene.add(moon);

moon.position.setX(-10);
function addStar() {
    const geometry = new THREE.SphereGeometry(1, 24, 24);
    const star = new THREE.Mesh(geometry, materialsArray[Math.floor(Math.random()*materialsArray.length)]);
    
    const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));
    
    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

camera.position.z = -1;
let xRot = 0.00;
let yRot = 0.00;
let zRot = 0.00;
let xPos = 0.00;

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
    height: window.innerHeight
};

window.addEventListener('resize', () =>
{
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

function animate() {
    requestAnimationFrame(raf);
	requestAnimationFrame( animate );
    const elapsedTime = clock.getElapsedTime()
    
    // Update material
    uniforms.time.value = elapsedTime
    // const moonAngle = elapsedTime * 0.5;
    // moon.position.x = Math.cos(moonAngle) * 0.4;
    // moon.position.z = Math.sin(moonAngle) * 0.4;
    // moon.position.y = Math.sin(elapsedTime * 0.3);
    curves.map(c => {
        c.rotation.y += Math.sin(0.001);
        c.position.x += xPos;
        xPos  > 0.001 ? xPos -= 0.0001 : xPos += 0.0001;
    })
    lines.map(l => {
        l.rotation.x -= Math.sin(xRot);
        l.rotation.y -= Math.sin(yRot);
        l.rotation.z -= Math.sin(zRot);
        // xRot += 0.00001
        xRot  > 0.01 ? xRot -= 0.0001 : xRot+= 0.0001;
        yRot  > 0.01 ? yRot -= 0.0001 : yRot+= 0.0001;
        zRot  > 0.01 ? zRot -= 0.0001 : zRot+= 0.0001;
        }
    )
    camera.rotation.x += 0.0002;
    camera.rotation.y += 0.0002;
	renderer.render( scene, camera );
}

animate();
