<script lang="ts" generics="T">
    import {
        type ColumnDef,
        type ColumnFiltersState,
        type PaginationState,
        type RowSelectionState,
        type SortingState,
        type VisibilityState,
        getCoreRowModel,
        getFilteredRowModel,
        getPaginationRowModel,
        getSortedRowModel,
    } from "@tanstack/table-core";
    import type { DataTableItem } from "../data/data-table";
    import { resolveHeader } from "../data/resolve-header.svelte";
    import { resolveCell } from "../data/resolve-cell.svelte";
    import { createSvelteTable } from "$lib/components/ui/data-table";
    import DataTableListFilter from "./DataTableListFilter.svelte";
    import DataTableContent from "./DataTableContent.svelte";
    import DataTableListPagination from "./DataTableListPagination.svelte";

    let { config, columnFilter, items = [] }: DataTableItem<T> = $props();

    let columns: ColumnDef<T>[] = $derived(
        config.map((it) => ({
            accessorKey: it.accessorKey,
            header: resolveHeader(it.header),
            cell: resolveCell(it.cell),
            enableSorting: it.enableSorting,
            enableHiding: it.enableHiding,
        })),
    );

    let pagination = $state<PaginationState>({ pageIndex: 0, pageSize: 10 });
    let columnFilters = $state<ColumnFiltersState>([]);
    let columnVisibility = $state<VisibilityState>({});
    let rowSelection = $state<RowSelectionState>({});
    let sorting = $state<SortingState>([]);

    let table = $derived(
        createSvelteTable({
            data: items,
            columns,
            state: {
                pagination,
                sorting,
                columnVisibility,
                rowSelection,
                columnFilters,
            },
            getCoreRowModel: getCoreRowModel(),
            getPaginationRowModel: getPaginationRowModel(),
            getSortedRowModel: getSortedRowModel(),
            getFilteredRowModel: getFilteredRowModel(),
            onPaginationChange: (
                updater:
                    | PaginationState
                    | ((arg0: PaginationState) => PaginationState),
            ) => {
                if (typeof updater === "function") {
                    pagination = updater(pagination);
                } else {
                    pagination = updater;
                }
            },
            onSortingChange: (
                updater: SortingState | ((arg0: SortingState) => SortingState),
            ) => {
                if (typeof updater === "function") {
                    sorting = updater(sorting);
                } else {
                    sorting = updater;
                }
            },
            onColumnFiltersChange: (
                updater:
                    | ColumnFiltersState
                    | ((arg0: ColumnFiltersState) => ColumnFiltersState),
            ) => {
                if (typeof updater === "function") {
                    columnFilters = updater(columnFilters);
                } else {
                    columnFilters = updater;
                }
            },
            onColumnVisibilityChange: (
                updater:
                    | VisibilityState
                    | ((arg0: VisibilityState) => VisibilityState),
            ) => {
                if (typeof updater === "function") {
                    columnVisibility = updater(columnVisibility);
                } else {
                    columnVisibility = updater;
                }
            },
            onRowSelectionChange: (
                updater:
                    | RowSelectionState
                    | ((arg0: RowSelectionState) => RowSelectionState),
            ) => {
                if (typeof updater === "function") {
                    rowSelection = updater(rowSelection);
                } else {
                    rowSelection = updater;
                }
            },
        }),
    );
</script>

<div class="-mb-8 w-full">
    <DataTableListFilter {table} column={columnFilter} />
    <DataTableContent {table} {columns} />
    <DataTableListPagination {table} />
</div>
