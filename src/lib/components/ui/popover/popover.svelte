<script lang="ts">
	import { generatePopoverId, setPopoverContext, type PopoverStore } from "./popover-context.svelte.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		open = $bindable<boolean>(),
		defaultOpen = false,
		onOpenChange,
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		open?: boolean;
		defaultOpen?: boolean;
		onOpenChange?: (open: boolean) => void;
		children?: Snippet;
	} = $props();

	let store: PopoverStore = $state({
		open: open ?? defaultOpen ?? false,
		anchorId: generatePopoverId(),
		anchorEl: null,
		clickEvent: null,
		toggle: () => {
			setOpen(!store.open);
		},
		openMenu: () => setOpen(true),
		closeMenu: () => setOpen(false),
		setAnchor: (el: HTMLElement | null) => {
			store.anchorEl = el;
		},
	});

	function setOpen(value: boolean) {
		if (store.open === value) return;
		store.open = value;
		open = value;
		onOpenChange?.(value);
	}

	$effect(() => {
		if (open !== undefined && open !== store.open) {
			store.open = open;
			onOpenChange?.(open);
		}
	});

	setPopoverContext(store);
</script>

<div class="relative" {...restProps}>
	{@render children?.()}
</div>