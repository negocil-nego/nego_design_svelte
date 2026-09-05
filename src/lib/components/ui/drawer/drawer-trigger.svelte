<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";
	import { useDrawerContext } from "./drawer.svelte";

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

	const drawer = useDrawerContext();

	function handleClick(event: MouseEvent & { currentTarget: HTMLButtonElement }) {
		onclick?.(event);
		drawer.setOpen(true);
	}

	const triggerProps = $derived({
		...restProps,
		class: className,
		"data-slot": "drawer-trigger",
		"data-state": drawer.open ? "open" : "closed",
		"aria-expanded": drawer.open,
		type: "button" as const,
		onclick: handleClick,
	});
</script>

{#if child}
	{@render child({ props: triggerProps })}
{:else}
	<button bind:this={ref} {...triggerProps}>
		{@render children?.()}
	</button>
{/if}