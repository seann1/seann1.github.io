import * as THREE from 'three';
import { Noise } from 'noisejs';
export function createMaterial2(gui, time, params) {
    const SphereMaterial2 = new THREE.MeshStandardMaterial();

    SphereMaterial2.onBeforeCompile = (shader) => {
        shader.uniforms.colorScale = { value: params.colorScale };
        shader.uniforms.time = { value: time };
        const noise = new Noise(Math.random());

        SphereMaterial2.userData.shader = shader;
        // Add a varying for the fragment shader
        shader.vertexShader = shader.vertexShader.replace(
            '#include <common>',
            `
				#include <common>
				varying vec3 vPosition;
				`
        );
        shader.vertexShader = shader.vertexShader.replace(
            '#include <begin_vertex>',
            `
				#include <begin_vertex>
				vPosition = position;
				`
        );
        // Use vPosition to create a color gradient in the fragment shader
        shader.fragmentShader = shader.fragmentShader.replace(
            '#include <common>',
            `
				#include <common>
				varying vec3 vPosition;
				uniform float colorScale;
				uniform float time;
				
				// GLSL Perlin noise (classic 3D)
				vec4 permute(vec4 x) {
				  return mod(((x*34.0)+1.0)*x, 289.0);
				}
				vec4 taylorInvSqrt(vec4 r) {
				  return 1.79284291400159 - 0.85373472095314 * r;
				}
				float perlinNoise(vec3 v) {
				  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
				  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
				  vec3 i  = floor(v + dot(v, C.yyy) );
				  vec3 x0 =   v - i + dot(i, C.xxx) ;
				  vec3 g = step(x0.yzx, x0.xyz);
				  vec3 l = 1.0 - g;
				  vec3 i1 = min( g.xyz, l.zxy );
				  vec3 i2 = max( g.xyz, l.zxy );
				  vec3 x1 = x0 - i1 + C.xxx;
				  vec3 x2 = x0 - i2 + C.yyy;
				  vec3 x3 = x0 - D.yyy;
				  i = mod(i, 289.0 );
				  vec4 p = permute( permute( permute(
					i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
					+ i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
					+ i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
				  float n_ = 1.0/7.0;
				  vec3  ns = n_ * D.wyz - D.xzx;
				  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
				  vec4 x_ = floor(j * ns.z);
				  vec4 y_ = floor(j - 7.0 * x_ );
				  vec4 x = x_ *ns.x + ns.y;
				  vec4 y = y_ *ns.x + ns.y;
				  vec4 h = 1.0 - abs(x) - abs(y);
				  vec4 b0 = vec4( x.xy, y.xy );
				  vec4 b1 = vec4( x.zw, y.zw );
				  vec4 s0 = floor(b0)*2.0 + 1.0;
				  vec4 s1 = floor(b1)*2.0 + 1.0;
				  vec4 sh = -step(h, vec4(0.0));
				  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
				  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;
				  vec3 p0 = vec3(a0.xy,h.x);
				  vec3 p1 = vec3(a0.zw,h.y);
				  vec3 p2 = vec3(a1.xy,h.z);
				  vec3 p3 = vec3(a1.zw,h.w);
				  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
				  p0 *= norm.x;
				  p1 *= norm.y;
				  p2 *= norm.z;
				  p3 *= norm.w;
				  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
				  m = m * m;
				  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
					dot(p2,x2), dot(p3,x3) ) );
				}
							`
        );
        shader.fragmentShader = shader.fragmentShader.replace(
            '#include <dithering_fragment>',
            `
				float dist = length(vPosition); // Distance from origin
				float edge = smoothstep(0.0, 1.0, (dist-30.0) / 10.0); // Adjust 30.0 to your sphere's radius
				// Multicolor: map position to color
				vec3 baseColor = vec3(
				  step(0.5, perlinNoise(vec3(vPosition.x*0.1,vPosition.y*0.5, time))),
				  step(0.2, perlinNoise(vec3(vPosition.x*0.1,vPosition.y*0.5, time))) * sin(time),
				  sin(vPosition.y * step(0.2, perlinNoise(vec3(vPosition.x*0.1,vPosition.y*0.1, time))) + 4.0) * sin(time)
				);
				
				vec3 normPos = (vPosition + 30.0) / 60.0;
// vec3(edge)
				vec3 color = mix(baseColor, mix(normPos, vec3(edge), 1.0-edge), 0.7); // 0.5 = blend factor, adjust as needed
				if (edge < 0.01) {
					color = vec3(0.8, 0.2, 0.0);
				} else if (edge > 0.9) {
					color = baseColor;
				}
				gl_FragColor.rgb = color;
				#include <dithering_fragment>
				`
        );

        // if (gui) {
        // 	gui.add(params, 'colorScale', 0.1, 1).onChange((value) => {
        // 		shader.uniforms.colorScale.value = value;
        // 	});
        // }
    };

    return SphereMaterial2;
}
