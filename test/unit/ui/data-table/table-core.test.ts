import { describe, expect, it } from 'vitest';
import {
	createSvelteTable,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	type ColumnDef,
	type PaginationState,
	type Updater,
} from '../../../../src/lib/components/ui/data-table/table-core.svelte';
import type { ColumnFiltersState } from '../../../../src/lib/components/ui/data-table/table-core.svelte';

type Row = { id: number; name: string; age: number };

const columns: ColumnDef<Row>[] = [
	{ id: 'id', accessorKey: 'id' },
	{ id: 'name', accessorKey: 'name', enableHiding: false },
	{ id: 'age', accessorKey: 'age' },
];

const data: Row[] = [
	{ id: 3, name: 'Charlie', age: 40 },
	{ id: 1, name: 'Alice', age: 30 },
	{ id: 2, name: 'Bob', age: 20 },
];

describe('createSvelteTable (core)', () => {
	it('builds header groups from visible columns', () => {
		const table = createSvelteTable({ data, columns });
		const groups = table.getHeaderGroups();
		expect(groups).toHaveLength(1);
		expect(groups[0].headers.map((h) => h.column.id)).toEqual(['id', 'name', 'age']);
	});

	it('exposes the row model', () => {
		const table = createSvelteTable({ data, columns });
		expect(table.getRowModel().rows.map((r) => r.original.name)).toEqual([
			'Charlie',
			'Alice',
			'Bob',
		]);
	});

	it('resolves row ids from getRowId when provided', () => {
		const table = createSvelteTable({
			data,
			columns,
			getRowId: (row) => `row-${row.id}`,
		});
		expect(table.getRowModel().rows.map((r) => r.id)).toEqual(['row-3', 'row-1', 'row-2']);
	});

	it('sorts numeric and string columns', () => {
		const table = createSvelteTable({ data, columns, state: { sorting: [{ id: 'age', desc: false }] } });
		expect(table.getRowModel().rows.map((r) => r.original.name)).toEqual(['Bob', 'Alice', 'Charlie']);

		const descTable = createSvelteTable({ data, columns, state: { sorting: [{ id: 'name', desc: true }] } });
		expect(descTable.getRowModel().rows.map((r) => r.original.name)).toEqual(['Charlie', 'Bob', 'Alice']);
	});

	it('ignores sorting on columns that disable it', () => {
		const disabled: ColumnDef<Row>[] = [{ id: 'name', accessorKey: 'name', enableSorting: false }];
		const table = createSvelteTable({ data, columns: disabled, state: { sorting: [{ id: 'name', desc: true }] } });
		expect(table.getRowModel().rows.map((r) => r.original.name)).toEqual(['Charlie', 'Alice', 'Bob']);
	});

	it('filters rows case-insensitively', () => {
		const table = createSvelteTable({
			data,
			columns,
			state: { columnFilters: [{ id: 'name', value: 'BO' }] },
		});
		expect(table.getRowModel().rows.map((r) => r.original.name)).toEqual(['Bob']);

		const tableA = createSvelteTable({ data, columns, state: { columnFilters: [{ id: 'age', value: 40 }] } });
		expect(tableA.getRowModel().rows.map((r) => r.original.name)).toEqual(['Charlie']);
	});

	it('paginates rows and pages forward/backward', () => {
		const controlled = {
			pagination: { pageIndex: 0, pageSize: 2 },
		};
		const table = createSvelteTable({
			data,
			columns,
			state: controlled,
			onPaginationChange: (updater) => {
			const change = updater as Updater<PaginationState>;
			controlled.pagination =
				typeof change === 'function' ? change(controlled.pagination) : change;
			return controlled.pagination;
		},
		});
		expect(table.getRowModel().rows).toHaveLength(2);
		expect(table.getCanNextPage()).toBe(true);
		expect(table.getCanPreviousPage()).toBe(false);

		table.nextPage();
		expect(table.getCanPreviousPage()).toBe(true);
		expect(table.getRowModel().rows.map((r) => r.original.id)).toEqual([2]);

		table.previousPage();
		table.previousPage();
		expect(table.getRowModel().rows.map((r) => r.original.id)).toEqual([3, 1]);

		table.setPageIndex(1);
		expect(table.getRowModel().rows.map((r) => r.original.id)).toEqual([2]);
	});

	it('selects and toggles rows', () => {
		const table = createSvelteTable({ data, columns });
		const [firstRow] = table.getRowModel().rows;

		expect(firstRow.getIsSelected()).toBe(false);
		firstRow.toggleSelected(true);
		expect(firstRow.getIsSelected()).toBe(true);
		expect(table.getSelectedRowModel().rows.map((r) => r.id)).toEqual([String(3)]);

		firstRow.toggleSelected();
		expect(firstRow.getIsSelected()).toBe(false);
	});

	it('toggles all page/rows selection', () => {
		const table = createSvelteTable({
			data,
			columns,
			state: { pagination: { pageIndex: 0, pageSize: 2 } },
		});
		expect(table.getIsAllPageRowsSelected()).toBe(false);

		table.toggleAllPageRowsSelected(true);
		expect(table.getIsAllPageRowsSelected()).toBe(true);
		expect(table.getIsSomePageRowsSelected()).toBe(true);

		table.toggleAllPageRowsSelected(false);
		expect(table.getIsAllPageRowsSelected()).toBe(false);

		const all = createSvelteTable({ data, columns });
		all.toggleAllRowsSelected(true);
		expect(all.getRowModel().rows.every((r) => r.getIsSelected())).toBe(true);
		expect(all.getFilteredSelectedRowModel().rows).toHaveLength(3);
	});

	it('handles controlled state via updater callbacks', () => {
		const controlled: { columnFilters: { id: string; value: unknown }[] } = { columnFilters: [] };
		const table = createSvelteTable({
			data,
			columns,
			state: controlled,
			onColumnFiltersChange: (updater) => {
				const change = updater as Updater<ColumnFiltersState>;
				controlled.columnFilters =
					typeof change === 'function' ? change(controlled.columnFilters) : change;
				return controlled.columnFilters;
			},
		});

		table.getColumn('age')?.setFilterValue(0);
		expect(controlled.columnFilters).toEqual([{ id: 'age', value: 0 }]);
		expect(table.getColumn('age')?.getFilterValue()).toBe(0);

		table.getColumn('age')?.setFilterValue(undefined);
		expect(controlled.columnFilters).toEqual([]);
	});

	it('manages column visibility and hiding', () => {
		const table = createSvelteTable({ data, columns });

		expect(table.getColumn('name')?.getCanHide()).toBe(false);
		expect(table.getColumn('id')?.getCanHide()).toBe(true);
		expect(table.getColumn('name')?.getIsVisible()).toBe(true);

		table.getColumn('age')?.toggleVisibility(false);
		expect(table.getColumn('age')?.getIsVisible()).toBe(false);
		expect(table.getRowModel().rows[0].getVisibleCells().map((c) => c.column.id)).toEqual([
			'id',
			'name',
		]);
	});

	it('manages column filter values', () => {
		const table = createSvelteTable({ data, columns });
		expect(table.getColumn('age')?.getFilterValue()).toBeUndefined();

		table.getColumn('age')?.setFilterValue(0);
		expect(table.getColumn('age')?.getFilterValue()).toBe(0);

		table.getColumn('age')?.setFilterValue(undefined);
		expect(table.getColumn('age')?.getFilterValue()).toBeUndefined();
	});

	it('returns default row model builders', () => {
		expect(getCoreRowModel()).toBeTypeOf('function');
		expect(getSortedRowModel()).toBeTypeOf('function');
		expect(getFilteredRowModel()).toBeTypeOf('function');
		expect(getPaginationRowModel()).toBeTypeOf('function');
	});
});