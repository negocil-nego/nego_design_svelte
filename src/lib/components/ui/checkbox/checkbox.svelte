<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";
			
	type CheckboxState = boolean | "indeterminate";

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		onCheckedChange,
		disabled = false,
		id,
		value,
		name,
		class: className,
		children,
		onclick,
		...restProps
	}: HTMLButtonAttributes & {
		checked?: CheckboxState;
		indeterminate?: boolean;
		onCheckedChange?: (checked: boolean) => void;
		id?: string;
		value?: string;
		name?: string;
		children?: Snippet<[{ checked: boolean; indeterminate: boolean }]>;
		ref?: HTMLButtonElement | null;
	} = $props();

	const state = $derived(
		checked === "indeterminate" || indeterminate ? "indeterminate" : checked ? "checked" : "unchecked"
	);
	const isChecked = $derived(checked !== false && checked !== "indeterminate");
	const isIndeterminate = $derived(state === "indeterminate");

	function handleClick(event: MouseEvent & { currentTarget: HTMLButtonElement }) {
		if (disabled) return;
		onclick?.(event);
		const next = isIndeterminate ? true : !isChecked;
		indeterminate = false;
		checked = next;
		onCheckedChange?.(next);
	}
</script>

<button
	bind:this={ref}
	type="button"
	role="checkbox"
	aria-checked={isIndeterminate ? "mixed" : isChecked}
	data-slot="checkbox"
	data-state={state}
	disabled={disabled}
	{id}
	{name}
	{value}
	class={cn(
		"border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4 items-center justify-center rounded-[6px] border transition-shadow group-has-disabled/field:opacity-50 focus-visible:ring-[3px] aria-invalid:ring-[3px] peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
		className
	)}
	onclick={handleClick}
	{...restProps}
>
	{#if children}
		{@render children({ checked: isChecked, indeterminate: isIndeterminate })}
	{:else}
		<div
			data-slot="checkbox-indicator"
			class="[&>svg]:size-3.5 grid place-content-center text-current transition-none"
		>
			{#if isChecked}
				<ImageHugeicons icon="tick-02" />
			{:else if isIndeterminate}
				<ImageHugeicons icon="minus-sign" />
			{/if}
		</div>
	{/if}
</button>

{#if name}
	<input
		type="checkbox"
		class="sr-only pointer-events-none"
		tabindex="-1"
		aria-hidden="true"
		{name}
		{value}
		checked={isChecked}
		disabled={disabled}
		onchange={() => {}}
	/>
{/if}