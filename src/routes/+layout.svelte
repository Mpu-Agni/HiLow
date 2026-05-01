<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
	export const ssr = false;
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<Header />
<div class="flex min-h-screen flex-col bg-cyan-50 text-slate-800">
	<div class="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4">
		{@render children()}
	</div>
</div>
<Footer />
