<script lang="ts">
	import { Root, Group, Slot, Separator } from '../../../src/lib/components/ui/input-otp';

	let {
		value = '',
		placeholder = '',
		disabled = false,
		length = 6,
		onValueChange
	}: {
		value?: string;
		placeholder?: string;
		disabled?: boolean;
		length?: number;
		onValueChange?: (value: string) => void;
	} = $props();
</script>

<Root {value} {placeholder} {disabled} {length} {onValueChange}>
	{#snippet children({ cells })}
		<Group>
			{#each cells.slice(0, 3) as cell, i (i)}
				<Slot {cell} />
			{/each}
			<Separator />
			{#each cells.slice(3) as cell, i (i)}
				<Slot {cell} />
			{/each}
		</Group>
	{/snippet}
</Root>