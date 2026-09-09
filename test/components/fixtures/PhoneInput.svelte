<script lang="ts">
	import { PhoneInput } from '$lib/components/ui/phone-input';
	import type { DetailedValue, TelInputOptions } from '$lib/components/ui/phone-input';

	let {
		country = $bindable('ao'),
		value = $bindable(''),
		valid = $bindable(true),
		detailedValue = $bindable(null),
		placeholder = 'Phone number',
		options
	}: {
		country?: string | null;
		value?: string;
		valid?: boolean;
		detailedValue?: Partial<DetailedValue> | null;
		placeholder?: string;
		options?: TelInputOptions;
	} = $props();
</script>

<PhoneInput bind:country bind:value bind:valid bind:detailedValue {placeholder} options={options} />
<span data-testid="bound-value">{value}</span>
<span data-testid="bound-country">{country}</span>
<span data-testid="bound-dialcode">{detailedValue?.code ?? ''}</span>
<span data-testid="bound-valid">{String(valid)}</span>