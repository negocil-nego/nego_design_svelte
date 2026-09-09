import { page, userEvent } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import DrawerFixture from '../fixtures/Drawer.svelte';

const contentSlot = '[data-slot="drawer-content"]';

function contentEl(): HTMLElement | null {
	return document.querySelector(contentSlot);
}

describe('Drawer', () => {
	it('is closed by default and opens when the trigger is clicked', async () => {
		render(DrawerFixture);

		expect(contentEl()).toBeNull();

		await userEvent.click(page.getByRole('button', { name: 'Open' }));
		await expect.element(page.getByText('Drawer title')).toBeVisible();

		const content = contentEl();
		expect(content).not.toBeNull();
		expect(content!.getAttribute('data-state')).toBe('open');
		expect(document.querySelector('[data-slot="drawer-overlay"]')).not.toBeNull();
	});

	it('renders header, title, description and footer inside the content', async () => {
		render(DrawerFixture, { open: true });

		await expect.element(page.getByText('Drawer title')).toBeVisible();
		expect(document.querySelector('[data-slot="drawer-header"]')).not.toBeNull();
		expect(document.querySelector('[data-slot="drawer-title"]')).not.toBeNull();
		expect(document.querySelector('[data-slot="drawer-description"]')).not.toBeNull();
		expect(document.querySelector('[data-slot="drawer-footer"]')).not.toBeNull();
	});

	it('closes when the Close button is clicked', async () => {
		render(DrawerFixture, { open: true });
		await expect.element(page.getByText('Drawer title')).toBeVisible();

		await userEvent.click(page.getByRole('button', { name: 'Close' }));

		expect(contentEl()).toBeNull();
		expect(document.querySelector('[data-slot="drawer-overlay"]')).toBeNull();
	});

	it('renders content immediately when controlled with open={true}', () => {
		render(DrawerFixture, { open: true });

		const content = contentEl();
		expect(content).not.toBeNull();
		expect(content!.getAttribute('data-state')).toBe('open');
	});

	it('keeps content mounted with the opposite direction', async () => {
		render(DrawerFixture, { open: true, direction: 'left' });

		const content = contentEl();
		expect(content).not.toBeNull();
		expect(content!.getAttribute('data-vaul-drawer-direction')).toBe('left');
	});

	it('does not open when the trigger is disabled', async () => {
		render(DrawerFixture, { disabled: true });

		const trigger = document.querySelector('[data-slot="drawer-trigger"]') as HTMLElement;
		expect(trigger).not.toBeNull();
		expect(trigger.getAttribute('disabled')).not.toBeNull();

		trigger.click();

		expect(contentEl()).toBeNull();
	});
});