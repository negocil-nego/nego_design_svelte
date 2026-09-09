import type { Country, CountryCode } from './types';

export function hasFlag(code: CountryCode): boolean {
	return false;
}

export async function getFlag(country: Country | null): Promise<string | null> {
	return null;
}