<script>
	let { children, class: className = '', ...restProps } = $props();
</script>

<div class={`rounded-2xl p-8 ${className}`} {...restProps}>
	{@render children()}
</div>
