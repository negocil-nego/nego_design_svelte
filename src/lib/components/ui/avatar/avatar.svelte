<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";
	import { setAvatarContext } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		size = "default",
		src,
		srcset,
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		size?: "default" | "sm" | "lg";
		src?: string;
		srcset?: string;
	} = $props();

	const ctx = setAvatarContext(src, srcset);

	$effect(() => {
		if (src) ctx.src = src;
		if (srcset) ctx.srcset = srcset;
	});
</script>

<div
	bind:this={ref}
	data-slot="avatar"
	data-size={size}
	class={cn(
		"group/avatar relative flex size-10 shrink-0 select-none overflow-hidden rounded-full",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</div>