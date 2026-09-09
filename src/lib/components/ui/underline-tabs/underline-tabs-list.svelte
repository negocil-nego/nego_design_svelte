<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";

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
</script>

<div
	bind:this={ref}
	data-slot="underline-tabs-list"
	role="tablist"
	data-orientation="horizontal"
	class={cn(
		"text-muted-foreground border-border relative inline-flex h-9 w-full max-w-full items-center justify-start overflow-x-auto border-b",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>

<style>
	:global([data-slot='underline-tabs-list']) {
		-ms-overflow-style: none; /* IE and Edge */
		scrollbar-width: none; /* Firefox */
	}

	:global([data-slot='underline-tabs-list']::-webkit-scrollbar) {
		display: none;
	}
</style>