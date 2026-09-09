<script lang="ts">
	import { Root, Item, Previous, Next } from '../../../src/lib/components/ui/carousel';
	import type { CarouselAPI } from '../../../src/lib/components/ui/carousel';

	let {
		orientation = 'horizontal',
		setApi,
		opts = {},
		plugins = []
	}: {
		orientation?: 'horizontal' | 'vertical';
		setApi?: (api?: CarouselAPI) => void;
		opts?: Record<string, unknown>;
		plugins?: { delay?: number; stopOnInteraction?: boolean; loop?: boolean }[];
	} = $props();
</script>

<Root {orientation} {setApi} {opts} {plugins}>
	{#each ['Slide 1', 'Slide 2', 'Slide 3'] as label (label)}
		<Item><span>{label}</span></Item>
	{/each}
	<Previous />
	<Next />
</Root>