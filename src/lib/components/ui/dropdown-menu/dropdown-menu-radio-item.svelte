<script lang="ts">
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { Tick02Icon } from "@hugeicons/core-free-icons";
	import { cn } from "$lib/utils.js";
	import { getDropdownMenuRadioGroupContext } from "./dropdown-menu-context.svelte.js";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLButtonElement | null>(null),
		id,
		value,
		class: className,
		disabled,
		onclick,
		children,
		...restProps
	}: HTMLButtonAttributes & {
		ref?: HTMLButtonElement | null;
		id?: string;
		value: string;
		class?: string;
		disabled?: boolean;
		onclick?: (event: MouseEvent) => void;
		children?: Snippet;
	} = $props();

	const group = getDropdownMenuRadioGroupContext();

	let isChecked = $derived(group.state.value === value);

	let highlighted = $state(false);

	function handleClick(event: MouseEvent) {
		onclick?.(event);
		group.setValue(value);
	}
</script>

<button
	bind:this={ref}
	type="button"
	role="menuitemradio"
	tabindex="-1"
	{id}
	data-slot="dropdown-menu-radio-item"
	data-state={isChecked ? "checked" : "unchecked"}
	data-highlighted={highlighted || undefined}
	aria-checked={isChecked}
	{disabled}
	onclick={handleClick}
	onfocus={() => (highlighted = true)}
	onblur={() => (highlighted = false)}
	onmouseenter={() => (highlighted = true)}
	onmouseleave={() => (highlighted = false)}
	class={cn(
		"relative flex w-full cursor-pointer items-center justify-start gap-2.5 rounded-lg px-2 py-1.5 pr-8 text-sm outline-none select-none hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
		className,
	)}
	{...restProps}
>
	<span
		class="absolute right-2 flex size-4 items-center justify-center pointer-events-none"
		data-slot="dropdown-menu-radio-item-indicator"
	>
		{#if isChecked}
			<HugeiconsIcon icon={Tick02Icon} strokeWidth={2} class="size-4" />
		{/if}
	</span>
	{@render children?.()}
</button>