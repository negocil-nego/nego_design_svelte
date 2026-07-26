import type { CellContext } from "@tanstack/table-core";
export declare function resolveCell<T>(configCell: string | ((context: CellContext<T, unknown>) => any)): (context: CellContext<T, unknown>) => any;
