<script lang="ts">
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLDivElement | null>(null),
		// eslint-disable-next-line no-useless-assignment
		value = $bindable<(string | number)[]>([]),
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		ref?: HTMLDivElement | null;
		value?: (string | number)[];
		children?: Snippet;
	} = $props();
</script>

<div
	bind:this={ref}
	role="group"
	aria-label="checkbox-group"
	data-slot="dropdown-menu-checkbox-group"
	{...restProps}
>
	{@render children?.()}
</div>