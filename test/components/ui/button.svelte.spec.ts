import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Button from '../../../src/lib/components/ui/button/button.svelte';
import { rawText } from '../../helpers/snippet';

describe('Button.svelte', () => {
	it('renders a native button by default', async () => {
		render(Button, { children: rawText('Click me') });

		const button = page.getByRole('button');
		await expect.element(button).toHaveTextContent('Click me');
		await expect.element(button).toHaveAttribute('type', 'button');
		await expect.element(button).toHaveAttribute('data-slot', 'button');
	});

	it('merges custom classes into the base ones', async () => {
		render(Button, { class: 'my-button', variant: 'destructive' });

		const className = (await page.getByRole('button').element()).className;
		expect(className).toContain('my-button');
		expect(className).toContain('bg-destructive/10');
	});

	it('renders an anchor when href is provided', async () => {
		render(Button, { href: '/about', variant: 'link', children: rawText('About') });

		const link = page.getByRole('link');
		await expect.element(link).toHaveTextContent('About');
		await expect.element(link).toHaveAttribute('href', '/about');
	});

	it('renders an anchor with disabled semantics', async () => {
		render(Button, { href: '/about', disabled: true, children: rawText('Off') });

		const link = page.getByRole('link');
		await expect.element(link).toHaveAttribute('aria-disabled', 'true');
		await expect.element(link).not.toHaveAttribute('href');
	});

	it('applies size classes', async () => {
		render(Button, { size: 'sm', children: rawText('Small') });

		const className = (await page.getByRole('button').element()).className;
		expect(className).toContain('h-8');
	});
});