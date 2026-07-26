import type { CellContext, HeaderContext } from "@tanstack/table-core"

export interface DataTableItem<T = unknown> {
    config: {
        accessorKey: string
        header: string | ((context: HeaderContext<T, unknown>) => any)
        cell: string | ((context: CellContext<T, unknown>) => any)
        enableSorting?: boolean
        enableHiding?: boolean
    }[]
    columnFilter?: keyof T & string;
    items?: T[]
}
