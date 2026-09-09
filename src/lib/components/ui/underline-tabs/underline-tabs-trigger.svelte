<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";
	import { useUnderlineTabsTrigger } from "./underline-tabs.svelte.js";

	let {
		ref = $bindable(null),
		value,
		class: className,
		onclick,
		onmouseenter,
		onmouseleave,
		onfocus,
		onblur,
		children,
		...restProps
	}: {
		ref?: HTMLButtonElement | null;
		value: string;
		class?: string;
		onclick?: (e: MouseEvent) => void;
		onmouseenter?: (e: MouseEvent) => void;
		onmouseleave?: (e: MouseEvent) => void;
		onfocus?: (e: FocusEvent) => void;
		onblur?: (e: FocusEvent) => void;
		children?: Snippet;
		[key: string]: unknown;
	} = $props();

	const state = useUnderlineTabsTrigger();

	const isActive = $derived(state.value === value);
	const isHovered = $derived(state.hovered === value);

	function handleClick(e: MouseEvent) {
		onclick?.(e);
		state.select(value);
	}

	function handleMouseEnter(e: MouseEvent) {
		onmouseenter?.(e);
		state.setHovered(value);
	}

	function handleMouseLeave(e: MouseEvent) {
		onmouseleave?.(e);
		state.setHovered(null);
	}

	function handleFocus(e: FocusEvent) {
		onfocus?.(e);
		state.setHovered(value);
	}

	function handleBlur(e: FocusEvent) {
		onblur?.(e);
		state.setHovered(null);
	}
</script>

<div class="relative h-full">
	<button
		bind:this={ref}
		type="button"
		role="tab"
		data-slot="underline-tabs-trigger"
		data-state={isActive ? "active" : "inactive"}
		aria-selected={isActive}
		tabindex={isActive ? 0 : -1}
		class={cn(
			"dark:data-[state=active]:text-foreground data-[state=active]:text-foreground text-muted-foreground relative z-2 inline-flex h-[calc(100%-3px)] flex-1 items-center justify-center gap-1.5 px-3 py-1 text-sm font-medium whitespace-nowrap transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
			className
		)}
		onclick={handleClick}
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
		onfocus={handleFocus}
		onblur={handleBlur}
		{...restProps}
	>
		{@render children?.()}
	</button>
	{#if isHovered}
		<div
			class="bg-accent absolute top-0 z-1 h-[calc(100%-3px)] w-full rounded-md opacity-100 transition-opacity duration-300"
			aria-hidden="true"
		></div>
	{/if}
	{#if isActive}
		<div class="bg-primary absolute -bottom-px z-1 h-0.5 w-full" aria-hidden="true"></div>
	{/if}
</div>