<script lang="ts">
	import { Root, List, Trigger, Content } from '../../../src/lib/components/ui/underline-tabs';

	let {
		defaultValue = '',
		value = undefined,
		orientation = 'horizontal',
		onValueChange
	}: {
		defaultValue?: string;
		value?: string;
		orientation?: 'horizontal' | 'vertical';
		onValueChange?: (value: string) => void;
	} = $props();
</script>

<Root {defaultValue} {value} {orientation} {onValueChange}>
	<List>
		<Trigger value="one">One</Trigger>
		<Trigger value="two">Two</Trigger>
	</List>
	<Content value="one">Panel One</Content>
	<Content value="two">Panel Two</Content>
</Root>