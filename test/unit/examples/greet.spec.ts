import { describe, it, expect } from 'vitest';
import { greet } from '../../fixtures/greet';

describe('greet', () => {
	it('returns a greeting', () => {
		expect(greet('Svelte')).toBe('Hello, Svelte!');
	});
});
