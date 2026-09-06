import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Avatar from '../fixtures/Avatar.svelte';

const GIF =
	'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

function root(): HTMLElement | null {
	return document.querySelector('[data-slot="avatar"]');
}

describe('Avatar.svelte', () => {
	it('renders the avatar root with a default size', () => {
		render(Avatar, {});

		expect(root()?.getAttribute('data-size')).toBe('default');
	});

	it.each(['sm', 'default', 'lg'])('renders the %s size variant', (size) => {
		render(Avatar, { size: size as 'sm' | 'default' | 'lg' });

		expect(root()?.getAttribute('data-size')).toBe(size);
	});

	it('renders fallback children inside the root', () => {
		render(Avatar, { fallbackText: 'JD' });

		expect(document.querySelector('[data-slot="avatar-fallback"]')?.textContent).toBe('JD');
		expect(root()?.textContent).toContain('JD');
	});

	it('does not render an image without a src', () => {
		render(Avatar, {});

		expect(document.querySelector('[data-slot="avatar-image"]')).toBeNull();
		expect(document.querySelector('[data-slot="avatar-fallback"]')).not.toBeNull();
	});

	it('renders the image with the src and alt when one is provided', () => {
		render(Avatar, { src: GIF, alt: 'Nego' });

		const img = document.querySelector('[data-slot="avatar-image"]') as HTMLImageElement | null;
		expect(img?.getAttribute('src')).toBe(GIF);
		expect(img?.getAttribute('alt')).toBe('Nego');
	});

	it('hides the fallback while an image is present', () => {
		render(Avatar, { src: GIF, fallbackText: 'JD' });

		expect(document.querySelector('[data-slot="avatar-fallback"]')).toBeNull();
		expect(document.querySelector('[data-slot="avatar-image"]')).not.toBeNull();
	});

	it('renders the badge slot with its children', () => {
		render(Avatar, { badgeText: '9+' });

		const badge = document.querySelector('[data-slot="avatar-badge"]');
		expect(badge).not.toBeNull();
		expect(badge?.textContent).toBe('9+');
	});

	it('switches to the fallback when the image fails to load', async () => {
		render(Avatar, { src: GIF, fallbackText: 'JD' });

		const img = document.querySelector('[data-slot="avatar-image"]') as HTMLImageElement;
		expect(img).not.toBeNull();

		img.dispatchEvent(new Event('error'));

		await expect
			.poll(() => document.querySelector('[data-slot="avatar-fallback"]') !== null)
			.toBe(true);
	});
});