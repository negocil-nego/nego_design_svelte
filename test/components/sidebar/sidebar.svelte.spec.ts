import { page, userEvent } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import SidebarFixture from '../fixtures/Sidebar.svelte';

function triggerButton() {
	return page.getByRole('button', { name: 'Toggle Sidebar' });
}

function openProbe(): string {
	return document.querySelector('[data-testid="sidebar-open"]')?.textContent ?? '';
}

describe('Sidebar', () => {
	it('renders provider, root, header, content, menu and footer slots', () => {
		render(SidebarFixture, {});

		expect(document.querySelector('[data-slot="sidebar-wrapper"]')).toBeTruthy();
		expect(document.querySelector('[data-slot="sidebar"]')).toBeTruthy();
		expect(document.querySelector('[data-slot="sidebar-header"]')).toBeTruthy();
		expect(document.querySelector('[data-slot="sidebar-content"]')).toBeTruthy();
		expect(document.querySelector('[data-slot="sidebar-menu"]')).toBeTruthy();
		expect(document.querySelector('[data-slot="sidebar-menu-item"]')).toBeTruthy();
		expect(document.querySelector('[data-slot="sidebar-separator"]')).toBeTruthy();
		expect(document.querySelector('[data-slot="sidebar-footer"]')).toBeTruthy();
	});

	it('renders title, trigger, menu buttons and footer content', async () => {
		render(SidebarFixture, { title: 'My App' });

		expect(document.querySelector('[data-testid="sidebar-title"]')?.textContent).toBe('My App');
		await expect.element(triggerButton()).toBeVisible();
		await expect.element(page.getByText('Dashboard')).toBeVisible();
		await expect.element(page.getByText('Settings')).toBeVisible();
		expect(document.body.textContent).toContain('footer content');
	});

	it('marks the active menu button', () => {
		render(SidebarFixture, {});

		const active = document.querySelectorAll(
			'[data-slot="sidebar-menu-button"][data-active="true"]'
		);
		expect(active).toHaveLength(1);
		expect(active[0].textContent).toContain('Dashboard');
		expect(document.querySelector('[data-slot="sidebar-menu-button"][data-active="true"]')).not.toBeNull();
	});

	it('toggles open state when the trigger is clicked', async () => {
		render(SidebarFixture, { defaultOpen: true });

		const before = openProbe();
		await userEvent.click(triggerButton());
		await expect.poll(() => openProbe()).not.toBe(before);
		const after = openProbe();
		await userEvent.click(triggerButton());
		await expect.poll(() => openProbe()).toBe(before);
		expect(after).not.toBe(before);
	});

	it('toggles via the ctrl/cmd+b keyboard shortcut', async () => {
		render(SidebarFixture, { defaultOpen: false });

		const before = openProbe();
		window.dispatchEvent(new KeyboardEvent('keydown', { key: 'b', ctrlKey: true, bubbles: true }));
		await expect.poll(() => openProbe()).not.toBe(before);
	});
});