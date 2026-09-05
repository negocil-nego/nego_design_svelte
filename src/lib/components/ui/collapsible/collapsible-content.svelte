<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";
	import { useCollapsibleContext } from "./collapsible.svelte";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: {
		ref?: HTMLDivElement | null;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	} = $props();

	const state = useCollapsibleContext();
</script>

{#if state.open}
	<div
		bind:this={ref}
		data-slot="collapsible-content"
		data-state={state.open ? "open" : "closed"}
		class={cn("animate-fade-in", className)}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}