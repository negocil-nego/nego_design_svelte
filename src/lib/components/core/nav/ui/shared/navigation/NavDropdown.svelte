<script lang="ts">
	import { HugeiconsIcon } from "@hugeicons/svelte";
	import { ArrowDown01Icon } from "@hugeicons/core-free-icons";
	import type { Snippet } from "svelte";

	let {
		label,
		className = "",
		children,
	}: {
		label: string;
		className?: string;
		children: Snippet;
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
			clearTimeout(closeTimer);
			open = !open;
		}}
		class="inline-flex h-9 w-max items-center justify-center rounded-2xl px-4.5 py-2.5 text-sm font-medium transition-all outline-none select-none hover:bg-muted focus:bg-muted focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 {open
			? 'bg-muted'
			: ''}"
	>
		{label}
		<HugeiconsIcon
			icon={ArrowDown01Icon}
			strokeWidth={2}
			class={`relative top-px ml-1 size-3 transition-transform duration-300 ${
				open ? "rotate-180" : ""
			}`}
			aria-hidden="true"
		/>
	</button>

	{#if open}
		<div
			class="absolute left-0 top-full z-50 md:z-100 mt-1.5 w-max rounded-2xl bg-popover p-2.5 pr-3 overflow-hidden text-popover-foreground shadow-2xl ring-1 ring-foreground/5"
		>
			{@render children()}
		</div>
	{/if}
</li>
