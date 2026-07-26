import { renderComponent } from "../../../ui/data-table";
import DataTableDragHandle from "../ui/DataTableDragHandle.svelte";
import DataTableCheckbox from "../ui/DataTableCheckbox.svelte";
export function createDragColumn() {
    return {
        id: "drag",
        size: 24,
        minSize: 24,
        header: () => null,
        cell: () => renderComponent(DataTableDragHandle, {}),
        enableSorting: false,
        enableHiding: false,
    };
}
export function createSelectColumn() {
    return {
        id: "select",
        size: 24,
        minSize: 24,
        header: ({ table }) => renderComponent(DataTableCheckbox, {
            checked: table.getIsAllPageRowsSelected(),
            indeterminate: table.getIsSomePageRowsSelected() &&
                !table.getIsAllPageRowsSelected(),
            onCheckedChange: (value) => table.toggleAllPageRowsSelected(!!value),
            "aria-label": "Select all",
        }),
        cell: ({ row }) => renderComponent(DataTableCheckbox, {
            checked: row.getIsSelected(),
            onCheckedChange: (value) => row.toggleSelected(!!value),
            "aria-label": "Select row",
        }),
        enableSorting: false,
        enableHiding: false,
    };
}
