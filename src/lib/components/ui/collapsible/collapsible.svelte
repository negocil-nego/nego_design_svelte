<script lang="ts" module>
	import { getContext, setContext } from "svelte";

	export type CollapsibleContext = {
		get open(): boolean;
		get disabled(): boolean;
		toggle: () => void;
	};

	const COLLAPSIBLE_CONTEXT_KEY = "scn-collapsible";

	export function setCollapsibleContext(ctx: CollapsibleContext): CollapsibleContext {
		return setContext(COLLAPSIBLE_CONTEXT_KEY, ctx);
	}

	export function useCollapsibleContext(): CollapsibleContext {
		return getContext<CollapsibleContext>(COLLAPSIBLE_CONTEXT_KEY);
	}
</script>

<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";

	let {
		defaultOpen = false,
		open = $bindable(defaultOpen),
		disabled = false,
		class: className,
		children,
		child,
	}: {
		defaultOpen?: boolean;
		open?: boolean;
		disabled?: boolean;
		class?: string;
		children?: Snippet<[{ props: Record<string, unknown> }]>;
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	} = $props();

	function toggle() {
		if (disabled) return;
		open = !open;
	}

	setCollapsibleContext({
		get open() {
			return open;
		},
		get disabled() {
			return disabled;
		},
		toggle
	});

	const rootProps = $derived({
		"data-slot": "collapsible",
		"data-state": open ? "open" : "closed",
		class: cn("group/collapsible", className)
	});
</script>

{#if child}
	{@render child({ props: rootProps })}
{:else}
	{@render children?.({ props: rootProps })}
{/if}