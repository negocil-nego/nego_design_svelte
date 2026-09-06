import { page, userEvent } from 'vitest/browser';
import { afterEach, describe, expect, it } from 'vitest';
import { get } from 'svelte/store';
import { render } from 'vitest-browser-svelte';
import { locale } from '../../../src/lib/i18n';
import LanguageSwitcher from '../../../src/lib/components/ui/language-switcher/language-switcher.svelte';

afterEach(() => {
	locale.set('en');
});

describe('LanguageSwitcher', () => {
	it('renders a trigger button to change the language', () => {
		render(LanguageSwitcher);

		const trigger = page.getByRole('button', { name: 'Change language' });
		expect(trigger).toBeDefined();
	});

	it('opens the menu showing the PT and EN options', async () => {
		render(LanguageSwitcher);

		await userEvent.click(page.getByRole('button', { name: 'Change language' }));

		await expect.element(page.getByRole('menu')).toBeVisible();
		await expect.element(page.getByRole('menuitemradio', { name: 'Portuguese' })).toBeVisible();
		await expect.element(page.getByRole('menuitemradio', { name: 'English' })).toBeVisible();
	});

	it('selecting PT updates the locale store', async () => {
		render(LanguageSwitcher);
		await userEvent.click(page.getByRole('button', { name: 'Change language' }));
		await expect.element(page.getByRole('menu')).toBeVisible();

		await userEvent.click(page.getByRole('menuitemradio', { name: 'Portuguese' }));

		expect(get(locale)).toBe('pt');
		await expect.element(page.getByRole('menuitemradio', { name: 'Português' })).toHaveAttribute(
			'aria-checked',
			'true'
		);
	});

	it('selecting EN after PT updates the locale store back to english', async () => {
		render(LanguageSwitcher);
		await userEvent.click(page.getByRole('button', { name: 'Change language' }));
		await expect.element(page.getByRole('menu')).toBeVisible();

		await userEvent.click(page.getByRole('menuitemradio', { name: 'Portuguese' }));
		expect(get(locale)).toBe('pt');

		await userEvent.click(page.getByRole('menuitemradio', { name: 'Inglês' }));
		expect(get(locale)).toBe('en');
		await expect.element(page.getByRole('menuitemradio', { name: 'English' })).toHaveAttribute(
			'aria-checked',
			'true'
		);
	});
});