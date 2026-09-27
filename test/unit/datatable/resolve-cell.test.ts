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

	it('uses the fallback key when the cell is null', () => {
		const resolver = resolveCell<{ name: string }>(null, 'name');
		const result = resolver(ctx);

		expect(result).toBeInstanceOf(RenderSnippetConfig);
		expect((result as RenderSnippetConfig<{ value: string }>).params.value).toBe('nego');
	});

	it('falls back to the column value when the cell and the key are empty', () => {
		const resolver = resolveCell<{ name: string }>(null);
		const result = resolver({ ...ctx, getValue: () => 'nego' });

		expect(result).toBeInstanceOf(RenderSnippetConfig);
		expect((result as RenderSnippetConfig<{ value: string }>).params.value).toBe('nego');
	});
});