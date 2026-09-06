<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar';
	import SidebarProbe from './SidebarProbe.svelte';

	let {
		defaultOpen = true,
		onOpenChange,
		collapsible = 'none',
		side = 'left',
		title = 'Sidebar',
		triggerLabel = 'Toggle Sidebar'
	}: {
		defaultOpen?: boolean;
		onOpenChange?: (open: boolean) => void;
		collapsible?: 'icon' | 'offcanvas' | 'none';
		side?: 'left' | 'right';
		title?: string;
		triggerLabel?: string;
	} = $props();
</script>

<Sidebar.Provider {defaultOpen} {onOpenChange} {collapsible} {side}>
	<Sidebar.Root {collapsible} {side}>
		<Sidebar.Trigger aria-label={triggerLabel} />
		<Sidebar.Header>
			<span data-testid="sidebar-title">{title}</span>
		</Sidebar.Header>
		<Sidebar.Content>
			<Sidebar.Menu>
				<Sidebar.MenuItem>
					<Sidebar.MenuButton isActive>Dashboard</Sidebar.MenuButton>
				</Sidebar.MenuItem>
				<Sidebar.MenuItem>
					<Sidebar.MenuButton>Settings</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			</Sidebar.Menu>
			<Sidebar.Separator />
		</Sidebar.Content>
		<Sidebar.Footer>
			<span>footer content</span>
		</Sidebar.Footer>
	</Sidebar.Root>
	<SidebarProbe />
</Sidebar.Provider>