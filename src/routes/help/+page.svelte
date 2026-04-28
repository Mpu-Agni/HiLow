<script>
	import Card from '$lib/components/Card.svelte';
	import lamp from '$lib/assets/lamp.svg';
	import star from '$lib/assets/star.svg';
	import seru from '$lib/assets/seru.svg';
</script>

<div class="min-h-100vh mx-auto mt-8 w-full max-w-3xl pt-16 pb-20">
	<Card class="bg-white shadow">
		<div class="mb-4 flex flex-row items-center gap-4">
			<img src={lamp} alt="" />
			<h1 class="text-3xl font-bold">How to Play</h1>
		</div>
		<div class="flex flex-col items-start gap-4">
			<div class="flex gap-4">
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DBE1FF] font-bold text-blue-950"
				>
					1
				</div>
				<div class="text-xl text-gray-500">
					<p>Choose a number between 1-100 from the interface.</p>
				</div>
			</div>

			<div class="flex gap-4">
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DBE1FF] font-bold text-blue-950"
				>
					2
				</div>
				<div class="text-xl text-gray-500">
					<p>
						Read the clues provided after each guess. They will tell you if the target is higher or
						lower.
					</p>
				</div>
			</div>

			<div class="flex gap-4">
				<div
					class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#DBE1FF] font-bold text-blue-950"
				>
					3
				</div>
				<div class="text-xl text-gray-500">
					<p>Find the match in the fewest attempts possible to maximize your score.</p>
				</div>
			</div>
		</div>
	</Card>
	<Card class="mt-8 bg-white shadow">
		<div class="mb-4 flex flex-row items-center gap-4 text-white">
			<img src={star} alt="" />
			<h1 class="text-3xl font-bold text-black">Scoring Rules</h1>
		</div>

		<div class="flex flex-col gap-4 md:flex-row">
			<Card class="flex-1 bg-[#EDEDF9]">
				<div class="gap-3">
					<p class="text-xl font-semibold text-gray-600">PERFECT</p>
					<p class="my-1 text-4xl font-bold text-amber-900">1,000</p>
					<p class="text-xl font-light text-gray-600">1st attempt win</p>
				</div>
			</Card>
			<Card class="flex-1 bg-[#EDEDF9]">
				<div class="gap-3">
					<p class="text-xl font-semibold text-gray-600">PENALTY</p>
					<p class="my-1 text-4xl font-bold text-red-500">-100</p>
					<p class="text-xl font-light text-gray-600">Per missed guest</p>
				</div>
			</Card>
		</div>

		<div>
			<Card class="mt-8 bg-[#2563EB]">
				<div class="flex items-start gap-4">
					<!-- Icon -->
					<div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
						<img src={seru} alt="" class="h-8 w-8" />
					</div>

					<!-- Content -->
					<div>
						<h1 class="text-4xl font-semibold text-white">Scoring Rules</h1>
						<p class="mt-1 text-sm text-white/80">
							Your final score is calculated as [Base Points] minus [Attempts × 100]. Precision pays
							off.
						</p>
					</div>
				</div>
			</Card>
		</div>
	</Card>
</div>
