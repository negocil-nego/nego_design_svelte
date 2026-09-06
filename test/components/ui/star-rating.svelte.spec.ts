import { page, userEvent } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Ratings from '../fixtures/Ratings.svelte';

function radios(): HTMLElement[] {
	return Array.from(document.querySelectorAll('[role="radio"]')) as HTMLElement[];
}

describe('StarRating.svelte', () => {
	it('renders the requested number of radios', async () => {
		render(Ratings, { count: 5 });

		expect(radios()).toHaveLength(5);
	});

	it('marks stars as active up to the value', async () => {
		render(Ratings, { count: 5, value: 3 });

		expect(radios().map((el) => el.getAttribute('data-state'))).toEqual([
			'active',
			'active',
			'active',
			'inactive',
			'inactive',
		]);
	});

	it('selects a value when a star is clicked', async () => {
		const calls: number[] = [];
		render(Ratings, { count: 5, onValueChange: (v) => calls.push(v) });

		await userEvent.click(radios()[2]);
		expect(calls).toEqual([3]);
	});

	it('updates aria-checked after selecting', async () => {
		render(Ratings, { count: 3, value: 1 });

		await userEvent.click(radios()[1]);
		expect(radios()[1].getAttribute('aria-checked')).toBe('true');
		expect(radios()[0].getAttribute('aria-checked')).toBe('true');
	});

	it('supports keyboard selection', async () => {
		const calls: number[] = [];
		render(Ratings, { count: 5, onValueChange: (v) => calls.push(v) });

		await userEvent.click(radios()[0]);
		await userEvent.keyboard('{Home}');
		await userEvent.keyboard('{ArrowRight}');
		await userEvent.keyboard('{ArrowRight}');

		expect(calls).toEqual([1, 1, 2, 3]);
	});

	it('does not fire selection when disabled', async () => {
		const calls: number[] = [];
		render(Ratings, { count: 3, disabled: true, onValueChange: (v) => calls.push(v) });

		radios()[1].click();
		radios()[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true }));
		expect(calls).toEqual([]);
	});

	it('does not fire selection when read-only', async () => {
		const calls: number[] = [];
		render(Ratings, { count: 3, readOnly: true, onValueChange: (v) => calls.push(v) });

		await userEvent.click(page.getByRole('radio').nth(1));
		expect(calls).toEqual([]);
	});
});