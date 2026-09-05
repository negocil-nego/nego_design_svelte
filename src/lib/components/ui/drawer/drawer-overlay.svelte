<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";
	import { useDrawerContext } from "./drawer.svelte";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

	const drawer = useDrawerContext();
</script>

{#if drawer.open}
	<div
		bind:this={ref}
		data-slot="drawer-overlay"
		class={cn(
			"bg-black/60 fixed inset-0 z-40 animate-fade-in",
			className
		)}
		onclick={() => drawer.setOpen(false)}
		{...restProps}
	></div>
{/if}