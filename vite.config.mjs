import glsl from 'vite-plugin-glsl';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from "path";
import { defineConfig } from 'vite';

export default defineConfig({
	root: path.join(__dirname, "src"),
	plugins: [
		glsl(),
		createHtmlPlugin()
	],
	build: {
		rollupOptions: {
			input: {
				main: path.resolve(__dirname, 'src/index.html'),
				psdRemake: path.resolve(__dirname, 'src/psd-remake/index.html'),
				threeJsExperiment: path.resolve(__dirname, 'src/three-js-experiment/index.html'),
				threeJsExperiment2: path.resolve(__dirname, 'src/three-js-experiment-2/index.html'),
				threeJsExperiment3: path.resolve(__dirname, 'src/three-js-experiment-3/index.html'),
				threeJsExperiment4: path.resolve(__dirname, 'src/three-js-experiment-4/index.html'),
				threeJsExperiment5: path.resolve(__dirname, 'src/three-js-experiment-5/index.html'),
				threeJsExperiment6: path.resolve(__dirname, 'src/three-js-experiment-6/index.html'),
				p5Experiment1: path.resolve(__dirname, 'src/p5-projects/p5-experiment-1/index.html'),
				p5Experiment2: path.resolve(__dirname, 'src/p5-projects/p5-experiment-2/index.html'),
			}
		}
	}
});
