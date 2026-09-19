import { describe, expect, it } from 'vitest';
import {
	createDragColumn,
	createSelectColumn,
} from '../../../src/lib/components/ui/datatable/data/columns-create';
import type DataTableCheckbox from '../../../src/lib/components/ui/datatable/ui/DataTableCheckbox.svelte';
import type {
	CellContext,
	HeaderContext,
	Row as TableRow,
	Table,
} from '../../../src/lib/components/ui/data-table';
import { RenderComponentConfig } from '../../../src/lib/components/ui/data-table/render-helpers';

type Row = { id: number };

const table = {
	getIsAllPageRowsSelected: () => true,
	getIsSomePageRowsSelected: () => true,
	toggleAllPageRowsSelected: () => undefined,
} as unknown as Table<Row>;

const headerContext = { table } as unknown as HeaderContext<Row>;

const row = {
	getIsSelected: () => false,
	toggleSelected: () => undefined,
	original: { id: 1 },
} as unknown as TableRow<Row>;

const cellContext = { row, table } as unknown as CellContext<Row>;

describe('createDragColumn', () => {
	it('configures a drag column', () => {
		const column = createDragColumn<Row>();
		expect(column.id).toBe('drag');
		expect(column.size).toBe(24);
		expect(column.minSize).toBe(24);
		expect(column.enableSorting).toBe(false);
		expect(column.enableHiding).toBe(false);
		expect(typeof column.header).toBe('function');
		const header = column.header as (props: HeaderContext<Row>) => unknown;
		expect(header(headerContext)).toBeNull();
		expect(typeof column.cell).toBe('function');
	});
});

describe('createSelectColumn', () => {
	it('configures a select column', () => {
		const column = createSelectColumn<Row>();
		expect(column.id).toBe('select');
		expect(column.enableSorting).toBe(false);
		expect(column.enableHiding).toBe(false);
		expect(typeof column.header).toBe('function');
		expect(typeof column.cell).toBe('function');
	});

	it('renders the select-all checkbox from the table state', () => {
		const column = createSelectColumn<Row>();
		const header = column.header as (props: HeaderContext<Row>) => unknown;
		const value = header(headerContext);
		expect(value).toBeInstanceOf(RenderComponentConfig);
	});

	it('renders the row checkbox from the row state', () => {
		const column = createSelectColumn<Row>();
		const cell = column.cell as (props: CellContext<Row>) => unknown;
		const value = cell(cellContext);
		expect(value).toBeInstanceOf(RenderComponentConfig);
	});

	it('toggles row selection via the cell checkbox', () => {
		let selected = false;
		const togglingRow = {
			getIsSelected: () => false,
			toggleSelected: (value: boolean) => {
				selected = value;
			},
			original: { id: 1 },
		} as unknown as TableRow<Row>;
		const togglingContext = {
			row: togglingRow,
			table,
		} as unknown as CellContext<Row>;

		const column = createSelectColumn<Row>();
		const cell = column.cell as (props: CellContext<Row>) => unknown;
		const config = cell(togglingContext) as RenderComponentConfig<typeof DataTableCheckbox>;
		config.props.onCheckedChange?.(true);
		expect(selected).toBe(true);
	});
});