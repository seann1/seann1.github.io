import * as THREE from '../node_modules/three/build/three.module.js';
// import { RGBELoader } from '../node_modules/three/examples/jsm/loaders/RGBELoader.js';
// import WebGL from '../node_modules/three/addons/capabilities/WebGL.js';

// Loaders
// const rgbeLoader = new RGBELoader()

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / 400, 0.1, 1000 );
const canvasElm = document.getElementById("threeCan");

// rgbeLoader.load('/environmentMaps/the_sky_is_on_fire_2k.pic', (environmentMap) =>
// {
//     environmentMap.mapping = THREE.EquirectangularReflectionMapping
//
//     scene.background = environmentMap
//     scene.environment = environmentMap
// })

const renderer = new THREE.WebGLRenderer({ canvas: canvasElm });
renderer.setSize( window.innerWidth, window.innerHeight );

// const lineMaterial = new THREE.LineBasicMaterial( { color: 0xffffff } );

var colors = new Array();
for(let col=0x000000;col<=0xFFFFFF;col += 100) {
  if (col.toString().length === 6) colors.push(col);
  if (col.toString().length > 6) break;
}

let lineValue = 0
let lineValue2 = 0

const lineGeometries = []
for(let i =0; i < 20; i++) {
    const points = [];
    points.push( new THREE.Vector3( -lineValue, -1, -lineValue2 ) );
    points.push( new THREE.Vector3( 0, -1, 0 ) );
    points.push( new THREE.Vector3( lineValue, 0, -lineValue2 ) );
    lineGeometries[i] = new THREE.BufferGeometry().setFromPoints( points );

    lineValue += Math.sin(0.5)
    lineValue2 += Math.sin(0.3)
}

const curves = []
const capsules = []
let position = -6

const shaderMat = new THREE.RawShaderMaterial({
    uniforms: {
        time: { value: 0.0 },
        speed: { value: 0.1 },
        scale: { value: 10.0 },
        lavaTexture: { value: new THREE.TextureLoader().load('../images/lava.jpg') }
    },
    vertexShader: `
            uniform float time;
            uniform float speed;
            uniform float scale;

            varying vec2 vUv;

            void main() {
                vUv = uv;
                vec3 noise = vec3(
                    texture2D(lavaTexture, vUv * scale + vec2(time * speed, time * speed)).r,
                    texture2D(lavaTexture, vUv * scale + vec2(1.0 + time * speed, time * speed)).g,
                    texture2D(lavaTexture, vUv * scale + vec2(-1.0 - time * speed, -time * speed)).b
                );
                vec3 pos = position + noise * 0.2;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
            }
        `,
    fragmentShader: `
            uniform float time;
            uniform sampler2D lavaTexture;

            varying vec2 vUv;

            void main() {
                vec3 lavaColor = vec3(
                    texture2D(lavaTexture, vUv).r,
                    texture2D(lavaTexture, vUv).g,
                    texture2D(lavaTexture, vUv).b
                );
                gl_FragColor = vec4(lavaColor, 1.0);
            }
        `,
});

for (let i = 0; i < 30; i++) {
    const curve = new THREE.EllipseCurve(
        position,  position,            // ax, aY
        3, 3,           // xRadius, yRadius
        0,  2 * Math.PI,  // aStartAngle, aEndAngle
        false,            // aClockwise
        0                 // aRotation
    )
    const capsuleGeo = new THREE.CapsuleGeometry( 1, 1, 4, 8 );

      // new THREE.MeshLambertMaterial( { color:  colors[Math.floor(Math.random()*colors.length)]})
    const capsule = new THREE.Mesh( capsuleGeo, shaderMat);
    capsule.position.set(Math.pow(position, 2), Math.pow(position,2), position *  2)
    scene.add(capsule)
    capsules.push(capsule);
    const points = curve.getPoints( 20 );
    const geometry = new THREE.BufferGeometry().setFromPoints( points );
    curves.push(new THREE.Line( geometry, new THREE.LineBasicMaterial( { color:  colors[Math.floor(Math.random()*colors.length)], width: 10}) ))
    position += 0.2
}
// const ellipse = new THREE.Line( geometry, new THREE.LineBasicMaterial( { color:  colors[Math.floor(Math.random()*colors.length)], width: 10}) );
const lines = []
lineGeometries.map(l => lines.push(new THREE.Line(l, new THREE.LineBasicMaterial( { color:  colors[Math.floor(Math.random()*colors.length)], width: 10}))))
lines.map(l => scene.add(l))
curves.map(w => scene.add(w))
const light = new THREE.AmbientLight( 0x404040, 30 ); // soft white light
light.position.set(10,10,3)

const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(5, 5, 5);

scene.add( light, pointLight );

// Background

const spaceTexture = new THREE.TextureLoader().load('../images/space.jpg');
scene.background = spaceTexture;

// Moon

const moonTexture = new THREE.TextureLoader().load('../images/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('../images/normal.jpg');

const moon = new THREE.Mesh(
    new THREE.SphereGeometry(3, 32, 32),
    new THREE.MeshStandardMaterial({
        map: moonTexture,
        normalMap: normalTexture,
    })
    // shaderMat
);

scene.add(moon);
// moon.position.z = 30;
moon.position.setX(-10);

function addStar() {
    const geometry = new THREE.SphereGeometry(0.25, 24, 24);
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const star = new THREE.Mesh(geometry, material);
    
    const [x, y, z] = Array(3)
        .fill()
        .map(() => THREE.MathUtils.randFloatSpread(100));
    
    star.position.set(x, y, z);
    scene.add(star);
}

Array(200).fill().forEach(addStar);

camera.position.z = 1.5;
let xRot = 0.00
let yRot = 0.00
let zRot = 0.00
let xPos = 0.00

function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    moon.rotation.x += 0.05;
    moon.rotation.y += 0.075;
    moon.rotation.z += 0.05;
    //
    // jeff.rotation.y += 0.01;
    // jeff.rotation.z += 0.01;
    
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
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
    
    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    
    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

function animate() {
	requestAnimationFrame( animate );
    curves.map(c => {
        c.rotation.y += Math.sin(0.001)
        c.position.x += xPos
        xPos  > 0.001 ? xPos -= 0.0001 : xPos += 0.0001
    })
    lines.map(l => {
        l.rotation.x -= Math.sin(xRot)
        l.rotation.y -= Math.sin(yRot)
        l.rotation.z -= Math.sin(zRot)
        // xRot += 0.00001
        xRot  > 0.01 ? xRot -= 0.0001 : xRot+= 0.0001
        yRot  > 0.01 ? yRot -= 0.0001 : yRot+= 0.0001
        zRot  > 0.01 ? zRot -= 0.0001 : zRot+= 0.0001
        }
    )
    camera.rotation.x += 0.001
    camera.rotation.y += 0.001
	renderer.render( scene, camera );
}

animate();
// if ( WebGL.isWebGLAvailable() ) {
//
// 	// Initiate function or other initializations here
// 	animate();
//
// } else {
//
// 	const warning = WebGL.getWebGLErrorMessage();
// 	document.getElementById( 'threeCan' ).appendChild( warning );
//
// }
