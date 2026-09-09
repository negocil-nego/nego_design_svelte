<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";
	import { useUnderlineTabsTrigger } from "./underline-tabs.svelte.js";

	let {
		ref = $bindable(null),
		value,
		class: className,
		children,
		...restProps
	}: {
		ref?: HTMLDivElement | null;
		value: string;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	} = $props();

	const state = useUnderlineTabsTrigger();
</script>

{#if state.value === value}
	<div
		bind:this={ref}
		data-slot="underline-tabs-content"
		role="tabpanel"
		data-state="active"
		class={cn("flex-1 outline-none", className)}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}