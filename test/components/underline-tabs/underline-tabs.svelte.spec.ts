import { userEvent } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import UnderlineTabs from '../fixtures/UnderlineTabs.svelte';

function triggers(): HTMLElement[] {
	return Array.from(
		document.querySelectorAll('[data-slot="underline-tabs-trigger"]')
	) as HTMLElement[];
}

function panels(): HTMLElement[] {
	return Array.from(document.querySelectorAll('[role="tabpanel"]')) as HTMLElement[];
}

describe('UnderlineTabs.svelte', () => {
	it('renders the tablist and a trigger per tab', () => {
		render(UnderlineTabs);

		const list = document.querySelector('[role="tablist"]');
		expect(list).not.toBeNull();
		expect(list?.getAttribute('data-slot')).toBe('underline-tabs-list');
		expect(triggers()).toHaveLength(2);
		expect(triggers().every((trigger) => trigger.getAttribute('role') === 'tab')).toBe(true);
	});

	it('activates the default value', () => {
		render(UnderlineTabs, { defaultValue: 'one' });

		const [one, two] = triggers();
		expect(one.getAttribute('aria-selected')).toBe('true');
		expect(one.getAttribute('data-state')).toBe('active');
		expect(one.getAttribute('tabindex')).toBe('0');
		expect(two.getAttribute('aria-selected')).toBe('false');
		expect(two.getAttribute('data-state')).toBe('inactive');
		expect(two.getAttribute('tabindex')).toBe('-1');
		expect(panels()).toHaveLength(1);
		expect(panels()[0].textContent).toBe('Panel One');
	});

	it('switches the visible content when another trigger is clicked', async () => {
		render(UnderlineTabs, { defaultValue: 'one' });

		await userEvent.click(triggers()[1]);

		expect(triggers()[1].getAttribute('aria-selected')).toBe('true');
		expect(triggers()[1].getAttribute('data-state')).toBe('active');
		expect(triggers()[0].getAttribute('aria-selected')).toBe('false');
		expect(triggers()[0].getAttribute('tabindex')).toBe('-1');
		expect(panels()).toHaveLength(1);
		expect(panels()[0].textContent).toBe('Panel Two');
	});

	it('calls onValueChange with the selected tab', async () => {
		const calls: string[] = [];
		render(UnderlineTabs, { onValueChange: (value) => calls.push(value) });

		await userEvent.click(triggers()[1]);

		expect(calls).toEqual(['two']);
	});

	it('reflects a vertical orientation on the root', () => {
		render(UnderlineTabs, { orientation: 'vertical' });

		const root = document.querySelector('[data-slot="underline-tabs"]');
		expect(root?.getAttribute('data-orientation')).toBe('vertical');
	});

	it('renders the panel matching a provided value', () => {
		render(UnderlineTabs, { value: 'two' });

		expect(panels()[0].textContent).toBe('Panel Two');
		expect(triggers()[1].getAttribute('aria-selected')).toBe('true');
	});
});