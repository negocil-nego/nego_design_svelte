<script lang="ts" module>
	import { getContext, setContext } from "svelte";

	export type DrawerDirection = "top" | "right" | "bottom" | "left";

	export type DrawerContext = {
		get open(): boolean;
		get direction(): DrawerDirection;
		setOpen: (open: boolean) => void;
	};

	const DRAWER_CONTEXT_KEY = "scn-drawer";

	export function setDrawerContext(ctx: DrawerContext): DrawerContext {
		return setContext(DRAWER_CONTEXT_KEY, ctx);
	}

	export function useDrawerContext(): DrawerContext {
		return getContext<DrawerContext>(DRAWER_CONTEXT_KEY);
	}
</script>

<script lang="ts">
	import { cn } from "$lib/utils.js";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		open = $bindable(false),
		onOpenChange = () => {},
		direction = "bottom",
		shouldScaleBackground = false,
		// eslint-disable-next-line no-useless-assignment
		activeSnapPoint = $bindable(null),
		snapPoints,
		closeThreshold,
		handleOnly = false,
		noBodyStyles = false,
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLDivElement> & {
		open?: boolean;
		onOpenChange?: (open: boolean) => void;
		direction?: DrawerDirection;
		shouldScaleBackground?: boolean;
		activeSnapPoint?: number | string | null;
		snapPoints?: (number | string)[];
		closeThreshold?: number;
		handleOnly?: boolean;
		noBodyStyles?: boolean;
		children?: Snippet;
	} = $props();

	setDrawerContext({
		get open() {
			return open;
		},
		get direction() {
			return direction;
		},
		setOpen(value: boolean) {
			open = value;
			onOpenChange(value);
		},
	});
</script>

<div
	data-slot="drawer-root"
	class={cn("contents", className)}
	{...restProps}
>
	{@render children?.()}
</div>