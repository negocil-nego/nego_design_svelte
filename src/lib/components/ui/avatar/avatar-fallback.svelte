<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";
	import { getAvatarContext } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();

	const ctx = getAvatarContext();

	let show = $derived(!ctx.src || ctx.imageError);
</script>

{#if show}
	<div
		bind:this={ref}
		data-slot="avatar-fallback"
		class={cn(
			"bg-muted flex size-full items-center justify-center rounded-full fill-foreground text-sm select-none [&>svg]:size-full",
			className
		)}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}