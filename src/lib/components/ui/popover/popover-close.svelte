<script lang="ts">
	import { getPopoverContext } from "./popover-context.svelte.js";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLButtonElement | null>(null),
		children,
		...restProps
	}: HTMLButtonAttributes & {
		ref?: HTMLButtonElement | null;
		children?: Snippet;
	} = $props();

	const store = getPopoverContext();
</script>

<button
	bind:this={ref}
	type="button"
	data-slot="popover-close"
	onclick={() => store.closeMenu()}
	{...restProps}
>
	{@render children?.()}
</button>