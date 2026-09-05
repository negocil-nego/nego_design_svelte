<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLDivElement | null>(null),
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
		children?: Snippet;
	} = $props();
</script>

<div
	bind:this={ref}
	role="group"
	data-slot="dropdown-menu-group"
	{...restProps}
>
	{@render children?.()}
</div>