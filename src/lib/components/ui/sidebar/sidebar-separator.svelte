<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<div
	bind:this={ref}
	data-slot="sidebar-separator"
	data-sidebar="separator"
	role="separator"
	class={cn(
		"bg-sidebar-border mx-2 my-1 h-px transition-all group-data-[collapsible=icon]:mx-0",
		className
	)}
	{...restProps}
></div>