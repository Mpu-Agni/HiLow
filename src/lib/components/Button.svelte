<script>
	// let value = $state(false);
	let { value = $bindable() } = $props();
</script>

<button
	onclick={() => (value = !value)}
	class={`relative h-8 w-14 rounded-full transition
		${value ? 'bg-blue-500' : 'bg-gray-300'}`}
	aria-label="Toggle Sound"
>
	<span
		class={`absolute top-1 left-1 h-6 w-6 rounded-full bg-white transition
			${value ? 'translate-x-6' : ''}`}
	></span>
</button>
