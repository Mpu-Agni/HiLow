<script>
	import Card from './Card.svelte';
	import warning from '$lib/assets/warning.svg';
	import exclamation from '$lib/assets/exclamation.svg';
	let { cancelButton, deleteButton } = $props();
	import { fade, scale } from 'svelte/transition';
</script>

<div
	in:fade={{ duration: 300 }}
	out:fade|local={{ duration: 300 }}
	class="fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black/50"
>
	<div in:scale={{ duration: 300 }} out:scale|local={{ duration: 300 }}>
		<Card class="max-w-md bg-white">
			<div class="flex flex-col items-center">
				<div
					class="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-blue-500 bg-blue-300 text-5xl"
				>
					<img src={exclamation} alt="" />
				</div>

				<div class="mt-5 flex flex-col items-center">
					<h2 class="mt-4 text-center text-4xl font-bold">Ingin Menghapus Data History?</h2>

					<p class="mt-2 justify-center text-center text-2xl text-gray-600">
						aksi ini tidak dapat diurungkan, pastikan kamu sudah yakin ingin menghapus data history
						permainanmu
					</p>
				</div>

				<div class="flex w-full gap-2.5">
					<button
						class="mt-6 w-full rounded-xl bg-blue-500 px-6 py-3 text-xl font-semibold text-white hover:bg-blue-600"
						onclick={cancelButton}
					>
						Batal
					</button>
					<button
						class="mt-6 w-full rounded-xl bg-red-500 px-6 py-3 text-xl font-semibold text-white hover:bg-red-600"
						onclick={deleteButton}
					>
						Hapus History
					</button>
				</div>
			</div>
		</Card>
	</div>
</div>
