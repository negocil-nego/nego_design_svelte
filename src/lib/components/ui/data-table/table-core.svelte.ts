export type Updater<T> = T | ((prev: T) => T);

export type SortingState = { id: string; desc: boolean }[];
export type ColumnFiltersState = { id: string; value: unknown }[];
export type RowSelectionState = Record<string, boolean>;
export type PaginationState = { pageIndex: number; pageSize: number };
export type VisibilityState = Record<string, boolean>;

export type TableState = {
	sorting: SortingState;
	pagination: PaginationState;
	columnVisibility: VisibilityState;
	rowSelection: RowSelectionState;
	columnFilters: ColumnFiltersState;
};

export type ColumnDefTemplate<TProps extends object> =
	| string
	| ((props: TProps) => unknown)
	| null;

export type ColumnDef<T, Value = unknown> = {
	id?: string;
	accessorKey?: string;
	header?: ColumnDefTemplate<HeaderContext<T, Value>>;
	cell?: ColumnDefTemplate<CellContext<T, Value>>;
	size?: number;
	minSize?: number;
	enableSorting?: boolean;
	enableHiding?: boolean;
};

export type Column<T, Value = unknown> = {
	id: string;
	columnDef: ColumnDef<T, Value>;
	getCanHide(): boolean;
	getIsVisible(): boolean;
	toggleVisibility(value: boolean): void;
	getFilterValue(): unknown;
	setFilterValue(value: unknown): void;
};

export type Cell<T, Value = unknown> = {
	id: string;
	column: Column<T, Value>;
	getContext(): CellContext<T, Value>;
};

export type Row<T> = {
	id: string;
	original: T;
	getIsSelected(): boolean;
	toggleSelected(value?: boolean): void;
	getVisibleCells(): Cell<T>[];
};

export type CellContext<T, Value = unknown> = {
	row: Row<T>;
	cell?: Cell<T, Value>;
	column: Column<T, Value>;
	table: Table<T>;
	getValue: () => Value;
	renderValue: () => Value;
};

export type HeaderContext<T, Value = unknown> = {
	column: Column<T, Value>;
	header?: unknown;
	table: Table<T>;
};

export type RowModel<T> = { rows: Row<T>[] };

export type Table<T> = {
	getHeaderGroups(): {
		id: string;
		headers: {
			id: string;
			isPlaceholder: boolean;
			column: Column<T>;
			getContext(): HeaderContext<T>;
		}[];
	}[];
	getRowModel(): RowModel<T>;
	getFilteredRowModel(): RowModel<T>;
	getFilteredSelectedRowModel(): RowModel<T>;
	getSelectedRowModel(): RowModel<T>;
	getAllColumns(): Column<T>[];
	getColumn(id: string): Column<T> | undefined;
	getIsAllPageRowsSelected(): boolean;
	getIsSomePageRowsSelected(): boolean;
	toggleAllPageRowsSelected(value?: boolean): void;
	toggleAllRowsSelected(value?: boolean): void;
	getCanPreviousPage(): boolean;
	getCanNextPage(): boolean;
	previousPage(): void;
	nextPage(): void;
	setPageIndex(index: number): void;
	getState(): TableState;
};

export type SvelteTableOptions<T> = {
	data: T[];
	columns: ColumnDef<T>[];
	state?: Partial<TableState>;
	onSortingChange?: Updater<SortingState>;
	onPaginationChange?: Updater<PaginationState>;
	onColumnVisibilityChange?: Updater<VisibilityState>;
	onRowSelectionChange?: Updater<RowSelectionState>;
	onColumnFiltersChange?: Updater<ColumnFiltersState>;
	getCoreRowModel?: unknown;
	getSortedRowModel?: unknown;
	getFilteredRowModel?: unknown;
	getPaginationRowModel?: unknown;
	getRowId?: (original: T) => string;
};

