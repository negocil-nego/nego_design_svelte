<script lang="ts">
	import { Root, Fallback, Image, Badge } from '../../../src/lib/components/ui/avatar';

	let {
		size = 'default',
		src,
		alt = '',
		fallbackText = 'AB',
		badgeText = '5'
	}: {
		size?: 'default' | 'sm' | 'lg';
		src?: string;
		alt?: string;
		fallbackText?: string;
		badgeText?: string;
	} = $props();
</script>

<Root {size} {src}>
	<Fallback>{fallbackText}</Fallback>
	<Image {src} {alt} />
	<Badge>{badgeText}</Badge>
</Root>