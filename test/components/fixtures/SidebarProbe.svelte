<script lang="ts">
	import { useSidebar } from '$lib/components/ui/sidebar';

	const sidebar = useSidebar();
</script>

<span data-testid="sidebar-open">{String(sidebar.isOpen)}</span>
<span data-testid="sidebar-state">{sidebar.state}</span>