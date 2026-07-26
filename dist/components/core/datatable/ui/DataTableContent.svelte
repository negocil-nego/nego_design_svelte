<script lang="ts" generics="T">
    import type {
        ColumnDef,
        Table as TanstackTable,
    } from "@tanstack/table-core";
    import * as Table from "../../../ui/table/index.js";
    import FlexRender from "../../../ui/data-table/flex-render.svelte";

    type Props = {
        table: TanstackTable<T>;
        columns: ColumnDef<T>[];
    };

    let { table, columns }: Props = $props();
</script>

<div class="rounded-md border">
    <Table.Root>
        <Table.Header>
            {#each table.getHeaderGroups() as headerGroup (headerGroup.id)}
                <Table.Row>
                    {#each headerGroup.headers as header (header.id)}
                        <Table.Head class="[&:has([role=checkbox])]:ps-3">
                            {#if !header.isPlaceholder}
                                <FlexRender
                                    content={header.column.columnDef.header}
                                    context={header.getContext()}
                                />
                            {/if}
                        </Table.Head>
                    {/each}
                </Table.Row>
            {/each}
        </Table.Header>
        <Table.Body>
            {#each table.getRowModel().rows as row (row.id)}
                <Table.Row data-state={row.getIsSelected() && "selected"}>
                    {#each row.getVisibleCells() as cell (cell.id)}
                        <Table.Cell class="[&:has([role=checkbox])]:ps-3">
                            <FlexRender
                                content={cell.column.columnDef.cell}
                                context={cell.getContext()}
                            />
                        </Table.Cell>
                    {/each}
                </Table.Row>
            {:else}
                <Table.Row>
                    <Table.Cell
                        colspan={columns.length}
                        class="h-24 text-center"
                    >
                        No results.
                    </Table.Cell>
                </Table.Row>
            {/each}
        </Table.Body>
    </Table.Root>
</div>
