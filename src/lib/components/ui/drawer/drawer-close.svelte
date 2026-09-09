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
		drawer.setOpen(false);
	}

	const closeProps = $derived({
		...restProps,
		class: className,
		"data-slot": "drawer-close",
		"data-state": drawer.open ? "open" : "closed",
		type: "button" as const,
		onclick: handleClick,
	});
</script>

{#if child}
	{@render child({ props: closeProps })}
{:else}
	<button bind:this={ref} {...closeProps}>
		{@render children?.()}
	</button>
{/if}