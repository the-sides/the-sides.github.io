<script context="module">
	const allPosts = import.meta.globEager(`../news/**/*.md`);
	let body = [];
	for (let path in allPosts) {
		const post = allPosts[path];
		const metadata = post.metadata;
		const namePage = path.split('/');
		const slugPage = namePage[namePage.length - 2].slice(11);
		const p = {
			path,
			metadata,
			slugPage
		};
		body.push(p);
	}

	export const load = async () => {
		return { props: { posts: body } };
	};
</script>

<script lang="ts">
	import { base } from '$app/paths';
	export let posts: ArrayLike<{ slugPage: any; metadata: { title: any; slug: any } }>;

	function linkSlug(s: string | undefined, p: string): string {
		let result = '';
		if (!s) {
			result = p;
		} else {
			result = s;
		}
		return result;
	}
</script>

<h1>Jacob Sides</h1>
<h2>Full-stack Developer</h2>
<article>
		<p>I'm a passionate JavaScript developer, diving deep into front-end and headless technologies, hoping to build interactive 3D sites in the future. If I'm not trying out a new JS framework, you'll find me gaming, jamming to music or attempting to pick up a new skill, whether it's the Bass or German.</p>

<h3 class="mb-0 -ml-0.5">My Work</h3>
<p class="text-sm mt-1 pt-0">I've been fortunate enough to work with fantastic designers at Pyxl to build out their visions.</p>
<p>
	<a href="https://brownlee.co" target="_blank" rel="nofollow"> Brownlee </a>
	 - A Next.js Shopify Plus Headless Ecommerce
</p>
<p>

	<a href="https://trimech.com" target="_blank" rel="nofollow"> Trimech </a>
 - WordPress Woocommerce site with Vue.js search and archive functionalities
</p>
<p>

	<a href="https://mlilyusa.com" target="_blank" rel="nofollow"> MLILY </a>
 - WordPress Woocommerce site built with TailwindCSS, Twig and Vue.js archives
</p>
<p>

	<a href="https://talkiatry.com" target="_blank" rel="nofollow"> Talkiatry </a>
 - WordPress site built with TailwindCSS, Twig and Vue.js archives
</p>
	<h3> Side Projects </h3>
All my repos are primarily side projects that focus more concepts, teaching and learning tech-stacks rather than front-end development. Nonetheless, see how obsessed I am with the Spotify API.
</article>


<style>
	div {
		@apply mb-1;
	}
</style>
