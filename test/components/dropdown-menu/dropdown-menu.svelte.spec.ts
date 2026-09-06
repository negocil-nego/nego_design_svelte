import { page, userEvent } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import DropdownMenuFixture from '../fixtures/DropdownMenu.svelte';

const contentSlot = '[data-slot="dropdown-menu-content"]';

function menuEl(): HTMLElement | null {
	return document.querySelector(contentSlot);
}

describe('DropdownMenu', () => {
	it('is closed by default and opens a role="menu" on trigger click', async () => {
		render(DropdownMenuFixture);

		expect(menuEl()).toBeNull();

		await userEvent.click(page.getByRole('button', { name: 'Open menu' }));
		await expect.element(page.getByRole('menu')).toBeVisible();

		const content = menuEl();
		expect(content).not.toBeNull();
		expect(content!.getAttribute('data-state')).toBe('open');
	});

	it('shows its items once open', async () => {
		render(DropdownMenuFixture, { open: true });

		await expect.element(page.getByRole('menuitem', { name: 'Profile' })).toBeVisible();
		await expect.element(page.getByRole('menuitem', { name: 'Billing' })).toBeVisible();
	});

	it('closes when an item is selected and fires onSelect', async () => {
		const calls: string[] = [];
		render(DropdownMenuFixture, { open: true, onSelect: (v: string) => calls.push(v) });

		await userEvent.click(page.getByRole('menuitem', { name: 'Profile' }));

		expect(calls).toEqual(['profile']);
		expect(menuEl()).toBeNull();
	});

	it('renders label, checkbox group, radio group and separator parts', async () => {
		render(DropdownMenuFixture, { open: true });

		await expect.element(page.getByText('My Account')).toBeVisible();
		await expect.element(page.getByRole('menuitemcheckbox')).toBeVisible();
		expect(document.querySelector('[data-slot="dropdown-menu-radio-group"]')).not.toBeNull();
		expect(document.querySelector('[data-slot="dropdown-menu-checkbox-group"]')).not.toBeNull();
		expect(document.querySelector('[role="separator"]')).not.toBeNull();
		expect(document.querySelector('[data-slot="dropdown-menu-label"]')).not.toBeNull();
	});

	it('toggles the checkbox item and fires onCheckedChange', async () => {
		const calls: boolean[] = [];
		render(DropdownMenuFixture, { open: true, onCheckedChange: (v: boolean) => calls.push(v) });

		const checkbox = page.getByRole('menuitemcheckbox', { name: 'Show status' });
		await expect.element(checkbox).toHaveAttribute('aria-checked', 'false');

		await userEvent.click(checkbox);

		await expect.element(checkbox).toHaveAttribute('aria-checked', 'true');
		expect(calls).toEqual([true]);
	});

	it('updates the radio group value and fires onValueChange', async () => {
		const calls: string[] = [];
		render(DropdownMenuFixture, { open: true, onRadioValueChange: (v: string) => calls.push(v) });

		const pt = page.getByRole('menuitemradio', { name: 'PT' });
		const en = page.getByRole('menuitemradio', { name: 'EN' });

		await userEvent.click(pt);
		await expect.element(pt).toHaveAttribute('aria-checked', 'true');
		expect(calls).toEqual(['pt']);

		await userEvent.click(en);
		await expect.element(en).toHaveAttribute('aria-checked', 'true');
		await expect.element(pt).toHaveAttribute('aria-checked', 'false');
		expect(calls).toEqual(['pt', 'en']);
	});

	it('renders the menu immediately when controlled with open={true}', () => {
		render(DropdownMenuFixture, { open: true });

		const content = menuEl();
		expect(content).not.toBeNull();
		expect(content!.getAttribute('data-state')).toBe('open');
	});

	it('respects defaultOpen', async () => {
		render(DropdownMenuFixture, { defaultOpen: true });

		await expect.element(page.getByRole('menu')).toBeVisible();
		expect(menuEl()).not.toBeNull();
	});
});