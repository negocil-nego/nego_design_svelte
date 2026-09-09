<script lang="ts">
	import {
		getDropdownMenuContext,
		setDropdownMenuSubContext,
		type DropdownMenuSubStore,
	} from "./dropdown-menu-context.svelte.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLDivElement | null>(null),
		open = $bindable<boolean>(),
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
		open?: boolean;
		children?: Snippet;
	} = $props();

	const rootStore = getDropdownMenuContext();

	let subStore: DropdownMenuSubStore = $state({ open: open ?? false });

	let closeTimer: ReturnType<typeof setTimeout> | undefined;

	function setOpen(value: boolean) {
		subStore.open = value;
		open = value;
	}

	function openSub() {
		clearTimeout(closeTimer);
		setOpen(true);
	}

	function scheduleClose() {
		clearTimeout(closeTimer);
		closeTimer = setTimeout(() => setOpen(false), 150);
	}

	$effect(() => {
		if (open !== undefined && open !== subStore.open) {
			subStore.open = open;
		}
	});

	$effect(() => {
		if (!rootStore.open) {
			subStore.open = false;
		}
	});

	$effect(() => {
		if (!subStore.open) return;
		function handlePointerDown(event: PointerEvent) {
			const target = event.target as Node;
			if (ref?.contains(target)) return;
			subStore.open = false;
		}
		document.addEventListener("pointerdown", handlePointerDown);
		return () => document.removeEventListener("pointerdown", handlePointerDown);
	});

	setDropdownMenuSubContext(subStore);
</script>

<div
	bind:this={ref}
	class="relative"
	data-slot="dropdown-menu-sub"
	onmouseenter={openSub}
	onmouseleave={scheduleClose}
	{...restProps}
>
	{@render children?.()}
</div>