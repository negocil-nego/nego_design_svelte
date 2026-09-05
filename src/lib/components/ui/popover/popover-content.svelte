<script lang="ts">
	import { getPopoverContext } from "./popover-context.svelte.js";
	import { cn } from "$lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLDivElement | null>(null),
		align = "center",
		side = "bottom",
		sideOffset = 4,
		portalProps,
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
		align?: "start" | "center" | "end";
		side?: "top" | "right" | "bottom" | "left";
		sideOffset?: number;
		portalProps?: Record<string, unknown>;
		class?: string;
		children?: Snippet;
	} = $props();

	const store = getPopoverContext();

	$effect(() => {
		if (!store.open) return;
		function handlePointerDown(event: PointerEvent) {
			const target = event.target as Node;
			if (store.anchorEl?.contains(target)) return;
			if (ref?.contains(target)) return;
			store.closeMenu();
		}
		function handleKeydown(event: KeyboardEvent) {
			if (event.key === "Escape") {
				store.closeMenu();
				store.anchorEl?.focus();
			}
		}
		document.addEventListener("pointerdown", handlePointerDown);
		document.addEventListener("keydown", handleKeydown);
		return () => {
			document.removeEventListener("pointerdown", handlePointerDown);
			document.removeEventListener("keydown", handleKeydown);
		};
	});

	let positionClasses = $derived.by(() => {
		const horizontal = side === "right" || side === "left";
		if (horizontal) {
			const sideClass = side === "left" ? "right-full" : "left-full";
			const alignClass =
				align === "end"
					? "bottom-0"
					: align === "start"
						? "top-0"
						: "top-1/2 -translate-y-1/2";
			const margin =
				side === "left"
					? `margin-right: ${sideOffset + 4}px`
					: `margin-left: ${sideOffset + 4}px`;
			return { sideClass, alignClass, margin };
		}
		const sideClass = side === "top" ? "bottom-full" : "top-full";
		const alignClass =
			align === "end" ? "end-0" : align === "start" ? "start-0" : "start-1/2 -translate-x-1/2";
		const margin =
			side === "top"
				? `margin-bottom: ${sideOffset + 4}px`
				: `margin-top: ${sideOffset + 4}px`;
		return { sideClass, alignClass, margin };
	});
</script>

{#if store.open}
	<div
		bind:this={ref}
		data-slot="popover-content"
		data-state={store.open ? "open" : "closed"}
		style={positionClasses.margin}
		class={cn(
			"absolute z-50 w-72 rounded-md border bg-popover p-4 text-sm text-popover-foreground shadow-md outline-none animate-zoom-in",
			positionClasses.sideClass,
			positionClasses.alignClass,
			className,
		)}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}