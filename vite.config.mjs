import glsl from 'vite-plugin-glsl';
import path from "path";
import { defineConfig } from 'vite';

export default defineConfig({
	root: path.join(__dirname, "src"),
	build: {
		outDir: path.resolve(__dirname, 'docs')
	},
	plugins: [glsl()],
});
