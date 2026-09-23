<script lang="ts" module>
	import { COUNTRIES, type Country } from "$lib/components/ui/image/flag-map";

	export { COUNTRIES };
</script>

<script lang="ts">
	import ImageFlag from "$lib/components/ui/image/ImageFlag.svelte";
	import * as Popover from "$lib/components/ui/popover";
	import { cn } from "$lib/utils.js";
	import type { CountryCode } from "./types";

	interface Props {
		selected?: CountryCode | null;
		dialCode?: string;
		disabled?: boolean;
		onselect?: (val: CountryCode | null) => void;
		order?: (a: Country, b: Country) => number;
	}

	let {
		selected = $bindable(null),
		// eslint-disable-next-line no-useless-assignment
		dialCode = $bindable(""),
		disabled = false,
		onselect = undefined,
		order = (a, b) => a.name.localeCompare(b.name),
	}: Props = $props();

	let open = $state(false);
	let search = $state("");

	let ordered = $derived(COUNTRIES.slice().sort(order));

	let filtered = $derived(
		search.trim()
			? ordered.filter(
					(c) =>
						c.name.toLowerCase().includes(search.toLowerCase()) ||
						c.iso2.toLowerCase().includes(search.toLowerCase()) ||
						c.dialCode.includes(search),
				)
			: ordered,
	);

	let currentCountry = $derived(COUNTRIES.find((c) => c.iso2 === selected) ?? null);

	function select(country: Country) {
		selected = country.iso2;
		dialCode = country.dialCode;
		open = false;
		search = "";
		onselect?.(selected);
	}

	$effect(() => {
		const country = COUNTRIES.find((c) => c.iso2 === selected);
		dialCode = country?.dialCode ?? "";
	});
</script>

<Popover.Root bind:open>
	<Popover.Trigger
		{disabled}
		class={cn(
			"border-input bg-input/30 focus-visible:ring-ring/50 dark:bg-input/30 focus-visible:border-ring flex h-9 w-fit items-center gap-2 rounded-l-md rounded-r-none border py-1 pr-3 pl-2 text-sm transition-[color,box-shadow] focus-visible:ring-[3px] outline-none disabled:cursor-not-allowed disabled:opacity-50",
		)}
	>
		{#if currentCountry}
			<ImageFlag country={currentCountry.iso2} class="size-4 rounded-sm" />
		{:else}
			<ImageFlag country="us" class="size-4 rounded-sm" />
		{/if}
		<span class="text-xs text-muted-foreground">
			{currentCountry?.iso2.toUpperCase() ?? "—"}
		</span>
		<span class="text-muted-foreground text-[10px]">▼</span>
	</Popover.Trigger>
	<Popover.Content class="w-72 p-0" align="start">
		<div class="flex flex-col">
			<div class="border-b p-2">
				<input
					type="text"
					placeholder="Search country..."
					bind:value={search}
					class="border-input bg-background placeholder:text-muted-foreground flex h-8 w-full rounded-md border px-2 py-1 text-sm outline-none focus:ring-1 focus:ring-ring"
				/>
			</div>
			<div class="max-h-64 overflow-y-auto">
				{#if filtered.length === 0}
					<div class="text-muted-foreground px-3 py-2 text-center text-xs">
						No countries found
					</div>
				{:else}
					{#each filtered as country (country.id)}
						<button
							type="button"
							onclick={() => select(country)}
							class={cn(
								"flex w-full items-center gap-2 px-3 py-1.5 text-left text-sm transition-colors hover:bg-muted",
								selected === country.iso2 && "bg-muted font-medium",
							)}
						>
							<ImageFlag country={country.iso2} class="size-4 rounded-sm" />
							<span class="flex-1 truncate">{country.name}</span>
							<span class="text-muted-foreground text-xs">+{country.dialCode}</span>
						</button>
					{/each}
				{/if}
			</div>
		</div>
	</Popover.Content>
</Popover.Root>
