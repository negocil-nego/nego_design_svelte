<script lang="ts" generics="T">
    import Button from "$lib/components/button.svelte";
    import type { Table } from "@tanstack/table-core";

    type Props = {
        table: Table<T>;
    };

    let { table }: Props = $props();
</script>

<div class="flex items-center justify-end space-x-2 pt-4">
    <div class="text-muted-foreground flex-1 text-sm">
        {table.getFilteredSelectedRowModel().rows.length} of
        {table.getFilteredRowModel().rows.length} row(s) selected.
    </div>
    <div class="space-x-2">
        <Button
            variant="outline"
            size="sm"
            onclick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
        >
            Previous
        </Button>
        <Button
            variant="outline"
            size="sm"
            onclick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
        >
            Next
        </Button>
    </div>
</div>
