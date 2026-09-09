<script lang="ts">
	import { getPopoverContext } from "./popover-context.svelte.js";
	import { cn } from "$lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	let {
		// eslint-disable-next-line no-useless-assignment
		ref = $bindable<HTMLButtonElement | null>(null),
		class: className,
		children,
		child,
		onclick,
		...restProps
	}: HTMLButtonAttributes & {
		ref?: HTMLButtonElement | null;
		class?: string;
		children?: Snippet;
		child?: Snippet<[{ props: Record<string, unknown> }]>;
		onclick?: (event: MouseEvent) => void;
	} = $props();

	const store = getPopoverContext();

	let anchorEl = $state<HTMLButtonElement | null>(null);

	function handleClick(event: MouseEvent) {
		store.clickEvent = event;
		store.toggle();
		onclick?.(event);
	}

	$effect(() => {
		const el = (anchorEl ?? document.getElementById(store.anchorId)) as HTMLButtonElement | null;
		if (el) {
			store.setAnchor(el);
			ref = el;
			anchorEl = el;
		}
	});
</script>

{#if child}
	{@render child({
		props: {
			id: store.anchorId,
			type: "button",
			"aria-haspopup": "dialog",
			"aria-expanded": store.open,
			"data-state": store.open ? "open" : "closed",
			onclick: handleClick,
		},
	})}
{:else}
	<button
		bind:this={anchorEl}
		type="button"
		id={store.anchorId}
		aria-haspopup="dialog"
		aria-expanded={store.open}
		data-state={store.open ? "open" : "closed"}
		onclick={handleClick}
		data-slot="popover-trigger"
		class={cn("", className)}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}