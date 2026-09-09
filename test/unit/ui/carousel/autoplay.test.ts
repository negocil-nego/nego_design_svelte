import { describe, expect, it } from 'vitest';
import { autoplay } from '../../../../src/lib/components/ui/carousel/autoplay';

describe('autoplay plugin', () => {
	it('applies default options', () => {
		expect(autoplay()).toEqual({ delay: 4000, stopOnInteraction: true, loop: false });
	});

	it('overrides options partially', () => {
		expect(autoplay({ delay: 2000 })).toEqual({
			delay: 2000,
			stopOnInteraction: true,
			loop: false,
		});
	});

	it('accepts explicit falsy values', () => {
		expect(autoplay({ stopOnInteraction: false, loop: true })).toEqual({
			delay: 4000,
			stopOnInteraction: false,
			loop: true,
		});
	});
});