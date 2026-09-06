import { userEvent } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import InputOtp from '../fixtures/InputOtp.svelte';

function slots(): HTMLInputElement[] {
	return Array.from(
		document.querySelectorAll('[data-slot="input-otp-slot"]')
	) as HTMLInputElement[];
}

function hiddenInput(): HTMLInputElement | null {
	return document.querySelector('[data-slot="input-otp-input"]') as HTMLInputElement | null;
}

describe('InputOTP.svelte', () => {
	it('renders a slot input per configured length and a hidden value input', () => {
		render(InputOtp, { length: 4 });

		expect(slots()).toHaveLength(4);
		expect(slots()[0].getAttribute('maxlength')).toBe('1');
		expect(hiddenInput()?.value).toBe('');
	});

	it('renders the separator between groups', () => {
		render(InputOtp, { length: 6 });

		const separator = document.querySelector('[data-slot="input-otp-separator"]');
		expect(separator).not.toBeNull();
		expect(separator?.getAttribute('role')).toBe('separator');
	});

	it('fills every slot and the hidden input when typing', async () => {
		render(InputOtp, { length: 6 });

		const first = slots()[0];
		await userEvent.click(first);
		await userEvent.keyboard('123456');

		expect(slots().map((input) => input.value)).toEqual([
			'1',
			'2',
			'3',
			'4',
			'5',
			'6'
		]);
		expect(hiddenInput()?.value).toBe('123456');
	});

	it('shows a pre-bound value across the slots', () => {
		render(InputOtp, { length: 6, value: '42' });

		expect(slots().map((input) => input.value)).toEqual([
			'4',
			'2',
			'',
			'',
			'',
			''
		]);
		expect(hiddenInput()?.value).toBe('42');
	});

	it('applies the placeholder to every slot', () => {
		render(InputOtp, { length: 4, placeholder: '•' });

		expect(slots().every((input) => input.placeholder === '•')).toBe(true);
	});

	it('clears the previous character with backspace', async () => {
		render(InputOtp, { length: 6 });

		await userEvent.click(slots()[0]);
		await userEvent.keyboard('1');
		await userEvent.keyboard('{Backspace}');

		expect(hiddenInput()?.value).toBe('');
		expect(slots()[0].value).toBe('');
	});

	it('keeps the hidden value input in sync with typed characters', async () => {
		render(InputOtp, { length: 6 });

		await userEvent.click(slots()[0]);
		await userEvent.keyboard('12');

		expect(slots().map((input) => input.value)).toEqual([
			'1',
			'2',
			'',
			'',
			'',
			''
		]);
		expect(hiddenInput()?.value).toBe('12');
	});

	it('disables the slots and dims the container when disabled', () => {
		render(InputOtp, { length: 4, disabled: true });

		expect(slots().every((input) => input.disabled)).toBe(true);
		expect(hiddenInput()?.disabled).toBe(true);
		const root = document.querySelector('[data-slot="input-otp"]') as HTMLElement;
		expect(root.className).toContain('has-disabled:opacity-50');
	});
});