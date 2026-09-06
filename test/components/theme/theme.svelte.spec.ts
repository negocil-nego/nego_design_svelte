import { afterEach, beforeEach, describe, expect, it } from 'vitest';
import { applyTheme, setMode, theme, toggleMode } from '../../../src/lib/theme.svelte';

const STORAGE_KEY = 'negodesign-theme';

function resetTheme() {
	applyTheme('light');
	localStorage.clear();
}

describe('theme module', () => {
	beforeEach(() => {
		resetTheme();
	});

	afterEach(() => {
		resetTheme();
	});

	it('applyTheme("dark") sets the dark class, color scheme and storage', () => {
		applyTheme('dark');

		expect(document.documentElement.classList.contains('dark')).toBe(true);
		expect(document.documentElement.style.colorScheme).toBe('dark');
		expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
		expect(theme.current).toBe('dark');
	});

	it('applyTheme("light") removes the dark class and stores light', () => {
		applyTheme('dark');
		applyTheme('light');

		expect(document.documentElement.classList.contains('dark')).toBe(false);
		expect(document.documentElement.style.colorScheme).toBe('light');
		expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
		expect(theme.current).toBe('light');
	});

	it('setMode applies the requested theme', () => {
		setMode('dark');

		expect(theme.current).toBe('dark');
		expect(document.documentElement.classList.contains('dark')).toBe(true);
		expect(document.documentElement.style.colorScheme).toBe('dark');
		expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');
	});

	it('toggleMode flips between dark and light', () => {
		applyTheme('light');
		toggleMode();

		expect(theme.current).toBe('dark');
		expect(document.documentElement.classList.contains('dark')).toBe(true);
		expect(document.documentElement.style.colorScheme).toBe('dark');
		expect(localStorage.getItem(STORAGE_KEY)).toBe('dark');

		toggleMode();

		expect(theme.current).toBe('light');
		expect(document.documentElement.classList.contains('dark')).toBe(false);
		expect(localStorage.getItem(STORAGE_KEY)).toBe('light');
	});
});