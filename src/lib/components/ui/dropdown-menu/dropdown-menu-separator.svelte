<script lang="ts">
	import { cn } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLDivElement | null>(null),
		class: className,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
		class?: string;
	} = $props();
</script>

<div
	bind:this={ref}
	role="separator"
	data-slot="dropdown-menu-separator"
	class={cn("h-px bg-border my-1", className)}
	{...restProps}
/>