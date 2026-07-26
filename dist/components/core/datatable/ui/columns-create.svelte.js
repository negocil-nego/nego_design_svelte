import { renderComponent } from "../../../ui/data-table";
import DataTableDragHandle from "./DataTableDragHandle.svelte";
import DataTableCheckbox from "./DataTableCheckbox.svelte";
export function createDragColumn() {
    return {
        id: "drag",
        header: () => null,
        cell: () => renderComponent(DataTableDragHandle, {}),
        enableSorting: false,
        enableHiding: false,
    };
}
export function createSelectColumn() {
    return {
        id: "select",
        header: ({ table }) => renderComponent(DataTableCheckbox, {
            class: "w-[15px]",
            checked: table.getIsAllPageRowsSelected(),
            indeterminate: table.getIsSomePageRowsSelected() &&
                !table.getIsAllPageRowsSelected(),
            onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
            "aria-label": "Select all",
        }),
        cell: ({ row }) => renderComponent(DataTableCheckbox, {
            class: "w-[15px]",
            checked: row.getIsSelected(),
            onCheckedChange: (value) => row.toggleSelected(!!value),
            "aria-label": "Select row",
        }),
        enableSorting: false,
        enableHiding: false,
    };
}
