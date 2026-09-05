<script lang="ts" module>
	import type { Country } from './types';

	export const COUNTRIES: Country[] = [
		{ id: 'ao', iso2: 'ao', name: 'Angola', dialCode: '244' },
		{ id: 'br', iso2: 'br', name: 'Brazil', dialCode: '55' },
		{ id: 'cv', iso2: 'cv', name: 'Cape Verde', dialCode: '238' },
		{ id: 'cn', iso2: 'cn', name: 'China', dialCode: '86' },
		{ id: 'fr', iso2: 'fr', name: 'France', dialCode: '33' },
		{ id: 'gw', iso2: 'gw', name: 'Guinea-Bissau', dialCode: '245' },
		{ id: 'jp', iso2: 'jp', name: 'Japan', dialCode: '81' },
		{ id: 'mz', iso2: 'mz', name: 'Mozambique', dialCode: '258' },
		{ id: 'pt', iso2: 'pt', name: 'Portugal', dialCode: '351' },
		{ id: 'st', iso2: 'st', name: 'São Tomé and Príncipe', dialCode: '239' },
		{ id: 'za', iso2: 'za', name: 'South Africa', dialCode: '27' },
		{ id: 'es', iso2: 'es', name: 'Spain', dialCode: '34' },
		{ id: 'gb', iso2: 'gb', name: 'United Kingdom', dialCode: '44' },
		{ id: 'us', iso2: 'us', name: 'United States', dialCode: '1' }
	];
</script>

<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { HugeiconsIcon } from '@hugeicons/svelte';
	import { GlobalIcon, UnfoldMoreIcon } from '@hugeicons/core-free-icons';
	import type { CountryCode } from './types';

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
	dialCode = $bindable(''),
		disabled = false,
		onselect = undefined,
		order = (a, b) => {
			return a.name.localeCompare(b.name);
		}
	}: Props = $props();

	let ordered = $derived(COUNTRIES.slice().sort(order));

	function handleChange(e: Event) {
		selected = (e.currentTarget as HTMLSelectElement).value;
		onselect?.(selected);
	}

	$effect(() => {
		const country = COUNTRIES.find((c) => c.iso2 === selected);
		dialCode = country?.dialCode ?? '';
	});
</script>

<div class="relative flex shrink-0 items-center">
	<HugeiconsIcon
		icon={GlobalIcon}
		strokeWidth={2}
		class="text-muted-foreground pointer-events-none absolute left-2.5 size-4"
	/>
	<select
		value={selected ?? ''}
		onchange={handleChange}
		aria-label="Country code"
		{disabled}
		class={cn(
			'border-input bg-input/30 focus-visible:ring-ring/50 dark:bg-input/30 focus-visible:border-ring h-9 w-fit appearance-none rounded-l-md rounded-r-none border py-1 pr-8 pl-8 text-sm transition-[color,box-shadow] focus-visible:ring-[3px] outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>option]:bg-background',
			disabled ? 'cursor-not-allowed opacity-50' : ''
		)}
	>
		{#each ordered as country (country.id)}
			<option value={country.iso2}>
				{country.name} (+{country.dialCode})
			</option>
		{/each}
	</select>
	<HugeiconsIcon
		icon={UnfoldMoreIcon}
		strokeWidth={2}
		class="text-muted-foreground pointer-events-none absolute right-2.5 size-4"
	/>
</div>