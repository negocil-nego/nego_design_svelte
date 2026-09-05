<script lang="ts">
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { MinusSignIcon, Tick02Icon } from "@hugeicons/core-free-icons";
	import { cn } from "$lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLButtonElement | null>(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		onCheckedChange,
		class: className,
		disabled,
		children,
		...restProps
	}: HTMLButtonAttributes & {
		ref?: HTMLButtonElement | null;
		checked?: boolean;
		indeterminate?: boolean;
		onCheckedChange?: (checked: boolean) => void;
		class?: string;
		disabled?: boolean;
		children?: Snippet;
	} = $props();

	let isChecked = $derived(indeterminate || checked);

	let highlighted = $state(false);

	function handleClick() {
		checked = !checked;
		indeterminate = false;
		onCheckedChange?.(checked);
	}
</script>

<button
	bind:this={ref}
	type="button"
	role="menuitemcheckbox"
	tabindex="-1"
	data-slot="dropdown-menu-checkbox-item"
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
		data-slot="dropdown-menu-checkbox-item-indicator"
	>
		{#if indeterminate}
			<HugeiconsIcon icon={MinusSignIcon} strokeWidth={2} class="size-4" />
		{:else if checked}
			<HugeiconsIcon icon={Tick02Icon} strokeWidth={2} class="size-4" />
		{/if}
	</span>
	{@render children?.()}
</button>