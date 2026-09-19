<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
			import { cn } from "$lib/utils.js";
	import { getDropdownMenuSubContext } from "./dropdown-menu-context.svelte.js";
	import type { Snippet } from "svelte";
	import type { HTMLButtonAttributes } from "svelte/elements";

	let {
		ref = $bindable<HTMLButtonElement | null>(null),
		class: className,
		inset,
		disabled,
		children,
		...restProps
	}: HTMLButtonAttributes & {
		ref?: HTMLButtonElement | null;
		class?: string;
		inset?: boolean;
		disabled?: boolean;
		children?: Snippet;
	} = $props();

	const subStore = getDropdownMenuSubContext();

	let highlighted = $state(false);

	function handleClick() {
		subStore.open = !subStore.open;
	}
</script>

<button
	bind:this={ref}
	type="button"
	role="menuitem"
	tabindex="-1"
	data-slot="dropdown-menu-sub-trigger"
	data-inset={inset}
	data-state={subStore.open ? "open" : "closed"}
	data-highlighted={highlighted || undefined}
	{disabled}
	onclick={handleClick}
	onfocus={() => (highlighted = true)}
	onblur={() => (highlighted = false)}
	onmouseenter={() => (highlighted = true)}
	onmouseleave={() => {
		highlighted = false;
	}}
	class={cn(
		"relative flex w-full cursor-pointer items-center justify-start gap-2 rounded-lg px-2 py-1.5 text-sm outline-none select-none hover:bg-muted hover:text-foreground disabled:pointer-events-none disabled:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
		className,
	)}
	{...restProps}
>
	{@render children?.()}
	<ImageHugeicons icon="arrow-right-01" class="ms-auto size-3.5" />
</button>