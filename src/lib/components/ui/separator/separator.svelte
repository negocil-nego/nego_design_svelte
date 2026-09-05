<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		orientation = "horizontal",
		decorative = false,
		class: className,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		orientation?: "horizontal" | "vertical";
		decorative?: boolean;
	} = $props();
</script>

<div
	bind:this={ref}
	data-slot="separator"
	data-orientation={orientation}
	role={decorative ? undefined : "separator"}
	aria-orientation={decorative ? undefined : orientation}
	class={cn(
		"shrink-0 bg-border",
		orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
		className
	)}
	{...restProps}
></div>