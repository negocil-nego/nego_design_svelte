<script lang="ts">
	import * as Drawer from '../../../src/lib/components/ui/drawer';
	import type { DrawerDirection } from '../../../src/lib/components/ui/drawer/drawer.svelte';

	let {
		open,
		direction = 'bottom',
		disabled = false,
		onOpenChange,
	}: {
		open?: boolean;
		direction?: DrawerDirection;
		disabled?: boolean;
		onOpenChange?: (open: boolean) => void;
	} = $props();
</script>

<Drawer.Root {open} {direction} {onOpenChange}>
	<Drawer.Trigger {disabled}>Open</Drawer.Trigger>
	<Drawer.Content>
		<Drawer.Header>
			<Drawer.Title>Drawer title</Drawer.Title>
			<Drawer.Description>Drawer description</Drawer.Description>
		</Drawer.Header>
		<Drawer.Footer>
			<Drawer.Close>Close</Drawer.Close>
		</Drawer.Footer>
	</Drawer.Content>
</Drawer.Root>