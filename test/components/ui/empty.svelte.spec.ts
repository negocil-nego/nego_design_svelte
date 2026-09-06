import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Empty from '../../../src/lib/components/ui/empty/empty.svelte';
import { rawText } from '../../helpers/snippet';

describe('Empty.svelte', () => {
	it('renders an empty state container', async () => {
		render(Empty, { children: rawText('No results found') });

		const el = page.getByText('No results found');
		await expect.element(el).toHaveAttribute('data-slot', 'empty');
		const className = (await el.element()).className;
		expect(className).toContain('flex-col');
	});

	it('merges custom classes', async () => {
		render(Empty, { class: 'empty-custom' });

		const className = (document.querySelector('[data-slot="empty"]') as HTMLElement).className;
		expect(className).toContain('empty-custom');
	});
});