import { describe, expect, it } from 'vitest';
import { cn } from '../../src/lib/utils';

describe('cn', () => {
	it('joins truthy string inputs with a space', () => {
		expect(cn('foo', 'bar', 'baz')).toBe('foo bar baz');
	});

	it('ignores falsy values', () => {
		expect(cn('foo', undefined, null, false, 'bar')).toBe('foo bar');
	});

	it('flattens nested arrays', () => {
		expect(cn('a', ['b', ['c']], 'd')).toBe('a b c d');
	});

	it('appends keys of object entries with truthy values', () => {
		expect(cn('base', { active: true, hidden: false } as Record<string, boolean>)).toBe('base active');
	});

	it('returns an empty string when nothing is provided', () => {
		expect(cn()).toBe('');
		expect(cn(false, null, undefined)).toBe('');
	});

	it('combines groups, objects and strings', () => {
		expect(cn('a', { b: true }, ['c', { d: false }], 'e')).toBe('a b c e');
	});
});