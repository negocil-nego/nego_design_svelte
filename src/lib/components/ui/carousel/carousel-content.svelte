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

	const emblaCtx = getEmblaContext("<Carousel.Content/>");

	let containerEl = $state<HTMLDivElement | null>(null);

	$effect(() => {
		emblaCtx.setContainer(containerEl);
	});
</script>

<div
	bind:this={ref}
	data-slot="carousel-content"
	class="overflow-hidden"
	{...restProps}
>
	<div
		bind:this={containerEl}
		class={cn(
			emblaCtx.orientation === "horizontal"
				? "flex flex-row overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -ms-4"
				: "flex flex-col overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar -mt-4",
			className
		)}
		onscroll={emblaCtx.onScroll}
		onkeydown={emblaCtx.handleKeyDown}
	>
		{@render children?.()}
	</div>
</div>