<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Button from '$lib/components/Button.svelte';
	import difficulty from '$lib/assets/difficulty.svg';
	import dark from '$lib/assets/dark.svg';
	import sound from '$lib/assets/sound.svg';
	import trash from '$lib/assets/trash.svg';
	import { onMount } from 'svelte';
	import { gameHilow } from '$lib/utils/game.logic';
	import ModalDeleteHistory from '$lib/components/ModalDeleteHistory.svelte';
	import ModalSuccessDeleteHistory from '$lib/components/ModalSuccessDeleteHistory.svelte';
	let selectedDifficulty = $state(localStorage.getItem('difficulty') || 'easy');

	let sound_data = $state(false);
	let dark_mode = $state(false);

	let game = new gameHilow();
	let showDeleteModal = $state(false);
	let showDeleteSuccessModal = $state(false);

	onMount(() => {
		selectedDifficulty = localStorage.getItem('difficulty') ?? 'easy';
	});

	function openDeleteModal() {
		showDeleteModal = true;
	}

	function cancelDelete() {
		showDeleteModal = false;
	}

	function confirmDelete() {
		// game.clearHistory();
		game.deleteAllHistory();
		showDeleteModal = false;
		showDeleteSuccessModal = true;
	}

	function closeSuccessModal() {
		showDeleteSuccessModal = false;
	}

	function saveDifficulty(input: string) {
		selectedDifficulty = input;
		localStorage.setItem('difficulty', selectedDifficulty);
		// window.alert(`Difficulty set to ${selectedDifficulty}`);
		game.gameReset();
	}
</script>

<div class="min-h-100vh mx-auto w-full max-w-3xl pt-16 pb-20">
	<div class="mx-8 mt-6">
		<div>
			<h1 class="text-4xl font-semibold text-gray-800">Game Preferences</h1>
			<p class="mt-2 text-xl">Customize your gaming experience with calm precision.</p>
		</div>

		<div class="mt-6">
			<Card class="bg-white shadow">
				<div
					class="flex gap-4
				"
				>
					<img src={difficulty} alt="" />
					<h2 class="text-2xl font-semibold text-gray-700">Difficulty Level</h2>
				</div>

				<div class="mt-4 flex flex-row gap-6">
					<button
						onclick={() => {
							saveDifficulty('easy');
						}}
						class="flex flex-1"
					>
						<Card
							class="flex flex-1 flex-col items-center justify-center border-4 {selectedDifficulty ===
							'easy'
								? 'border-blue-500 bg-blue-50 text-blue-700'
								: 'border-gray-300 text-gray-500'}"
						>
							<h3 class="text-2xl font-semibold">Easy</h3>
							<p class="mt-2 text-xl font-semibold">0 - 100</p>
						</Card>
					</button>

					<button
						onclick={() => {
							saveDifficulty('medium');
						}}
						class="flex flex-1"
					>
						<Card
							class="flex flex-1 flex-col items-center justify-center border-4 {selectedDifficulty ===
							'medium'
								? 'border-blue-500 bg-blue-50 text-blue-700'
								: 'border-gray-300 text-gray-500'}"
						>
							<h3 class="text-2xl font-semibold">Medium</h3>
							<p class="mt-2 text-xl font-semibold">0 - 10.000</p>
						</Card>
					</button>

					<button
						onclick={() => {
							saveDifficulty('hard');
						}}
						class="flex flex-1"
					>
						<Card
							class="flex flex-1 flex-col items-center justify-center border-4 {selectedDifficulty ===
							'hard'
								? 'border-blue-500 bg-blue-50 text-blue-700'
								: 'border-gray-300 text-gray-500'}"
						>
							<h3 class="text-2xl font-semibold">Hard</h3>
							<p class="mt-2 text-xl font-semibold">0 - 1.000.000</p>
						</Card>
					</button>
				</div>
			</Card>
		</div>

		<div class="mt-6">
			<Card class="bg-white shadow">
				<div class="flex flex-row items-center justify-between gap-4">
					<div class="flex flex-row items-center gap-8">
						<div class="flex h-13 w-13 items-center justify-center rounded-full bg-amber-200">
							<img src={sound} alt="" />
						</div>

						<div>
							<h1 class="text-2xl font-bold">Sound Effects</h1>
							<p class="text-lg">Enable tactile audio feedback</p>
						</div>
					</div>

					<div><Button bind:value={sound_data} /></div>
				</div>

				<div class="mt-6 flex flex-row items-center justify-between gap-4">
					<div class="flex flex-row items-center gap-8">
						<div class="flex h-13 w-13 items-center justify-center rounded-full bg-amber-200">
							<img src={dark} alt="" />
						</div>

						<div>
							<h1 class="text-2xl font-bold">Dark Mode</h1>
							<p class="text-lg">Switch to high-contrast theme</p>
						</div>
					</div>

					<div><Button bind:value={dark_mode} /></div>
				</div>
			</Card>
		</div>

		<div class="mt-16">
			<button onclick={openDeleteModal} class="w-full">
				<Card class="border border-red-300">
					<div class="flex items-center justify-center gap-2">
						<img src={trash} alt="" class="h-8 w-8" />
						<h3 class="text-2xl font-bold text-red-700">RESET GAME HISTORY</h3>
					</div>
				</Card>
			</button>
		</div>
	</div>
</div>

{#if showDeleteModal}
	<ModalDeleteHistory cancelButton={cancelDelete} deleteButton={confirmDelete} />
{/if}

<!-- <ModalDeleteHistory cancelButton={cancelDelete} deleteButton={cancelDelete} /> -->
{#if showDeleteSuccessModal}
	<ModalSuccessDeleteHistory close={closeSuccessModal} />
{/if}
<!-- <ModalSuccessDeleteHistory close={closeSuccessModal} /> -->
