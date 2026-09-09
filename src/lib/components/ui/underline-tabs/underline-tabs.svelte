<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";
	import { useUnderlineTabs } from "./underline-tabs.svelte.js";

	let {
		ref = $bindable(null),
		defaultValue = "",
		value = $bindable(defaultValue),
		onValueChange,
		orientation = "horizontal",
		id = "",
		class: className,
		children,
		...restProps
	}: {
		ref?: HTMLDivElement | null;
		defaultValue?: string;
		value?: string;
		onValueChange?: (value: string) => void;
		orientation?: "horizontal" | "vertical";
		id?: string;
		class?: string;
		children?: Snippet;
		[key: string]: unknown;
	} = $props();

	let hovered = $state<string | null>(null);

	function select(next: string) {
		value = next;
		onValueChange?.(next);
	}

	function setHovered(next: string | null) {
		hovered = next;
	}

	useUnderlineTabs({
		get value() {
			return value;
		},
		get hovered() {
			return hovered;
		},
		get orientation() {
			return orientation;
		},
		select,
		setHovered
	});
</script>

<div
	bind:this={ref}
	data-slot="underline-tabs"
	data-orientation={orientation}
	class={cn("flex flex-col gap-2", className)}
	{...restProps}
>
	{@render children?.()}
</div>