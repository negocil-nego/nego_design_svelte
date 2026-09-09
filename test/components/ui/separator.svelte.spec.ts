import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Separator from '../../../src/lib/components/ui/separator/separator.svelte';

describe('Separator.svelte', () => {
	it('renders a horizontal separator by default', async () => {
		render(Separator);

		const separator = page.getByRole('separator');
		await expect.element(separator).toHaveAttribute('data-orientation', 'horizontal');
		await expect.element(separator).toHaveAttribute('data-slot', 'separator');
	});

	it('renders a vertical separator', async () => {
		render(Separator, { orientation: 'vertical' });

		const separator = page.getByRole('separator');
		await expect.element(separator).toHaveAttribute('data-orientation', 'vertical');
		const className = (await separator.element()).className;
		expect(className).toContain('w-px');
		expect(className).toContain('h-full');
	});

	it('renders without separator role when decorative', async () => {
		render(Separator, { decorative: true });

		const el = document.querySelector('[data-slot="separator"]') as HTMLElement;
		expect(el.getAttribute('role')).toBeNull();
		expect(el.getAttribute('aria-orientation')).toBeNull();
	});
});