<script lang="ts">
	import Card from './Card.svelte';
	let { date = '01 May 2026', difficulty = 'Hard', attempt = 5, rank = 'D' } = $props();

	type DifficultyColorsType = {
		[key: string]: string;
	};

	let difficultyColors: DifficultyColorsType = {
		easy: 'bg-green-200 text-green-800',
		medium: 'bg-yellow-200 text-yellow-800',
		hard: 'bg-red-200 text-red-800'
	};

	let rankColors: Record<string, string> = {
		S: 'text-yellow-800',
		A: 'text-blue-800',
		B: 'text-green-800',
		C: 'text-orange-800',
		D: 'text-red-800'
	};

	const rankStyles: Record<string, string> = {
		S: 'border-yellow-300 bg-yellow-100 text-yellow-800',
		A: 'border-blue-300 bg-blue-100 text-blue-800',
		B: 'border-green-300 bg-green-100 text-green-800',
		C: 'border-orange-300 bg-orange-100 text-orange-800',
		D: 'border-red-300 bg-red-100 text-red-800'
	};
</script>

<Card class="mt-6 w-full bg-white p-6 shadow">
	<div class="flex flex-row items-center justify-between gap-4">
		<div class="flex flex-col gap-2">
			<h1 class="text-base font-medium">{date}</h1>
			<div class="flex items-center gap-2">
				<span
					class="rounded-full px-3 py-0.5 text-xs font-medium {difficultyColors[difficulty] ||
						'bg-gray-200 text-gray-800'}"
				>
					{difficulty}
				</span>
				<span class="text-muted-foreground text-sm">Attempt: {attempt}</span>
			</div>
		</div>

		<div class="flex flex-col items-center gap-1">
			<p class="text-muted-foreground text-[11px] tracking-widest uppercase">Rank</p>
			<div
				class="bg- flex h-13 w-13 items-center justify-center rounded-full border {rankStyles[
					rank
				] || 'border-gray-300 bg-gray-100 text-gray-800'}"
			>
				<span class="text-2xl font-medium {rankColors[rank]}">{rank}</span>
			</div>
		</div>
	</div>
</Card>
