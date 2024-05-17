import glsl from 'vite-plugin-glsl';
// import { createHtmlPlugin } from 'vite-plugin-html';
import path from "path";
import { defineConfig } from 'vite';

export default defineConfig({
	root: path.join(__dirname, "src"),
	build: {
		outDir: path.resolve(__dirname, 'docs')
	},
	rollupOptions: {
		input: 'src/main.js', // Explicitly define the entry point
	},
	plugins: [
		glsl(),
		// createHtmlPlugin({
		// 	pages: [
		// 		{
		// 			entry: 'src/main.js',
		// 			filename: 'src/index.html',
		// 			// template: 'src/index.html',
		// 			// injectOptions: {
		// 			// 	data: {
		// 			// 		title: 'index',
		// 			// 		// injectScript: `<script src="./inject.js"></script>`,
		// 			// 	},
		// 			// }
		// 		},
		// 		{
		// 			entry: 'src/psd-remake/index.html',
		// 			filename: 'src/psd-remake.html',
		// 			template: 'src/psd-remake/index.html',
		// 		}
		// 	]
		// })
	]
});
