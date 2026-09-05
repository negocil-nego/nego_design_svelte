<script lang="ts">
	import { cn, type WithElementRef } from "$lib/utils.js";
	import type { HTMLAttributes } from "svelte/elements";
	import {
		SIDEBAR_COOKIE_MAX_AGE,
		SIDEBAR_COOKIE_NAME,
		SIDEBAR_WIDTH,
		SIDEBAR_WIDTH_ICON,
	} from "./constants.js";
	import { setSidebar } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		defaultOpen = true,
		open = $bindable(defaultOpen),
		onOpenChange = () => {},
		collapsible = "offcanvas",
		side = "left",
		class: className,
		style,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		defaultOpen?: boolean;
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
		collapsible?: "icon" | "offcanvas" | "none";
		side?: "left" | "right";
	} = $props();

	const sidebar = setSidebar({
		open: () => open,
		setOpen: (value: boolean) => {
			open = value;
			onOpenChange(value);

			if (typeof document !== "undefined") {
				document.cookie = `${SIDEBAR_COOKIE_NAME}=${value}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
			}
		},
		collapsible,
		side,
	});
</script>

<svelte:window onkeydown={sidebar.handleShortcutKeydown} />

<div
	data-slot="sidebar-wrapper"
	data-side={sidebar.side}
	data-collapsible={sidebar.collapsible}
	data-variant={sidebar.variant}
	style="--sidebar-width: {SIDEBAR_WIDTH}; --sidebar-width-icon: {SIDEBAR_WIDTH_ICON}; {style}"
	class={cn(
		"group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
		className
	)}
	bind:this={ref}
	{...restProps}
>
	{@render children?.()}
</div>