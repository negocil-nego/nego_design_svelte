
import type { ColumnDef } from "$lib/components/ui/data-table";
import { renderComponent } from "$lib/components/ui/data-table";
import DataTableDragHandle from "./DataTableDragHandle.svelte";
import DataTableCheckbox from "./DataTableCheckbox.svelte";

export function createDragColumn<T>(): ColumnDef<T> {
    return {
        id: "drag",
        header: () => null,
        cell: () => renderComponent(DataTableDragHandle, {}),
        enableSorting: false,
        enableHiding: false,
    };
}

export function createSelectColumn<T>(): ColumnDef<T> {
    return {
        id: "select",
        header: ({ table }) =>
            renderComponent(DataTableCheckbox, {
                class: "w-[15px]",
                checked: table.getIsAllPageRowsSelected(),
                indeterminate:
                    table.getIsSomePageRowsSelected() &&
                    !table.getIsAllPageRowsSelected(),
                onCheckedChange: (value: boolean) =>
                    table.toggleAllPageRowsSelected(!!value),
                "aria-label": "Select all",
            }),
        cell: ({ row }) =>
            renderComponent(DataTableCheckbox, {
                class: "w-[15px]",
                checked: row.getIsSelected(),
                onCheckedChange: (value: boolean) => row.toggleSelected(!!value),
                "aria-label": "Select row",
            }),
        enableSorting: false,
        enableHiding: false,
    };
}
