<script lang="ts" module>
	/**
	 * Barra de tabs reutilizável para as variantes de perfil.
	 * Suporta loading state, tabs customizadas, active tab controlável
	 * e estilos variantes (underline vs pill).
	 * @component
	 */
	export type ProfileUserTabItem = { id: string; label: string };
	export type ProfileUserTabsStyle = "underline" | "pill";
</script>

<script lang="ts">
	import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
	import { cn } from "$lib/utils.js";

	let {
		tabs,
		activeTab = $bindable(),
		style = "underline",
		isLoading = false,
		className,
		onchange,
	}: {
		tabs: ProfileUserTabItem[];
		activeTab?: string;
		style?: ProfileUserTabsStyle;
		isLoading?: boolean;
		className?: string;
		onchange?: (id: string) => void;
	} = $props();

	const currentTab = $derived(activeTab ?? tabs[0]?.id ?? "");

	const handleSelect = (id: string) => {
		activeTab = id;
		onchange?.(id);
	};
</script>

<div
	class={cn(
		"mb-6 flex gap-1 border-b overflow-x-auto",
		style === "pill" && "-mt-12 mb-6 rounded-t-lg border border-t bg-background px-2 py-1 shadow-sm border-b",
		className
	)}
	data-slot="profile-user-tabs"
>
	{#if isLoading}
		{#each tabs as tab (tab.id)}
			<Skeleton class="h-9 w-32 shrink-0 rounded-t-md" />
		{/each}
	{:else}
		{#each tabs as tab (tab.id)}
			<button
				type="button"
				onclick={() => handleSelect(tab.id)}
				class={cn(
					"shrink-0 px-4 py-2 text-sm font-medium transition-colors whitespace-nowrap",
					style === "underline"
						? cn(
								"border-b-2",
								currentTab === tab.id
									? "border-foreground text-foreground"
									: "border-transparent text-muted-foreground hover:text-foreground"
							)
						: cn(
								"rounded-md",
								currentTab === tab.id
									? "bg-primary/10 text-primary"
									: "text-muted-foreground hover:bg-muted hover:text-foreground"
							)
				)}
			>
				{tab.label}
			</button>
		{/each}
	{/if}
</div>
