import * as THREE from "three";

export function createMaterial1(gui, time, params) {
	const SphereMaterial1 = new THREE.MeshStandardMaterial();
	
	SphereMaterial1.onBeforeCompile = (shader) => {
		shader.uniforms.colorScale = { value: params.colorScale };
		shader.uniforms.time = { value: time };
		SphereMaterial1.userData.shader = shader;
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
							`
		);
		shader.fragmentShader = shader.fragmentShader.replace(
			'#include <dithering_fragment>',
			`
				float dist = length(vPosition); // Distance from origin
				float edge = smoothstep(0.0, 1.0, (dist-30.0) / 10.0); // Adjust 30.0 to your sphere's radius
				// Multicolor: map position to color
				vec3 baseColor = vec3(
				  0.5 + 0.5 * sin(vPosition.x * 0.05) * (colorScale* sin(time)) * sin(time),
				  0.5 + 0.5 * sin(vPosition.y * (colorScale* sin(time)) + 3.0) * colorScale,
				  0.5 + 0.5 * sin(vPosition.z * (colorScale* sin(time)) + 4.0) * sin(time)
				);
				vec3 color = mix(baseColor, vec3(edge), 0.5); // 0.5 = blend factor, adjust as needed
				if (edge > 0.9) {
					color = baseColor;
				}
				gl_FragColor.rgb = color;
				#include <dithering_fragment>
				`
		);
		
		if (gui) {
			gui.add(params, 'colorScale', 0.1, 1).onChange((value) => {
				shader.uniforms.colorScale.value = value;
			});
		}
	};
	
	return SphereMaterial1;
}
