<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { useCollapsibleContext } from "./collapsible.svelte";

	let {
		ref = $bindable(null),
		class: className,
		children,
		child,
		onclick,
		...restProps
	}: HTMLButtonAttributes & {
		children?: Snippet;
		child?: Snippet<[{ props: Record<string, unknown> }]>;
		ref?: HTMLButtonElement | null;
	} = $props();

	const state = useCollapsibleContext();

	function handleClick(event: MouseEvent & { currentTarget: HTMLButtonElement }) {
		onclick?.(event);
		state.toggle();
	}

	const triggerProps = $derived({
		type: "button",
		"data-slot": "collapsible-trigger",
		"data-state": state.open ? "open" : "closed",
		"aria-expanded": state.open,
		disabled: state.disabled || undefined,
		class: className
	});
</script>

{#if child}
	{@render child({ props: { ...triggerProps, onclick: handleClick, ...restProps } })}
{:else}
	<button
		bind:this={ref}
		type="button"
		data-slot="collapsible-trigger"
		data-state={state.open ? "open" : "closed"}
		aria-expanded={state.open}
		disabled={state.disabled}
		class={className}
		onclick={handleClick}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}