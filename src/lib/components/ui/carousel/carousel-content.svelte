<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import { getEmblaContext } from "./context.js";
	import type { Action } from "svelte/action";
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

	const carouselKeyboard = ((node: HTMLElement) => {
		const handler = (event: KeyboardEvent) => emblaCtx.handleKeyDown(event);
		node.addEventListener("keydown", handler);
		return {
			destroy() {
				node.removeEventListener("keydown", handler);
			},
		};
	}) satisfies Action;
</script>

<div
	bind:this={ref}
	data-slot="carousel-content"
	class="overflow-hidden"
	{...restProps}
>
	<!-- svelte-ignore a11y_no_noninteractive_tabindex -->
	<div
		bind:this={containerEl}
		use:carouselKeyboard
		role="region"
		aria-roledescription="carousel"
		aria-label="Carousel"
		tabindex="0"
		class={cn(
			emblaCtx.orientation === "horizontal"
				? "flex flex-row overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar -ms-4"
				: "flex flex-col overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar -mt-4",
			className
		)}
		onscroll={emblaCtx.onScroll}
	>
		{@render children?.()}
	</div>
</div>