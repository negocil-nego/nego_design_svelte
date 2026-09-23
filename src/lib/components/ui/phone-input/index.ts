import PhoneInput, { defaultOptions } from './phone-input.svelte';

export { PhoneInput, defaultOptions };

export type {
	PhoneInputProps,
	Country,
	CountryCode,
	DetailedValue,
	TelInputOptions
} from './types';

export { COUNTRIES } from '$lib/components/ui/image/flag-map';