// ExtendedPhongMaterial.js
import * as THREE from 'three';
import { extendedPhongVertex } from './extendedVert';
import { extendedPhongFragment } from './extendedFrag';

class ExtendedPhongMaterial extends THREE.MeshPhongMaterial {
    constructor(parameters, additionalUniforms = {}) {
        super(parameters, additionalUniforms);

        this.uniforms = {
            ...THREE.UniformsUtils.clone(THREE.ShaderLib.phong.uniforms),
            ...additionalUniforms,
        };

        this.setValues(parameters);
        this.onBeforeCompile = (shader) => {
            shader.vertexShader = extendedPhongVertex;
            shader.fragmentShader = extendedPhongFragment;
            shader.uniforms = this.uniforms;
        };
    }
}

export { ExtendedPhongMaterial };
