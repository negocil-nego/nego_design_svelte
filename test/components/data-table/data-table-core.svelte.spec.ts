import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import DataTableCoreFixture from '../fixtures/DataTableCoreFixture.svelte';

function bodyRows(): HTMLElement[] {
	return Array.from(document.querySelectorAll('tbody [data-slot="table-row"]')) as HTMLElement[];
}

function checkboxes(): HTMLElement[] {
	return Array.from(document.querySelectorAll('[role="checkbox"]')) as HTMLElement[];
}

describe('DataTableCore', () => {
	it('renders a header per configured column', async () => {
		render(DataTableCoreFixture, {});

		await expect.element(page.getByText('Name')).toBeVisible();
		await expect.element(page.getByText('Email')).toBeVisible();
		await expect.element(page.getByText('Status')).toBeVisible();
	});

	it('renders a body row per item with resolved cells', () => {
		render(DataTableCoreFixture, {});

		const rows = bodyRows();
		expect(rows).toHaveLength(4);
		expect(rows[0].textContent).toContain('Alice');
		expect(rows[0].textContent).toContain('alice@example.com');
		expect(rows[1].textContent).toContain('Bob');
		expect(rows[3].textContent).toContain('Dave');
		expect(rows[0].querySelectorAll('[data-slot="table-cell"]')).toHaveLength(5);
	});

	it('renders badges for matched statuses and a fallback for unmatched ones', () => {
		render(DataTableCoreFixture, {});

		const badges = Array.from(document.querySelectorAll('[data-slot="badge"]')) as HTMLElement[];
		expect(badges).toHaveLength(3);
		expect(badges[0].textContent).toContain('Active');
		expect(badges[0].className).toContain('bg-green-500');
		expect(badges[1].textContent).toContain('pending');
		expect(badges[2].textContent).toContain('Active');
		expect(bodyRows()[3].textContent).toContain('inactive');
	});

	it('toggles row selection from the row checkbox', async () => {
		render(DataTableCoreFixture, {});
		expect(checkboxes()).toHaveLength(5);

		checkboxes()[1].click();

		await expect.poll(() => checkboxes()[1].getAttribute('data-state')).toBe('checked');
		expect(bodyRows()[0].getAttribute('data-state')).toBe('selected');
		await expect.element(page.getByText('1 of 4 row(s) selected.')).toBeVisible();
	});

	it('selects all rows from the header checkbox', async () => {
		render(DataTableCoreFixture, {});
		expect(checkboxes()).toHaveLength(5);

		checkboxes()[0].click();

		await expect
			.poll(() => checkboxes().slice(1).every((cb) => cb.getAttribute('data-state') === 'checked'))
			.toBe(true);
		await expect.element(page.getByText('4 of 4 row(s) selected.')).toBeVisible();
	});

	it('filters rows through the column filter input', async () => {
		render(DataTableCoreFixture, {});

		await page.getByPlaceholder('Filter emails...').fill('alice');

		await expect.poll(() => bodyRows().length).toBe(1);
		expect(bodyRows()[0].textContent).toContain('Alice');
		await expect.element(page.getByText('0 of 1 row(s) selected.')).toBeVisible();
	});

	it('shows the empty state when there are no items', () => {
		render(DataTableCoreFixture, { items: [] });

		expect(document.body.textContent).toContain('No results.');
		expect(bodyRows()).toHaveLength(1);
	});
});