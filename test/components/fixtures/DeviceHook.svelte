<script lang="ts">
	import { useDevice } from '$lib/hooks/responsive.svelte';

	const device = useDevice();
</script>

<span data-testid="device-mobile">{String(device.isMobile)}</span>