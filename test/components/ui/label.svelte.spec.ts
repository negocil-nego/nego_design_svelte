import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Label from '../../../src/lib/components/ui/label/label.svelte';
import { rawText } from '../../helpers/snippet';

describe('Label.svelte', () => {
	it('renders children inside the label', async () => {
		render(Label, { children: rawText('Email address') });

		const label = page.getByText('Email address');
		await expect.element(label).toHaveAttribute('data-slot', 'label');
		expect((await label.element()).tagName).toBe('LABEL');
	});

	it('forwards the for attribute', async () => {
		render(Label, { for: 'email', children: rawText('Email') });

		await expect.element(page.getByText('Email')).toHaveAttribute('for', 'email');
	});
});