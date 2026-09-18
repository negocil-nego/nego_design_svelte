<script lang="ts">
	import { getDropdownMenuContext } from "./dropdown-menu-context.svelte.js";
	import { cn } from "$lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLDivElement | null>(null),
		align = "start",
		side = "bottom",
		sideOffset = 4,
		portalProps,
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
		align?: "start" | "center" | "end";
		side?:
			| "top"
			| "right"
			| "bottom"
			| "left"
			| "inline-start"
			| "inline-end";
		sideOffset?: number;
		portalProps?: Record<string, unknown>;
		class?: string;
		children?: Snippet;
	} = $props();

	const store = getDropdownMenuContext();

	let anchorWidth = $state(0);

	$effect(() => {
		if (!store.open) return;
		const width = store.anchorEl?.getBoundingClientRect().width ?? 0;
		if (width > 0) anchorWidth = width;
	});

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
		const horizontal =
			side === "right" ||
			side === "left" ||
			side === "inline-start" ||
			side === "inline-end";
		if (horizontal) {
			const sideClass =
				side === "left" || side === "inline-start"
					? "right-full"
					: "left-full";
			const alignClass =
				align === "end"
					? "bottom-0"
					: align === "center"
						? "top-1/2 -translate-y-1/2"
						: "top-0";
			const margin =
				side === "left" || side === "inline-start"
					? `margin-right: ${sideOffset + 4}px`
					: `margin-left: ${sideOffset + 4}px`;
			return { sideClass, alignClass, margin };
		}
		const sideClass = side === "top" ? "bottom-full" : "top-full";
		const alignClass =
			align === "end"
				? "end-0"
				: align === "center"
					? "start-1/2 -translate-x-1/2"
					: "start-0";
		const margin =
			side === "top"
				? `margin-bottom: ${sideOffset + 4}px`
				: `margin-top: ${sideOffset + 4}px`;
		return { sideClass, alignClass, margin };
	});

	let contentStyle = $derived(
		`${positionClasses.margin}${anchorWidth > 0 ? `;--bits-dropdown-menu-anchor-width: ${anchorWidth}px` : ""}`,
	);
</script>

{#if store.open}
	<div
		bind:this={ref}
		data-slot="dropdown-menu-content"
		role="menu"
		data-state={store.open ? "open" : "closed"}
		style={contentStyle}
		class={cn(
			"absolute z-50 min-w-48 overflow-x-hidden overflow-y-auto rounded-sm p-1 shadow-2xl ring-1 ring-foreground/5 bg-popover text-popover-foreground outline-none animate-zoom-in",
			positionClasses.sideClass,
			positionClasses.alignClass,
			className,
		)}
		{...restProps}
	>
		{@render children?.()}
	</div>
{/if}
