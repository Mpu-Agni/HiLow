<script lang="ts">
	import { gameHilow } from '$lib/utils/game.logic';
	import { onMount } from 'svelte';

	let game = new gameHilow();

	let input = $state('');
	let input_ref: HTMLInputElement | undefined = $state();

	function submit() {
		let result = game.makeGuess(parseInt(input));
		window.alert(result.message);
		console.log(result);
		input = '';
	}
	function handleGlobalEnter(event: KeyboardEvent) {
		if (event.key === 'Enter') {
			event.preventDefault();
			// input_ref?.blur(); // Remove focus from the input field
			// input_ref?.focus();
			// window.alert('Enter key pressed!');
			if (input.trim() !== '') {
				submit();
			} else {
				input_ref?.focus();
			}
		}
	}

	onMount(() => {
		game.gameInit();
	});
</script>

<svelte:window on:keydown={handleGlobalEnter} />

<div class="flex min-h-screen flex-col items-center justify-center">
	<div class="flex flex-col items-center gap-6">
		<h1 class="text-5xl font-bold text-black">Tebak Angka</h1>
		<p class="text-lg text-gray-700">Masukkan Angka 1-100</p>
	</div>

	<div class="mx-4 mt-12 flex w-full flex-col items-center gap-6">
		<div class="relative flex w-full max-w-md flex-col">
			<input
				class="focus:border-primary h-16 border-0 border-b-2 bg-transparent text-center text-2xl ring-0 transition-all duration-300 ease-in-out outline-none placeholder:font-semibold placeholder:text-gray-500"
				type="number"
				alt="Submit"
				placeholder="Angka..."
				bind:value={input}
				bind:this={input_ref}
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
			onclick={submit}
		>
			Cek Angka
		</button>
	</div>
</div>
