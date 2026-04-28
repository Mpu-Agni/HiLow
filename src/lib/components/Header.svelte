<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
	import question_mark from '$lib/assets/questions-mark.svg';
	import settings_svg from '$lib/assets/settings.svg';
</script>

<header class="fixed top-0 left-0 w-full bg-white shadow">
	<div class=" mx-auto flex min-h-16 w-full max-w-3xl flex-row items-center justify-between gap-4">
		<div class="mx-6 text-2xl font-bold text-blue-600">
			<a href={resolve('/')}>HiLow!</a>
		</div>
		<div class="mx-6 flex flex-row gap-2.5">
			<a href={resolve('/help')} class="hover:opacity-80">
				<img src={question_mark} alt="" />
			</a>
			<a href={resolve('/settings')} class="hover:opacity-80">
				<img src={settings_svg} alt="" />
			</a>
		</div>
	</div>
</header>
