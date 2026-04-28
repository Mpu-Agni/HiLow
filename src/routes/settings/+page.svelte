<script>
	import Card from '$lib/components/Card.svelte';
</script>

<div class="min-h-100vh mx-auto w-full max-w-3xl pt-16 pb-20">
	<div class="mx-8 mt-6">
		<div>
			<h1 class="text-4xl font-semibold text-gray-800">Game Preferences</h1>
			<p class="mt-2 text-xl">Customize your gaming experience with calm precision.</p>
		</div>

		<div class="mt-6">
			<Card class="bg-white shadow">
				<h2 class="text-2xl font-semibold text-gray-700">Difficulty Level</h2>
				<p class="mt-1 text-gray-500">Choose your challenge: Easy, Medium, or Hard.</p>
				<div class="flex flex-row gap-2">
					<button
						onclick={() => {
							console.log('pantek kau');
						}}
						class="flex flex-1"
					>
						<Card class="flex flex-1 flex-col items-center justify-center border-2">
							<h3>Easy</h3>
							<p>0-100</p>
						</Card>
					</button>

					<Card class="flex flex-1 flex-col items-center justify-center border-2">
						<h3>Easy</h3>
						<p>0-100</p>
					</Card>

					<Card class="flex flex-1 flex-col items-center justify-center border-2">
						<h3>Easy</h3>
						<p>0-100</p>
					</Card>
				</div>
			</Card>
		</div>
	</div>
</div>
