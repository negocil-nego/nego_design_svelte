<script lang="ts" module>
	import { cn } from "$lib/utils.js";

	const emptyMediaBase =
		"mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0";

	const emptyMediaVariantClasses = {
		default: "bg-transparent",
		icon: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6",
		dashed: "flex size-10 shrink-0 items-center justify-center rounded-lg border-2 border-dashed border-border bg-transparent text-foreground [&_svg:not([class*='size-'])]:size-6",
	} as const;

	export type EmptyMediaVariant = keyof typeof emptyMediaVariantClasses;

	export function emptyMediaVariants(opts: { variant?: EmptyMediaVariant } = {}): string {
		const variant = opts.variant ?? "default";
		return cn(emptyMediaBase, emptyMediaVariantClasses[variant]);
	}
</script>

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { WithElementRef } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		variant = "default",
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & { variant?: EmptyMediaVariant } = $props();
</script>

<div
	bind:this={ref}
	data-slot="empty-icon"
	data-variant={variant}
	class={cn(emptyMediaVariants({ variant }), className)}
	{...restProps}
>
	{@render children?.()}
</div>