<script lang="ts" generics="T">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
            import type { Table } from "$lib/components/ui/data-table";

    type Props = {
        table: Table<T>;
        column?: keyof T & string;
    };

    let { table, column }: Props = $props();
</script>

<div class="flex items-center py-4">
    <Input
        placeholder="Filter emails..."
        value={(column
            ? (table.getColumn(column)?.getFilterValue() as string)
            : "") ?? ""}
        oninput={(e) =>
            column &&
            table.getColumn(column)?.setFilterValue(e.currentTarget.value)}
        onchange={(e) => {
            if (column) {
                table.getColumn(column)?.setFilterValue(e.currentTarget.value);
            }
        }}
        class="max-w-sm"
    />
    <DropdownMenu.Root>
        <DropdownMenu.Trigger>
            {#snippet child({ props })}
                <Button {...props} variant="outline" class="ms-auto">
                    Columns <ImageHugeicons icon="arrow-down-01" class="ms-2 size-4" />
                </Button>
            {/snippet}
        </DropdownMenu.Trigger>
        <DropdownMenu.Content align="end">
            {#each table
                .getAllColumns()
                .filter((col) => col.getCanHide()) as col (col.id)}
                <DropdownMenu.CheckboxItem
                    class="capitalize"
                    bind:checked={
                        () => col.getIsVisible(),
                        (v) => col.toggleVisibility(!!v)
                    }
                >
                    {col.id}
                </DropdownMenu.CheckboxItem>
            {/each}
        </DropdownMenu.Content>
    </DropdownMenu.Root>
</div>
