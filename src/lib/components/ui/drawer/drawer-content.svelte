<script lang="ts">
	import { cn, type WithElementRef, type WithoutChildrenOrChild } from "$lib/utils.js";
	import type { ComponentProps, Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import DrawerPortal from "./drawer-portal.svelte";
	import DrawerOverlay from "./drawer-overlay.svelte";
	import { useDrawerContext } from "./drawer.svelte";

	let {
		ref = $bindable(null),
		class: className,
		portalProps,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		portalProps?: WithoutChildrenOrChild<ComponentProps<typeof DrawerPortal>>;
		children?: Snippet;
	} = $props();

	const drawer = useDrawerContext();

	$effect(() => {
		if (!drawer.open) return;
		const previous = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const onKeydown = (event: KeyboardEvent) => {
			if (event.key === "Escape") drawer.setOpen(false);
		};
		document.addEventListener("keydown", onKeydown);
		return () => {
			document.body.style.overflow = previous;
			document.removeEventListener("keydown", onKeydown);
		};
	});

	const directionClasses = $derived(
		drawer.direction === "left" || drawer.direction === "right"
			? cn(
					"inset-y-0 w-full max-w-sm",
					drawer.direction === "left"
						? "left-0 border-r rounded-r-xl"
						: "right-0 border-l rounded-l-xl"
				)
			: cn(
					"inset-x-0 h-auto max-h-[80vh]",
					drawer.direction === "bottom"
						? "bottom-0 mt-24 rounded-t-xl border-t animate-slide-in-up"
						: "top-0 mb-24 rounded-b-xl border-b animate-slide-in-down"
				)
	);
</script>

{#if drawer.open}
	<DrawerPortal {...portalProps}>
		<DrawerOverlay />
		<div
			bind:this={ref}
			data-slot="drawer-content"
			data-state={drawer.open ? "open" : "closed"}
			data-vaul-drawer-direction={drawer.direction}
			class={cn(
				"bg-background text-foreground fixed z-50 flex flex-col border p-4 group/drawer-content",
				directionClasses,
				className
			)}
			{...restProps}
		>
			<div
				aria-hidden="true"
				class={cn(
					"bg-muted mx-auto mt-4 h-1.5 w-[100px] shrink-0 rounded-full",
					drawer.direction === "bottom" || drawer.direction === "top"
						? "block"
						: "hidden"
				)}
			></div>
			<div class="flex h-full w-full flex-col">
				{@render children?.()}
			</div>
		</div>
	</DrawerPortal>
{/if}