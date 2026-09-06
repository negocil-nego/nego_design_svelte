import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import PhoneInputFixture from '../fixtures/PhoneInput.svelte';

function countrySelect(): HTMLSelectElement {
	return document.querySelector('select[aria-label="Country code"]') as HTMLSelectElement;
}

function boundValue(): string {
	return document.querySelector('[data-testid="bound-value"]')?.textContent ?? '';
}

function boundCountry(): string {
	return document.querySelector('[data-testid="bound-country"]')?.textContent ?? '';
}

function boundDialCode(): string {
	return document.querySelector('[data-testid="bound-dialcode"]')?.textContent ?? '';
}

function boundValid(): string {
	return document.querySelector('[data-testid="bound-valid"]')?.textContent ?? '';
}

describe('PhoneInput', () => {
	it('renders a country selector and a tel input', () => {
		render(PhoneInputFixture, {});

		expect(countrySelect()).toBeTruthy();
		expect(document.querySelector('input[type="tel"]')).toBeTruthy();
	});

	it('defaults to the provided country', async () => {
		render(PhoneInputFixture, { country: 'pt' });

		await expect.poll(() => countrySelect().value).toBe('pt');
		const option = document.querySelector('select option[value="pt"]') as HTMLOptionElement;
		expect(option?.textContent).toContain('Portugal');
		await expect.poll(() => boundDialCode()).toBe('351');
	});

	it('formats typed digits with the default country dial code', async () => {
		render(PhoneInputFixture, {});

		await expect.poll(() => countrySelect().value).toBe('ao');
		await page.getByPlaceholder('Phone number').fill('923456789');

		await expect.poll(() => boundValue()).toBe('+244 923 456 789');
		await expect.element(page.getByPlaceholder('Phone number')).toHaveValue('923456789');
	});

	it('switches country and reformats the typed number', async () => {
		render(PhoneInputFixture, {});

		await expect.poll(() => countrySelect().value).toBe('ao');
		const select = countrySelect();
		select.value = 'gb';
		select.dispatchEvent(new Event('change', { bubbles: true }));

		await expect.poll(() => boundCountry()).toBe('gb');
		await expect.poll(() => boundDialCode()).toBe('44');

		await page.getByPlaceholder('Phone number').fill('7700900123');
		await expect.poll(() => boundValue()).toBe('+44 770 090 012 3');
	});

	it('marks short numbers as invalid', async () => {
		render(PhoneInputFixture, {});

		await page.getByPlaceholder('Phone number').fill('123');

		await expect.poll(() => boundValid()).toBe('false');
		await expect.element(page.getByPlaceholder('Phone number')).toHaveAttribute(
			'aria-invalid',
			'true'
		);
	});
});