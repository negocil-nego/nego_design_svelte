import { describe, expect, it } from 'vitest';
import { resolveCell } from '../../../src/lib/components/ui/datatable/data/resolve-cell.svelte.ts';
import { RenderSnippetConfig } from '../../../src/lib/components/ui/data-table/render-helpers';
import type { CellContext, Table } from '../../../src/lib/components/ui/data-table';

const table = {} as Table<{ name: string }>;
const ctx = {
	row: { original: { name: 'nego' } },
	column: { id: 'name' },
	table,
} as unknown as CellContext<{ name: string }, unknown>;

describe('resolveCell', () => {
	it('renders the value of the configured accessor key', () => {
		const resolver = resolveCell<{ name: string }>('name');
		const result = resolver(ctx);

		expect(result).toBeInstanceOf(RenderSnippetConfig);
		expect((result as RenderSnippetConfig<{ value: string }>).params.value).toBe('nego');
	});

	it('returns function cells untouched', () => {
		const custom = () => '<b>x</b>';
		const resolver = resolveCell<{ name: string }>(custom);
		expect(resolver).toBe(custom);
	});
});