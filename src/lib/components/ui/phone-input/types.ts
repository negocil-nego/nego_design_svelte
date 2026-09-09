export type CountryCode = string;

export type Country = {
	id: string;
	iso2: string;
	name: string;
	dialCode: string;
};

export type DetailedValue = {
	country: Country | null;
	code: string;
	number: string;
};

export type TelInputOptions = {
	spaces?: boolean;
	autoPlaceholder?: boolean;
};

export type PhoneInputProps = {
	country?: CountryCode | null;
	defaultCountry?: CountryCode | null;
	name?: string;
	placeholder?: string;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
	class?: string;
	value?: string;
	valid?: boolean;
	detailedValue?: Partial<DetailedValue> | null;
	options?: TelInputOptions;
	order?: ((a: Country, b: Country) => number) | undefined;
};