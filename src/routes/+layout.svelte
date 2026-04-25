<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="flex min-h-screen flex-col bg-radial from-gray-100 via-white to-cyan-50 text-slate-800">
	<div class="mx-auto flex min-h-screen w-full max-w-3xl flex-col px-4">
		{@render children()}
	</div>
</div>
