import { page } from 'vitest/browser';
import { describe, expect, it } from 'vitest';
import { render } from 'vitest-browser-svelte';
import Carousel from '../fixtures/Carousel.svelte';
import type { CarouselAPI } from '../../../src/lib/components/ui/carousel';

function items(): HTMLElement[] {
	return Array.from(document.querySelectorAll('[data-slot="carousel-item"]')) as HTMLElement[];
}

describe('Carousel.svelte', () => {
	it('renders the carousel region', () => {
		render(Carousel, {});

		const region = document.querySelector('[data-slot="carousel"]');
		expect(region?.getAttribute('role')).toBe('region');
		expect(region?.getAttribute('aria-roledescription')).toBe('carousel');
	});

	it('renders one slide item per slide with group semantics', () => {
		render(Carousel, {});

		expect(items()).toHaveLength(3);
		expect(items()[0].getAttribute('role')).toBe('group');
		expect(items().every((item) => item.getAttribute('aria-roledescription') === 'slide')).toBe(
			true
		);
		expect(items().map((item) => item.textContent)).toEqual([
			'Slide 1',
			'Slide 2',
			'Slide 3'
		]);
	});

	it('renders previous and next navigation buttons', async () => {
		render(Carousel, {});

		await expect.element(page.getByRole('button', { name: 'Previous slide' })).toHaveAttribute(
			'data-slot',
			'carousel-previous'
		);

		await expect.element(page.getByRole('button', { name: 'Next slide' })).toHaveAttribute(
			'data-slot',
			'carousel-next'
		);
	});

	it('disables both navigation buttons until a scroll container is measured', async () => {
		render(Carousel, {});

		await expect.element(page.getByRole('button', { name: 'Previous slide' })).toBeDisabled();
		await expect.element(page.getByRole('button', { name: 'Next slide' })).toBeDisabled();
	});

	it('exposes the CarouselAPI through setApi', async () => {
		let api: CarouselAPI | undefined;
		render(Carousel, { setApi: (next) => (api = next) });

		await expect.poll(() => api).toBeTruthy();

		expect(typeof api!.scrollPrev).toBe('function');
		expect(typeof api!.scrollNext).toBe('function');
		expect(typeof api!.scrollTo).toBe('function');
		expect(api!.canScrollNext).toBe(false);
		expect(api!.canScrollPrev).toBe(false);
		expect(api!.selectedIndex).toBe(0);
		expect(api!.scrollSnapList()).toEqual([]);
	});

	it('does not throw when stepping through an unmeasured carousel', async () => {
		let api: CarouselAPI | undefined;
		render(Carousel, { setApi: (next) => (api = next) });

		await expect.poll(() => api).toBeTruthy();

		expect(() => {
			api!.scrollNext();
			api!.scrollPrev();
			api!.scrollTo(1);
		}).not.toThrow();
		expect(api!.selectedIndex).toBe(0);
	});
});