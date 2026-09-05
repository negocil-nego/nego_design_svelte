<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLImgAttributes } from "svelte/elements";
	import { getAvatarContext } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		src,
		srcset,
		alt = "",
		class: className,
		...restProps
	}: WithElementRef<HTMLImgAttributes> = $props();

	const ctx = getAvatarContext();

	if (src) ctx.src = src;
	if (srcset) ctx.srcset = srcset;

	$effect(() => {
		if (src) ctx.src = src;
		if (srcset) ctx.srcset = srcset;
	});
</script>

{#if src || ctx.src}
	<img
		bind:this={ref}
		data-slot="avatar-image"
		src={src ?? ctx.src}
		srcset={srcset ?? ctx.srcset}
		{alt}
		onerror={() => {
			ctx.imageError = true;
		}}
		onload={() => {
			ctx.imageError = false;
		}}
		class={cn("aspect-square size-full rounded-full object-cover", className)}
		{...restProps}
	/>
{/if}