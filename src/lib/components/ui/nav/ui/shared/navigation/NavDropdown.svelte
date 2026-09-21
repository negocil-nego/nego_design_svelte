<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
import { Skeleton } from "$lib/components/ui/skeleton/index.js";
			import type { Snippet } from "svelte";

	let {
		label,
		className = "",
		hoverClass = "",
		isLoading = false,
		onClick,
		children,
	}: {
		label: string;
		className?: string;
		hoverClass?: string;
		isLoading?: boolean;
		children?: Snippet;
		onClick?: () => void;
	} = $props();

	let open = $state(false);
	let closeTimer: ReturnType<typeof setTimeout> | undefined;
	let itemRef = $state<HTMLLIElement | null>(null);

	function openMenu() {
		clearTimeout(closeTimer);
		open = true;
	}

	function scheduleClose() {
		clearTimeout(closeTimer);
		closeTimer = setTimeout(() => {
			open = false;
		}, 150);
	}

	$effect(() => {
		function handleDocumentClick(event: MouseEvent) {
			if (open && itemRef && !itemRef.contains(event.target as Node)) {
				open = false;
			}
		}
		document.addEventListener("click", handleDocumentClick);
		return () => document.removeEventListener("click", handleDocumentClick);
	});
</script>

<li
	bind:this={itemRef}
	class="relative {className}"
	onmouseenter={openMenu}
	onmouseleave={scheduleClose}
>
	<button
		type="button"
		aria-expanded={isLoading ? false : open}
		disabled={isLoading}
		onclick={() => {
			if (isLoading) return;
			if (children) {
				clearTimeout(closeTimer);
				open = !open;
			}
			if (onClick) onClick();
		}}
		class="inline-flex h-9 w-max items-center justify-center rounded-2xl px-4.5 py-2.5 text-sm font-medium transition-all outline-none select-none {isLoading
			? 'pointer-events-none cursor-default'
			: `hover:${hoverClass} focus:${hoverClass} focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 ${open ? hoverClass : ''}`}"
	>
		{#if isLoading}
			<Skeleton class="h-4 w-20 rounded-md" />
		{:else}
			{label}
			{#if children}
				<ImageHugeicons icon="arrow-down-01" class={`relative top-px ml-1 size-3 transition-transform duration-300 ${
						open ? "rotate-180" : ""
					}`} aria-hidden="true" />
			{/if}
		{/if}
	</button>

	{#if open && children}
		<div
			style="z-index: 9999;"
			class="absolute left-0 top-full mt-1.5 w-max rounded-2xl bg-popover p-2.5 pr-3 overflow-hidden text-popover-foreground shadow-2xl ring-1 ring-foreground/5"
		>
			{#if isLoading}
				<div class="grid min-w-48 gap-3 p-1 pr-2">
					<Skeleton class="h-4 w-36" />
					<Skeleton class="h-4 w-44" />
					<Skeleton class="h-4 w-32" />
					<Skeleton class="h-4 w-40" />
				</div>
			{:else}
				{@render children()}
			{/if}
		</div>
	{/if}
</li>
