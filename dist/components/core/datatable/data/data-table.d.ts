import type { CellContext, HeaderContext } from "@tanstack/table-core";
import type { Component } from "svelte";
export interface DataTableItem<T = unknown> {
    config: {
        accessorKey: string;
        header: string | ((context: HeaderContext<T, unknown>) => any);
        cell: string | ((context: CellContext<T, unknown>) => any);
        enableSorting?: boolean;
        enableHiding?: boolean;
        badge?: {
            className?: string;
            value: string;
            label?: string;
        }[];
    }[];
    columnFilter?: keyof T & string;
    actions?: Component<any>;
    items?: T[];
}
