<script lang="ts" module>
	import { getContext, setContext } from "svelte";

	export type StarRatingContext = {
		get value(): number;
		get count(): number;
		get disabled(): boolean;
		get readOnly(): boolean;
		get hovered(): number | null;
		setHovered: (index: number | null) => void;
		selectValue: (value: number) => void;
	};

	const STAR_RATING_CONTEXT_KEY = "scn-star-rating";

	export function setStarRatingContext(ctx: StarRatingContext): StarRatingContext {
		return setContext(STAR_RATING_CONTEXT_KEY, ctx);
	}

	export function useStarRatingContext(): StarRatingContext {
		return getContext<StarRatingContext>(STAR_RATING_CONTEXT_KEY);
	}
</script>

<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";
	import type { StarRatingItem } from "./types";

	let {
		ref = $bindable(null),
		value = $bindable(0),
		onValueChange,
		count = 5,
		max = count,
		orientation = "horizontal",
		readOnly = false,
		disabled = false,
		class: className,
		children,
		onkeydown,
		onmouseleave,
		...restProps
	}: {
		ref?: HTMLDivElement | null;
		value?: number;
		onValueChange?: (value: number) => void;
		count?: number;
		max?: number;
		orientation?: "horizontal" | "vertical";
		readOnly?: boolean;
		disabled?: boolean;
		class?: string;
		children?: Snippet<[{ items: StarRatingItem[] }]>;
		onkeydown?: (e: KeyboardEvent) => void;
		onmouseleave?: (e: MouseEvent) => void;
		[key: string]: unknown;
	} = $props();

	const total = $derived.by(() => {
		const n = typeof max === "number" && Number.isFinite(max) && max > 0 ? max : count;
		return Math.floor(n);
	});

	let hovered = $state<number | null>(null);

	function setHovered(index: number | null) {
		if (disabled) return;
		hovered = index;
	}

	function selectValue(next: number) {
		if (disabled || readOnly) return;
		value = Math.min(Math.max(next, 0), total);
		onValueChange?.(value);
	}

	function starState(index: number): StarRatingItem["state"] {
		const fraction = value - index;
		if (fraction >= 1) return "active";
		if (fraction > 0) return "partial";
		return "inactive";
	}

	const items = $derived.by(() =>
		Array.from({ length: total }, (_, index) => ({ index, state: starState(index) }))
	);

	function handleKeydown(e: KeyboardEvent) {
		onkeydown?.(e);
		if (disabled || readOnly) return;
		if (e.key === "ArrowRight" || e.key === "ArrowUp") {
			e.preventDefault();
			selectValue(Math.round(value) + 1);
		} else if (e.key === "ArrowLeft" || e.key === "ArrowDown") {
			e.preventDefault();
			selectValue(Math.round(value) - 1);
		} else if (e.key === "Home") {
			e.preventDefault();
			selectValue(1);
		} else if (e.key === "End") {
			e.preventDefault();
			selectValue(total);
		} else if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			if (hovered !== null) selectValue(hovered + 1);
		}
	}

	function handleMouseLeave(e: MouseEvent) {
		hovered = null;
		onmouseleave?.(e);
	}

	setStarRatingContext({
		get value() {
			return value;
		},
		get count() {
			return total;
		},
		get disabled() {
			return disabled;
		},
		get readOnly() {
			return readOnly;
		},
		get hovered() {
			return hovered;
		},
		setHovered,
		selectValue
	});
</script>

<div
	bind:this={ref}
	data-slot="star-rating"
	data-star-rating
	data-orientation={orientation}
	role="radiogroup"
	aria-disabled={disabled ? "true" : undefined}
	data-disabled={disabled ? "true" : undefined}
	class={cn("group flex w-fit place-items-center gap-1 rounded-md outline-hidden", className)}
	onkeydown={handleKeydown}
	onmouseleave={handleMouseLeave}
	{...restProps}
>
	{@render children?.({ items })}
</div>