<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import { getEmblaContext } from "./context.js";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

	const emblaCtx = getEmblaContext("<Carousel.Item/>");
</script>

<div
	bind:this={ref}
	data-slot="carousel-item"
	role="group"
	aria-roledescription="slide"
	class={cn(
		"shrink-0 grow-0",
		emblaCtx.orientation === "horizontal" ? "ps-4" : "pt-4",
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</div>
