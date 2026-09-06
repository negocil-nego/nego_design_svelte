import { userEvent } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { createRawSnippet } from 'svelte';
import Checkbox from '../../../src/lib/components/ui/checkbox/checkbox.svelte';

function checkbox(): HTMLButtonElement | null {
	return document.querySelector('[data-slot="checkbox"]') as HTMLButtonElement | null;
}

function nativeInput(): HTMLInputElement | null {
	return document.querySelector('input[type="checkbox"]') as HTMLInputElement | null;
}

describe('Checkbox.svelte', () => {
	it('renders a checkbox button unchecked by default', () => {
		render(Checkbox);

		const el = checkbox();
		expect(el).not.toBeNull();
		expect(el?.getAttribute('role')).toBe('checkbox');
		expect(el?.getAttribute('data-slot')).toBe('checkbox');
		expect(el?.getAttribute('data-state')).toBe('unchecked');
		expect(el?.getAttribute('aria-checked')).toBe('false');
	});

	it('checks on click', async () => {
		render(Checkbox);

		const el = checkbox()!;
		await userEvent.click(el);

		expect(el.getAttribute('aria-checked')).toBe('true');
		expect(el.getAttribute('data-state')).toBe('checked');
	});

	it('toggles back to unchecked on a second click', async () => {
		render(Checkbox);

		const el = checkbox()!;
		await userEvent.click(el);
		await userEvent.click(el);

		expect(el.getAttribute('aria-checked')).toBe('false');
		expect(el.getAttribute('data-state')).toBe('unchecked');
	});

	it('renders the indeterminate state as aria-checked mixed and clears it on click', async () => {
		render(Checkbox, { indeterminate: true });

		const el = checkbox()!;
		expect(el.getAttribute('aria-checked')).toBe('mixed');
		expect(el.getAttribute('data-state')).toBe('indeterminate');

		await userEvent.click(el);

		expect(el.getAttribute('aria-checked')).toBe('true');
		expect(el.getAttribute('data-state')).toBe('checked');
	});

	it('does not toggle when disabled', () => {
		render(Checkbox, { disabled: true });

		const el = checkbox()!;
		el.click();

		expect(el.getAttribute('aria-checked')).toBe('false');
		expect(el.getAttribute('data-state')).toBe('unchecked');
	});

	it('renders a hidden native input with the name and keeps it in sync', async () => {
		render(Checkbox, { name: 'agree', value: 'yes' });

		const input = nativeInput();
		expect(input?.getAttribute('name')).toBe('agree');
		expect(input?.getAttribute('value')).toBe('yes');
		expect(input?.checked).toBe(false);
		expect(input?.getAttribute('aria-hidden')).toBe('true');

		await userEvent.click(checkbox()!);

		expect(input?.checked).toBe(true);
	});

	it('renders the provided children snippet instead of the default indicator', () => {
		const children = createRawSnippet(() => ({
			render: () => '<span data-testid="custom-indicator">X</span>'
		}));
		render(Checkbox, { children });

		expect(document.querySelector('[data-testid="custom-indicator"]')?.textContent).toBe('X');
		expect(document.querySelector('[data-slot="checkbox-indicator"]')).toBeNull();
	});

	it('fires onCheckedChange with the new value', async () => {
		const calls: boolean[] = [];
		render(Checkbox, { onCheckedChange: (checked) => calls.push(checked) });

		await userEvent.click(checkbox()!);

		expect(calls).toEqual([true]);
	});
});