export function createSvelteTable<T>(options: SvelteTableOptions<T>): Table<T> {
	const tableState = $state<TableState>({
		sorting: [],
		pagination: { pageIndex: 0, pageSize: 10 },
		columnVisibility: {},
		rowSelection: {},
		columnFilters: [],
	});

	const stateHandlers: Record<keyof TableState, unknown> = {
		sorting: options.onSortingChange,
		pagination: options.onPaginationChange,
		columnVisibility: options.onColumnVisibilityChange,
		rowSelection: options.onRowSelectionChange,
		columnFilters: options.onColumnFiltersChange,
	};

	function readState<K extends keyof TableState>(key: K): TableState[K] {
		const s = options.state;
		if (s && key in s) return s[key] as TableState[K];
		return tableState[key];
	}

	function updateState<K extends keyof TableState>(key: K, updater: Updater<TableState[K]>) {
		const next =
			typeof updater === "function"
				? (updater as (prev: TableState[K]) => TableState[K])(readState(key))
				: updater;
		tableState[key] = next;
		const handler = stateHandlers[key];
		if (typeof handler === "function") (handler as unknown as (u: unknown) => void)(updater);
	}

	function getColumnId(def: ColumnDef<T>, index: number): string {
		return (def.id ?? def.accessorKey ?? `col_${index}`) as string;
	}

	function getAccessorValue(original: T, def: ColumnDef<T>): unknown {
		if (def.accessorKey != null) return (original as Record<string, unknown>)[def.accessorKey];
		return undefined;
	}

	function makeColumn(def: ColumnDef<T>, colId: string): Column<T> {
		return {
			id: colId,
			columnDef: def,
			getCanHide() {
				return def.enableHiding !== false;
			},
			getIsVisible() {
				return readState("columnVisibility")[colId] !== false;
			},
			toggleVisibility(value: boolean) {
				updateState("columnVisibility", (prev) => ({ ...prev, [colId]: value }));
			},
			getFilterValue() {
				const filter = readState("columnFilters").find((f) => f.id === colId);
				return filter?.value;
			},
			setFilterValue(value: unknown) {
				updateState("columnFilters", (prev) => {
					const next = prev.filter((f) => f.id !== colId);
					if (value !== undefined) next.push({ id: colId, value });
					return next;
				});
			},
		};
	}

	function makeCell(rowId: string, original: T, column: Column<T>, row: Row<T>, table: Table<T>): Cell<T> {
		const id = `row_${rowId}_cell_${String(column.id)}`;
		const cellObj: Cell<T> = {
			id,
			column,
			getContext() {
				return {
					row,
					cell: cellObj,
					column,
					table,
					getValue: () => getAccessorValue(original, column.columnDef),
					renderValue: () => getAccessorValue(original, column.columnDef),
				};
			},
		};
		return cellObj;
	}

	function makeRow(index: number, original: T, table: Table<T>): Row<T> {
		const rowId = getRowId(index, original);
		const rowObj: Row<T> = {
			id: rowId,
			original,
			getIsSelected() {
				return readState("rowSelection")[rowId] === true;
			},
			toggleSelected(value?: boolean) {
				updateState("rowSelection", (prev) => {
					const next = value ?? !(prev[rowId] === true);
					return { ...prev, [rowId]: next };
				});
			},
			getVisibleCells() {
				return getVisibleColumns().map((column) => makeCell(rowId, original, column, rowObj, table));
			},
		};
		return rowObj;
	}

	function getRowId(index: number, original: T): string {
		if (options.getRowId) return String(options.getRowId(original));
		for (const def of options.columns) {
			if (def.accessorKey != null) {
				const value = (original as Record<string, unknown>)[def.accessorKey];
				if (value != null) return String(value);
			}
		}
		return String(index);
	}

	function getAllColumns(): Column<T>[] {
		return options.columns.map((def, index) => makeColumn(def, getColumnId(def, index)));
	}

	function getColumn(id: string): Column<T> | undefined {
		return getAllColumns().find((column) => column.id === id);
	}

	function getVisibleColumns(): Column<T>[] {
		return getAllColumns().filter((column) => column.getIsVisible());
	}

	function getAllRows(): Row<T>[] {
		return options.data.map((original, index) => makeRow(index, original, table));
	}

	function applyFilters(rows: Row<T>[]): Row<T>[] {
		const filters = readState("columnFilters");
		if (!filters.length) return rows;
		return rows.filter((row) =>
			filters.every((filter) => {
				const column = getColumn(filter.id);
				if (!column || column.columnDef.accessorKey == null) return true;
				const value = getAccessorValue(row.original, column.columnDef);
				return String(value ?? "")
					.toLowerCase()
					.includes(String(filter.value).toLowerCase());
			}),
		);
	}

	function applySorting(rows: Row<T>[]): Row<T>[] {
		const sorting = readState("sorting");
		if (!sorting.length) return rows;
		const sort = sorting[0];
		const column = getColumn(sort.id);
		if (!column || column.columnDef.enableSorting === false || column.columnDef.accessorKey == null) return rows;
		const key = column.columnDef.accessorKey;
		const dir = sort.desc ? -1 : 1;
		return [...rows].sort((a, b) => {
			const av = (a.original as Record<string, unknown>)[key];
			const bv = (b.original as Record<string, unknown>)[key];
			if (typeof av === "number" && typeof bv === "number") {
				return av < bv ? -dir : av > bv ? dir : 0;
			}
			return dir * String(av ?? "").localeCompare(String(bv ?? ""));
		});
	}

	function getFilteredRows(): Row<T>[] {
		return applySorting(applyFilters(getAllRows()));
	}

	function getPageRows(): Row<T>[] {
		const rows = getFilteredRows();
		const { pageIndex, pageSize } = readState("pagination");
		const start = pageIndex * pageSize;
		return rows.slice(start, start + pageSize);
	}

	const table: Table<T> = {
		getHeaderGroups() {
			const headers = getVisibleColumns().map((column) => ({
				id: `header-${column.id}`,
				isPlaceholder: false,
				column,
				getContext() {
					return { column, table };
				},
			}));
			return [{ id: "0", headers }];
		},
		getRowModel() {
			return { rows: getPageRows() };
		},
		getFilteredRowModel() {
			return { rows: getFilteredRows() };
		},
		getFilteredSelectedRowModel() {
			return { rows: getFilteredRows().filter((row) => row.getIsSelected()) };
		},
		getSelectedRowModel() {
			return { rows: getAllRows().filter((row) => row.getIsSelected()) };
		},
		getAllColumns() {
			return getAllColumns();
		},
		getColumn(id) {
			return getColumn(id);
		},
		getIsAllPageRowsSelected() {
			const rows = getPageRows();
			return rows.length > 0 && rows.every((row) => row.getIsSelected());
		},
		getIsSomePageRowsSelected() {
			return getPageRows().some((row) => row.getIsSelected());
		},
		toggleAllPageRowsSelected(value?: boolean) {
			const rows = getPageRows();
			const next = value ?? !(rows.length > 0 && rows.every((row) => row.getIsSelected()));
			updateState("rowSelection", (prev) => {
				const copy = { ...prev };
				for (const row of rows) copy[row.id] = next;
				return copy;
			});
		},
		toggleAllRowsSelected(value?: boolean) {
			const rows = getAllRows();
			const next = value ?? !(rows.length > 0 && rows.every((row) => row.getIsSelected()));
			updateState("rowSelection", (prev) => {
				const copy = { ...prev };
				for (const row of rows) copy[row.id] = next;
				return copy;
			});
		},
		getCanPreviousPage() {
			return readState("pagination").pageIndex > 0;
		},
		getCanNextPage() {
			const { pageIndex, pageSize } = readState("pagination");
			return (pageIndex + 1) * pageSize < getFilteredRows().length;
		},
		previousPage() {
			updateState("pagination", (prev) => ({ ...prev, pageIndex: Math.max(0, prev.pageIndex - 1) }));
		},
		nextPage() {
			updateState("pagination", (prev) => ({ ...prev, pageIndex: prev.pageIndex + 1 }));
		},
		setPageIndex(index) {
			updateState("pagination", (prev) => ({ ...prev, pageIndex: index }));
		},
		getState() {
			return tableState;
		},
	};

	return table;
}

export function getCoreRowModel<T>(): () => unknown {
	return () => ({});
}

export function getSortedRowModel<T>(): () => unknown {
	return () => ({});
}

export function getFilteredRowModel<T>(): () => unknown {
	return () => ({});
}

export function getPaginationRowModel<T>(): () => unknown {
	return () => ({});
}