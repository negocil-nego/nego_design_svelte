<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { getDropdownMenuContext } from "./dropdown-menu-context.svelte.js";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLButtonElement | null>(null),
		class: className,
		disabled,
		inset,
		variant = "default",
		onSelect,
		onclick,
		children,
		...restProps
	}: HTMLButtonAttributes & {
		ref?: HTMLButtonElement | null;
		class?: string;
		disabled?: boolean;
		inset?: boolean;
		variant?: "default" | "destructive";
		onSelect?: (event: MouseEvent) => void;
		onclick?: (event: MouseEvent) => void;
		children?: Snippet;
	} = $props();

	const store = getDropdownMenuContext();

	let highlighted = $state(false);

	function handleSelect(event: MouseEvent) {
		onclick?.(event);
		onSelect?.(event);
		store.closeMenu();
	}
</script>

<button
	bind:this={ref}
	type="button"
	role="menuitem"
	tabindex="-1"
	data-slot="dropdown-menu-item"
	data-inset={inset}
	data-variant={variant}
	data-highlighted={highlighted || undefined}
	{disabled}
	onclick={handleSelect}
	onfocus={() => (highlighted = true)}
	onblur={() => (highlighted = false)}
	onmouseenter={() => (highlighted = true)}
	onmouseleave={() => (highlighted = false)}
	class={cn(
		"group/dropdown-menu-item relative flex w-full cursor-pointer items-center justify-start gap-2 rounded-lg px-2 py-1.5 text-sm outline-none select-none hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
		className,
	)}
	{...restProps}
>
	{@render children?.()}
</button>