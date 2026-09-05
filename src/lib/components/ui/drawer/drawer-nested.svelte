<script lang="ts">
	import { type Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";
	import { setDrawerContext, useDrawerContext } from "./drawer.svelte";

	let {
		open = $bindable(false),
		direction = "bottom",
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		open?: boolean;
		direction?: "top" | "right" | "bottom" | "left";
		children?: Snippet;
	} = $props();

	useDrawerContext();

	setDrawerContext({
		get open() {
			return open;
		},
		get direction() {
			return direction;
		},
		setOpen(value: boolean) {
			open = value;
		},
	});
</script>

<div data-slot="drawer-nested" class={className} {...restProps}>
	{@render children?.()}
</div>