<script lang="ts">
	import { gameHilow } from '$lib/utils/game.logic';
	import { onMount } from 'svelte';

	let game = new gameHilow();

	onMount(() => {
		game.gameInit();
	});
</script>

<div class="flex min-h-screen flex-col items-center justify-center">
	<div class="flex flex-col items-center gap-6">
		<h1 class="text-5xl font-bold text-black">Tebak Angka</h1>
		<p class="text-lg text-gray-700">Masukkan Angka 1-100</p>
	</div>

	<div class="mx-4 mt-12 flex w-full flex-col items-center gap-6">
		<!-- INPUT WRAPPER -->
		<!-- <div class="relative flex w-full max-w-md flex-col">
			<input
				class="h-input-height border-outline-variant focus:border-primary font-input-text text-input-text placeholder:text-outline-variant w-full border-x-0 border-t-0 border-b-2 bg-transparent text-center transition-all duration-300 outline-none focus:ring-0"
				placeholder="Angka..."
				type="number"
			/>
		</div> -->
		<div class="relative flex w-full max-w-md flex-col">
			<input
				class="focus:border-primary h-16 border-0 border-b-2 bg-transparent text-center text-2xl ring-0 transition-all duration-300 ease-in-out outline-none placeholder:font-semibold placeholder:text-gray-500"
				type="text"
				alt="Submit"
				placeholder="Angka..."
			/>
		</div>

		<!-- <span
			class="border-b-2 border-transparent transition-colors duration-300 hover:border-blue-500"
		>
			Animated Underline
		</span> -->

		<!-- BUTTON -->
		<button
			class="w-full max-w-md rounded-xl bg-blue-600 py-3 text-3xl font-semibold text-white shadow-md transition-all duration-200 hover:shadow-lg active:scale-95"
		>
			Cek Angka
		</button>
	</div>
</div>
