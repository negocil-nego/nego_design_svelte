import { page, userEvent } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import PopoverFixture from '../fixtures/Popover.svelte';

const contentSlot = '[data-slot="popover-content"]';

function contentEl(): HTMLElement | null {
	return document.querySelector(contentSlot);
}

describe('Popover', () => {
	it('is closed by default and opens when the trigger is clicked', async () => {
		render(PopoverFixture);

		expect(contentEl()).toBeNull();

		await userEvent.click(page.getByRole('button', { name: 'Open' }));
		await expect.element(page.getByText('Popover title')).toBeVisible();

		const content = contentEl();
		expect(content).not.toBeNull();
		expect(content!.getAttribute('data-state')).toBe('open');
		expect(content!.classList.contains('absolute')).toBe(true);
	});

	it('toggles closed when the trigger is clicked again', async () => {
		render(PopoverFixture);
		await userEvent.click(page.getByRole('button', { name: 'Open' }));
		await expect.element(page.getByText('Popover title')).toBeVisible();

		await userEvent.click(page.getByRole('button', { name: 'Open' }));

		expect(contentEl()).toBeNull();
	});

	it('renders title and description inside the content', async () => {
		render(PopoverFixture, { open: true });

		await expect.element(page.getByText('Popover title')).toBeVisible();
		await expect.element(page.getByText('Popover description')).toBeVisible();
		expect(document.querySelector('[data-slot="popover-header"]')).not.toBeNull();
		expect(document.querySelector('[data-slot="popover-title"]')).not.toBeNull();
		expect(document.querySelector('[data-slot="popover-description"]')).not.toBeNull();
	});

	it('closes when the Close button is clicked', async () => {
		render(PopoverFixture, { open: true });
		await expect.element(page.getByText('Popover title')).toBeVisible();

		await userEvent.click(page.getByRole('button', { name: 'Close' }));

		expect(contentEl()).toBeNull();
	});

	it('renders content immediately when controlled with open={true}', () => {
		render(PopoverFixture, { open: true });

		const content = contentEl();
		expect(content).not.toBeNull();
		expect(content!.getAttribute('data-state')).toBe('open');
	});
});