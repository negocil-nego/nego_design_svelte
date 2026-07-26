import type { CellContext, HeaderContext } from "@tanstack/table-core"

export interface DataTableItem<T = unknown> {
    config: {
        accessorKey: string
        header: string | HeaderContext<T, unknown>
        cell: string | CellContext<T, unknown>
        enableSorting?: boolean,
        enableHiding?: boolean,
    }[]
    items?: T[]
}