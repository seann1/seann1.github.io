import glsl from 'vite-plugin-glsl';
import { createHtmlPlugin } from 'vite-plugin-html';
import path from "path";
import { defineConfig } from 'vite';

export default defineConfig({
	root: path.join(__dirname, "src"),
	build: {
		rollupOptions: {
			output: {
				dir: path.resolve(__dirname, 'docs'),
				entryFileNames: 'main.js',
			}
		},
		// outDir: path.resolve(__dirname, 'docs')
	},
	plugins: [
		glsl(),
		createHtmlPlugin()
	]
});
