import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Badge from '../../../src/lib/components/ui/badge/badge.svelte';
import { rawText } from '../../helpers/snippet';

describe('Badge.svelte', () => {
	it('renders children inside the badge', async () => {
		render(Badge, { children: rawText('New') });

		const badge = page.getByText('New');
		await expect.element(badge).toHaveAttribute('data-slot', 'badge');
	});

	it('applies the default variant classes', async () => {
		render(Badge, { children: rawText('v1') });

		const className = (await page.getByText('v1').element()).className;
		expect(className).toContain('bg-primary');
	});

	it('applies the outline variant classes', async () => {
		render(Badge, { variant: 'outline', children: rawText('v2') });

		const className = (await page.getByText('v2').element()).className;
		expect(className).toContain('border-border');
	});

	it('merges custom classes', async () => {
		render(Badge, { class: 'custom-badge', children: rawText('v3') });

		const className = (await page.getByText('v3').element()).className;
		expect(className).toContain('custom-badge');
	});
});