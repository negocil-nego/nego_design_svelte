<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { getDropdownMenuSubContext } from "./dropdown-menu-context.svelte.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLDivElement | null>(null),
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
		class?: string;
		children?: Snippet;
	} = $props();

	const subStore = getDropdownMenuSubContext();
</script>

{#if subStore.open}
	<div
		bind:this={ref}
		data-slot="dropdown-menu-sub-content"
		data-state={subStore.open ? "open" : "closed"}
		class={cn(
			"absolute left-full top-0 z-50 ml-2 w-auto min-w-36 rounded-2xl bg-popover p-1 text-popover-foreground shadow-2xl ring-1 ring-foreground/5 animate-zoom-in",
			className,
		)}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}