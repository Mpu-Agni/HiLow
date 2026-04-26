<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import question_mark from '$lib/assets/questions-mark.svg';
	import settings from '$lib/assets/settings.svg';
</script>

<header class="fixed top-0 left-0 w-full bg-white shadow">
	<div class=" mx-auto flex min-h-16 w-full max-w-3xl flex-row items-center justify-between gap-4">
		<div class="mx-6 text-2xl font-bold text-blue-600">
			<h1>HiLow!</h1>
		</div>
		<div class="mx-6 flex flex-row gap-2.5">
			<a href="#" class="hover:opacity-80">
				<img src={question_mark} alt="" />
			</a>
			<a href="" class="hover:opacity-80">
				<img src={settings} alt="" />
			</a>
		</div>
	</div>
</header>

<!-- <header class="fixed top-0 left-0 z-50 w-full bg-white shadow">
	<div class="mx-auto flex min-h-16 w-full max-w-3xl items-center justify-between px-4">
		<h1 class="text-2xl font-bold text-blue-600">HiLow!</h1>

		<div class="flex items-center gap-3">
			<button class="rounded bg-blue-500 px-3 py-1 text-white"> asep </button>
			<p>dfasd</p>
		</div>
	</div>
</header> -->
