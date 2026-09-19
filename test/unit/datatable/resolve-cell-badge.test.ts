import { describe, expect, it } from 'vitest';
import { resolveCellBadge } from '../../../src/lib/components/ui/datatable/data/resolve-cell-badge.svelte.ts';
import {
	RenderComponentConfig,
	RenderSnippetConfig,
} from '../../../src/lib/components/ui/data-table/render-helpers';
import { Badge } from '../../../src/lib/components/ui/badge';
import type { CellContext, Table } from '../../../src/lib/components/ui/data-table';

const table = {} as Table<{ status: string }>;

function makeCtx(status: string) {
	return {
		row: { original: { status } },
		column: { id: 'status' },
		table,
	} as unknown as CellContext<{ status: string }, unknown>;
}

describe('resolveCellBadge', () => {
	const badgeConfig = [
		{ value: 'active', label: 'Ativo', className: 'bg-green-500' },
		{ value: 'pending' },
	];

	it('renders a Badge component when the cell matches a badge config', () => {
		const resolver = resolveCellBadge<{ status: string }>('status', badgeConfig);
		const result = resolver(makeCtx('active'));

		expect(result).toBeInstanceOf(RenderComponentConfig);
		const config = result as RenderComponentConfig<typeof Badge>;
		expect(config.component).toBe(Badge);
		expect(config.props.class).toBe('bg-green-500');
	});

	it('uses the cell value as badge label when no label is configured', () => {
		const resolver = resolveCellBadge<{ status: string }>('status', badgeConfig);
		const result = resolver(makeCtx('pending'));

		expect(result).toBeInstanceOf(RenderComponentConfig);
		const config = result as RenderComponentConfig<typeof Badge>;
		expect(config.props.children).toBeDefined();
	});

	it('falls back to a snippet for unmatched values', () => {
		const resolver = resolveCellBadge<{ status: string }>('status', badgeConfig);
		const result = resolver(makeCtx('unknown'));

		expect(result).toBeInstanceOf(RenderSnippetConfig);
		expect((result as RenderSnippetConfig<{ value: string }>).params.value).toBe('unknown');
	});

	it('delegates to resolveCell when no badge config is provided', () => {
		const resolver = resolveCellBadge<{ status: string }>('status');
		expect(resolver(makeCtx('active'))).toBeInstanceOf(RenderSnippetConfig);
	});
});