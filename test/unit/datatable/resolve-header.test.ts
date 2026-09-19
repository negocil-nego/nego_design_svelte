import { describe, expect, it } from 'vitest';
import { resolveHeader } from '../../../src/lib/components/ui/datatable/data/resolve-header.svelte.ts';
import { RenderSnippetConfig } from '../../../src/lib/components/ui/data-table/render-helpers';
import type { HeaderContext, Table } from '../../../src/lib/components/ui/data-table';

const table = {} as Table<{ name: string }>;
const baseCtx = {
	column: { id: 'name' },
	table,
} as unknown as HeaderContext<{ name: string }>;

describe('resolveHeader', () => {
	it('wraps a plain string header into a snippet renderer', () => {
		const resolver = resolveHeader<{ name: string }>('Full Name');
		expect(typeof resolver).toBe('function');

		const result = resolver(baseCtx);
		expect(result).toBeInstanceOf(RenderSnippetConfig);
		expect((result as RenderSnippetConfig<{ text: string }>).params.text).toBe('Full Name');
	});

	it('returns function headers untouched', () => {
		const custom = () => '<span>custom</span>';
		const resolver = resolveHeader<{ name: string }>(custom);
		expect(resolver).toBe(custom);
	});
});