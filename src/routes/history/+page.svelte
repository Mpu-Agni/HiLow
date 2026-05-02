<script lang="ts">
	import { onMount } from 'svelte';
	import CardHistory from '$lib/components/CardHistory.svelte';
	import { gameHilow } from '$lib/utils/game.logic';

	type historyType = {
		date: string;
		difficulty: string;
		attempts: number;
		rank: string;
	};

	let gameHistory: historyType[] = $state([]); // Initialize as an empty array

	onMount(() => {
		const g = new gameHilow();
		gameHistory = g.getHistory();
	});
</script>

<div class="min-h-100vh mx-auto mt-8 w-full max-w-3xl pt-16 pb-20">
	<div class="flex flex-col gap-2">
		<h1 class="text-4xl font-bold">History</h1>
		<p class="text-2xl text-gray-700">Your recent game performance</p>
	</div>

	<div>
		{#if gameHistory.length === 0}
			<p class="mt-6 text-gray-600">No history yet.</p>
		{:else}
			<div class="mt-6 flex flex-col gap-4">
				{#each gameHistory as item}
					<CardHistory
						date={item.date}
						difficulty={item.difficulty}
						attempt={item.attempts}
						rank={item.rank}
					/>
				{/each}
			</div>
		{/if}
	</div>
</div>
