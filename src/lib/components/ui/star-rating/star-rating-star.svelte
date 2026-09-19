<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
	import { cn } from "$lib/utils.js";
	import type { StarRatingStarProps } from "./types";
	import { useStarRatingContext } from "./star-rating.svelte";
		
	let { index, class: className, state: _state }: StarRatingStarProps = $props();

	const rating = useStarRatingContext();

	const fraction = $derived.by(() => Math.min(Math.max(rating.value - index, 0), 1));
	const isActive = $derived(fraction >= 1);
	const isPartial = $derived(fraction > 0 && fraction < 1);
	const isCurrentHovered = $derived(rating.hovered === index);
	const filled = $derived(isActive || isPartial || isCurrentHovered);

	const displayState = $derived(isPartial ? "partial" : isActive ? "active" : "inactive");
	const iconClass = $derived(
		filled ? "text-amber-500 fill-current" : "text-muted-foreground fill-transparent"
	);

	function handleClick() {
		if (rating.disabled || rating.readOnly) return;
		rating.selectValue(index + 1);
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			handleClick();
		}
	}
</script>

<span
	role="radio"
	aria-checked={isActive ? "true" : isPartial ? "mixed" : "false"}
	data-star-rating
	data-state={displayState}
	data-disabled={rating.disabled ? "true" : undefined}
	tabindex={rating.disabled ? -1 : 0}
	class={cn(
		"ring-ring text-primary ring-offset-background group/item size-5 rounded-md ring-offset-2 outline-hidden group-aria-disabled:opacity-50 focus-visible:ring-2",
		className
	)}
	onclick={handleClick}
	onkeydown={handleKeydown}
	onmouseenter={() => rating.setHovered(index)}
	onmouseleave={() => rating.setHovered(null)}
>
	<div class="relative size-full">
		{#if isPartial}
			<ImageHugeicons icon="star-half" class={cn("absolute top-0 left-0 size-full transition-all", iconClass)} />
		{:else}
			<ImageHugeicons icon="star" class={cn("size-full transition-all", iconClass)} />
		{/if}
	</div>
</span>