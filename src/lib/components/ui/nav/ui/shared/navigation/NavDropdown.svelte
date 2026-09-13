<script lang="ts">
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
	import type { Snippet } from "svelte";

	let {
		label,
		className = "",
		hoverClass = "",
		onClick,
		children,
	}: {
		label: string;
		className?: string;
		hoverClass?: string;
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
		aria-expanded={open}
		onclick={() => {
			if (children) {
				clearTimeout(closeTimer);
				open = !open;
			}
			if (onClick) onClick();
		}}
		class="inline-flex h-9 w-max items-center justify-center rounded-2xl px-4.5 py-2.5 text-sm font-medium transition-all outline-none select-none hover:{hoverClass} focus:{hoverClass} focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 {open
			? hoverClass
			: ''}"
	>
		{label}
		{#if children}
			<HugeiconsIcon
				icon={ArrowDown01Icon}
				strokeWidth={2}
				class={`relative top-px ml-1 size-3 transition-transform duration-300 ${
					open ? "rotate-180" : ""
				}`}
				aria-hidden="true"
			/>
		{/if}
	</button>

	{#if open && children}
		<div
			style="z-index: 9999;"
			class="absolute left-0 top-full mt-1.5 w-max rounded-2xl bg-popover p-2.5 pr-3 overflow-hidden text-popover-foreground shadow-2xl ring-1 ring-foreground/5"
		>
			{@render children()}
		</div>
	{/if}
</li>
