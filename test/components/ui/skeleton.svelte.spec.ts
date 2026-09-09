import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Skeleton from '../../../src/lib/components/ui/skeleton/skeleton.svelte';
import { rawText } from '../../helpers/snippet';

describe('Skeleton.svelte', () => {
	it('uses the skeleton data-slot and pulse animation', async () => {
		render(Skeleton);

		const el = document.querySelector('[data-slot="skeleton"]') as HTMLElement;
		expect(el).not.toBeNull();
		expect(el.className).toContain('animate-pulse');
		expect(el.className).toContain('bg-muted');
	});

	it('renders children inside the skeleton', async () => {
		render(Skeleton, { children: rawText('loading') });

		const el = document.querySelector('[data-slot="skeleton"]') as HTMLElement;
		expect(el.textContent).toContain('loading');
	});
});