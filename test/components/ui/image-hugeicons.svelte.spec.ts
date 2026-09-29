import { render } from 'vitest-browser-svelte';
import { describe, expect, it } from 'vitest';
import ImageHugeicons from '../../../src/lib/components/ui/image/ImageHugeicons.svelte';
import IconRender from '../../../src/lib/components/ui/image/IconRender.svelte';
import { defaultIcon, icons, items } from '../../../src/lib/components/ui/image/icons';

describe('ImageHugeicons.svelte', () => {
	it('renders a single <i> carrying the mapped font class', () => {
		const { container } = render(ImageHugeicons, { icon: 'User02Icon' });

		const icons_ = container.querySelectorAll('i');
		expect(icons_).toHaveLength(1);
		expect(container.querySelector('svg, img, span')).toBeNull();

		const icon = icons_[0];
		expect(icon.className).toContain('hgi');
		expect(icon.className).toContain('hgi-stroke');
		expect(icon.className).toContain('hgi-user-02');
	});

	it('takes the sizing from the class parameter', () => {
		const { container } = render(ImageHugeicons, {
			icon: 'User02Icon',
			class: 'size-8 text-red-500',
		});

		const icon = container.querySelector('i') as HTMLElement;
		expect(getComputedStyle(icon).width).toBe('32px');
		expect(getComputedStyle(icon).height).toBe('32px');
		expect(icon.className).toContain('text-red-500');
	});

	it('scales the glyph to the box height', () => {
		const { container } = render(ImageHugeicons, {
			icon: 'AlertCircleIcon',
			class: 'size-10',
		});

		const glyph = getComputedStyle(container.querySelector('i') as HTMLElement, '::before');
		expect(glyph.fontSize).toBe('40px');
		expect(glyph.content).not.toBe('none');
	});

	it('falls back to a default box size when the class has none', () => {
		const { container } = render(ImageHugeicons, { icon: 'User02Icon' });

		const icon = container.querySelector('i') as HTMLElement;
		expect(getComputedStyle(icon).width).toBe('20px');
		expect(getComputedStyle(icon).height).toBe('20px');
	});

	it('falls back to the default icon for unknown keys', () => {
		const { container } = render(ImageHugeicons, { icon: 'NotAnIcon' as never });

		expect(container.querySelector('i')!.className).toContain(icons[defaultIcon].split(' ').at(-1)!);
	});

	it('accepts codes coming from the generated items list', () => {
		const code: (typeof items)[number]['code'] = 'Home01Icon';
		const { container } = render(ImageHugeicons, { icon: code });

		expect(container.querySelector('i')!.className).toContain('hgi-home-01');
	});
});

describe('IconRender.svelte', () => {
	it('delegates Hugeicons keys to ImageHugeicons', () => {
		const { container } = render(IconRender, { icon: 'User02Icon', class: 'size-6' });

		const icon = container.querySelector('i') as HTMLElement;
		expect(icon.className).toContain('hgi-user-02');
		expect(getComputedStyle(icon).width).toBe('24px');
	});

	it('renders an arbitrary CSS class as a plain <i>', () => {
		const { container } = render(IconRender, { icon: 'lucide-heart' });

		const icon = container.querySelector('i') as HTMLElement;
		expect(icon.className).toContain('lucide-heart');
		expect(icon.className).toContain('hgi');
	});
});
