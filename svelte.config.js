import {
	mdsvex
} from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// ssr: false,
		paths: {
			// assets: '/assets',
			base: '/'
		}
		// prerender: {
		// 	crawl: true,
		// 	enabled: true,
		// 	force: false,
		// 	pages: [
		// 		"*"
		// 	],
		// }
	}
};

export default config;