<script>
	// @ts-nocheck

	import { resolve } from '$app/paths';
	import { page } from '$app/stores';
	import game from '$lib/assets/game-controller.svg';
	import history from '$lib/assets/history-v2.svg';
	import settings from '$lib/assets/settings-v2.svg';

	const nav = [
		{ href: '/', img: game, label: 'Game' },
		{ href: '/history', img: history, label: 'History' },
		{ href: '/settings', img: settings, label: 'Settings' }
	];
</script>

<footer class="fixed bottom-0 left-0 w-full bg-white shadow-2xl">
	<div class="mx-auto grid max-w-3xl grid-cols-3">
		{#each nav as item}
			<a
				href={resolve(item.href)}
				aria-current={$page.url.pathname === item.href ? 'page' : undefined}
				class="flex flex-col items-center justify-center py-2"
			>
				<img
					src={item.img}
					alt={item.label}
					class="h-6 w-6 object-contain transition-all duration-200"
					class:opacity-100={$page.url.pathname === item.href}
					class:opacity-60={$page.url.pathname !== item.href}
				/>

				<span
					class="text-xs font-medium transition-all duration-200"
					class:text-sky-500={$page.url.pathname === item.href}
					class:text-gray-400={$page.url.pathname !== item.href}
				>
					{item.label}
				</span>
			</a>
		{/each}
	</div>
</footer>

<style>
	.active {
		color: #0ea5e9;
		font-weight: 600;
	}
	img.opacity-60 {
		opacity: 0.6;
	}
	img.opacity-100 {
		opacity: 1;
	}
</style>
