<script lang="ts">
	import * as Popover from '../../../src/lib/components/ui/popover';

	let { open, defaultOpen = false, onOpenChange }: {
		open?: boolean;
		defaultOpen?: boolean;
		onOpenChange?: (open: boolean) => void;
	} = $props();
</script>

<Popover.Root {open} {defaultOpen} {onOpenChange}>
	<Popover.Trigger>Open</Popover.Trigger>
	<Popover.Content>
		<Popover.Header>
			<Popover.Title>Popover title</Popover.Title>
			<Popover.Description>Popover description</Popover.Description>
		</Popover.Header>
		<Popover.Close>Close</Popover.Close>
	</Popover.Content>
</Popover.Root>