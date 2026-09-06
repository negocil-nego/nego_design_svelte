<script lang="ts">
	import { Root, Star } from '$lib/components/ui/star-rating';

	let {
		count = 5,
		value = 0,
		onValueChange,
		disabled = false,
		readOnly = false,
	}: {
		count?: number;
		value?: number;
		onValueChange?: (value: number) => void;
		disabled?: boolean;
		readOnly?: boolean;
	} = $props();
</script>

<Root {count} {value} {onValueChange} {disabled} {readOnly}>
	{#each Array.from({ length: count }, (_, i) => i) as i (i)}
		<Star index={i} />
	{/each}
</Root>