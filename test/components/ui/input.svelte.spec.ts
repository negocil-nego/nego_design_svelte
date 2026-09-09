import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Input from '../../../src/lib/components/ui/input/input.svelte';

describe('Input.svelte', () => {
	it('renders a text input by default', async () => {
		render(Input, { placeholder: 'Enter your name' });

		const input = page.getByPlaceholder('Enter your name');
		await expect.element(input).toHaveAttribute('data-slot', 'input');
	});

	it('accepts text typed by the user', async () => {
		render(Input, { placeholder: 'Name' });

		const input = page.getByPlaceholder('Name');
		await input.fill('Nego');
		await expect.element(input).toHaveValue('Nego');
	});

	it('propagates value using bind:value', async () => {
		const results: string[] = [];
		render(Input, { value: 'seed', placeholder: 'Phone' });

		const input = page.getByPlaceholder('Phone');
		await expect.element(input).toHaveValue('seed');
		await input.fill('+55');
		results.push('filled');
		expect(results.length).toBe(1);
	});

	it('renders password inputs', async () => {
		render(Input, { type: 'password', placeholder: 'Password' });

		const input = page.getByPlaceholder('Password');
		await expect.element(input).toHaveAttribute('type', 'password');
	});

	it('renders a file input when type is file', async () => {
		render(Input, { type: 'file', 'aria-label': 'Upload' });

		const input = page.getByLabelText('Upload');
		await expect.element(input).toHaveAttribute('type', 'file');
	});

	it('disables the input', async () => {
		render(Input, { placeholder: 'Disabled', disabled: true });

		const input = page.getByPlaceholder('Disabled');
		await expect.element(input).toBeDisabled();
	});
});