<script lang="ts">
	import type { Country } from './types';

	interface Props {
		country?: Country | null;
	}

	let { country = null }: Props = $props();
	void country;
</script>

<span class="bg-foreground/20 flex h-4 w-6 shrink-0 overflow-clip rounded-sm">
</span>