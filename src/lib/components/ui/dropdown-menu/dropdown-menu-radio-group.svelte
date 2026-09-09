<script lang="ts">
	import { setDropdownMenuRadioGroupContext } from "./dropdown-menu-context.svelte.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLDivElement | null>(null),
		value = $bindable<string>(),
		onValueChange,
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
		value?: string;
		onValueChange?: (value: string) => void;
		children?: Snippet;
	} = $props();

	let groupState = $state({ value: value ?? "" });

	$effect(() => {
		if (value !== undefined && value !== groupState.value) {
			groupState.value = value;
		}
	});

	function setValue(next: string) {
		if (next === groupState.value) return;
		groupState.value = next;
		value = next;
		onValueChange?.(next);
	}

	setDropdownMenuRadioGroupContext({ state: groupState, setValue });
</script>

<div
	bind:this={ref}
	role="radiogroup"
	data-slot="dropdown-menu-radio-group"
	{...restProps}
>
	{@render children?.()}
</div>