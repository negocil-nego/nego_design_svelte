import { page, userEvent } from 'vitest/browser';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import { setMode } from '../../../src/lib/theme.svelte';
import ThemeSwitch from '../../../src/lib/components/ui/theme-switch/theme-switch.svelte';

const STORAGE_KEY = 'negodesign-theme';

function resetTheme() {
	localStorage.clear();
	document.documentElement.classList.remove('dark');
	document.documentElement.style.colorScheme = '';
	setMode('light');
}

describe('ThemeSwitch', () => {
	beforeEach(() => {
		resetTheme();
	});

	afterEach(() => {
		resetTheme();
	});

	it('renders a button to toggle the theme', () => {
		render(ThemeSwitch);

		const button = page.getByRole('button', { name: 'Toggle theme' });
		expect(button).toBeDefined();
	});

	it('applies the dark theme when clicked', async () => {
		render(ThemeSwitch);

		await userEvent.click(page.getByRole('button', { name: 'Toggle theme' }));

		expect(document.documentElement.classList.contains('dark')).toBe(true);
		expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
	});

	it('restores the light theme after two clicks', async () => {
		render(ThemeSwitch);

		const button = page.getByRole('button', { name: 'Toggle theme' });
		await userEvent.click(button);
		expect(document.documentElement.classList.contains('dark')).toBe(true);

		await userEvent.click(button);

		expect(document.documentElement.classList.contains('dark')).toBe(false);
		expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
	});
});