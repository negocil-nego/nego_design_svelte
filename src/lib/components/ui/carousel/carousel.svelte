<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import {
		type CarouselAPI,
		type CarouselProps,
		type EmblaContext,
		setEmblaContext,
	} from "./context.js";

	let {
		ref = $bindable(null),
		opts = {},
		plugins = [],
		setApi = () => {},
		orientation = "horizontal",
		class: className,
		children,
		...restProps
	}: WithElementRef<CarouselProps> = $props();

	let isVertical = $derived(orientation === "vertical");
	let available = $state(false);

	// svelte-ignore state_referenced_locally
	let ctx = $state<EmblaContext>({
		orientation,
		containerEl: undefined,
		canScrollNext: false,
		canScrollPrev: false,
		selectedIndex: 0,
		scrollSnaps: [],
		scrollPrev,
		scrollNext,
		scrollTo,
		onScroll,
		handleKeyDown,
		plugins,
		setContainer,
	});

	setEmblaContext(ctx);

	function setContainer(el: HTMLDivElement | null | undefined) {
		ctx.containerEl = el ?? undefined;
		available = el != null;
		updateScrollSnaps();
		onScroll();
	}

	function getSlides(): HTMLElement[] {
		const container = ctx.containerEl;
		if (!container) return [];
		return Array.from(
			container.querySelectorAll<HTMLElement>("[data-slot='carousel-item']")
		);
	}

	function snapsEqual(a: number[], b: number[]): boolean {
		if (a.length !== b.length) return false;
		for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
		return true;
	}

	function updateScrollSnaps() {
		const container = ctx.containerEl;
		if (!container) {
			if (ctx.scrollSnaps.length > 0) ctx.scrollSnaps = [];
			return;
		}
		const scrollPos = isVertical ? container.scrollTop : container.scrollLeft;
		const origin = isVertical
			? container.getBoundingClientRect().top
			: container.getBoundingClientRect().left;
		const next = getSlides().map((slide) => {
			const slidePos = isVertical
				? slide.getBoundingClientRect().top
				: slide.getBoundingClientRect().left;
			return slidePos - origin + scrollPos;
		});
		if (!snapsEqual(ctx.scrollSnaps, next)) ctx.scrollSnaps = next;
	}

	function onScroll() {
		const container = ctx.containerEl;
		if (!container) return;
		const pos = isVertical ? container.scrollTop : container.scrollLeft;
		const size = isVertical ? container.clientHeight : container.clientWidth;
		const scrollSize = isVertical
			? container.scrollHeight
			: container.scrollWidth;
		const max = Math.max(0, scrollSize - size);
		ctx.canScrollPrev = pos > 1;
		ctx.canScrollNext = pos < max - 1;
		const snaps = ctx.scrollSnaps;
		let closest = 0;
		let minDistance = Infinity;
		for (let i = 0; i < snaps.length; i++) {
			const distance = Math.abs(snaps[i] - pos);
			if (distance < minDistance) {
				minDistance = distance;
				closest = i;
			}
		}
		ctx.selectedIndex = minDistance === Infinity ? 0 : closest;
	}

	function scrollTo(index: number, jump?: boolean) {
		const container = ctx.containerEl;
		const snaps = ctx.scrollSnaps;
		if (!container || snaps.length === 0) return;
		const target = Math.min(Math.max(index, 0), snaps.length - 1);
		const snap = snaps[target];
		container.scrollTo({
			left: isVertical ? 0 : snap,
			top: isVertical ? snap : 0,
			behavior: jump ? "instant" : "smooth",
		});
	}

	function scrollPrev() {
		scrollTo(ctx.selectedIndex - 1);
	}

	function scrollNext() {
		scrollTo(ctx.selectedIndex + 1);
	}

	function buildApi(): CarouselAPI {
		return {
			scrollPrev,
			scrollNext,
			canScrollPrev: ctx.canScrollPrev,
			canScrollNext: ctx.canScrollNext,
			selectedIndex: ctx.selectedIndex,
			scrollTo,
			scrollSnapList: () => ctx.scrollSnaps.slice(),
		};
	}

	$effect(() => {
		setApi(buildApi());
	});

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === "ArrowLeft") {
			e.preventDefault();
			scrollPrev();
		} else if (e.key === "ArrowRight") {
			e.preventDefault();
			scrollNext();
		}
	}

	$effect(() => {
		if (!available) return;
		const container = ctx.containerEl;
		if (!container) return;
		const plugin = plugins[0];
		if (!plugin?.delay) return;

		let stopped = false;
		let timer: number | undefined;
		let lastIndex = ctx.selectedIndex;

		const clearTimer = () => {
			if (timer !== undefined) window.clearTimeout(timer);
		};

		const cleanup = () => {
			stopped = true;
			clearTimer();
		};

		const schedule = () => {
			if (stopped) return;
			timer = window.setTimeout(() => {
				if (stopped) return;
				if (ctx.canScrollNext) {
					scrollNext();
				} else if (plugin.loop) {
					scrollTo(0, true);
				}
				lastIndex = ctx.selectedIndex;
				schedule();
			}, plugin.delay);
		};

		const onPointer = () => {
			if (stopped) return;
			if (plugin.stopOnInteraction) cleanup();
		};

		const onScrollReset = () => {
			if (stopped || plugin.stopOnInteraction) return;
			if (ctx.selectedIndex !== lastIndex) {
				clearTimer();
				lastIndex = ctx.selectedIndex;
				schedule();
			}
		};

		container.addEventListener("pointerdown", onPointer);
		container.addEventListener("touchstart", onPointer);
		container.addEventListener("scroll", onScrollReset, { passive: true });

		schedule();

		return () => {
			cleanup();
			container.removeEventListener("pointerdown", onPointer);
			container.removeEventListener("touchstart", onPointer);
			container.removeEventListener("scroll", onScrollReset);
		};
	});
</script>

<div
	bind:this={ref}
	data-slot="carousel"
	class={cn("relative", className)}
	role="region"
	aria-roledescription="carousel"
	{...restProps}
>
	{@render children?.()}
</div>