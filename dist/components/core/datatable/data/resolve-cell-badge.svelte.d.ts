import type { CellContext } from "@tanstack/table-core";
type BadgeConfig = {
    className?: string;
    value: string;
    label?: string;
};
export declare function resolveCellBadge<T>(configCell: string | ((context: CellContext<T, unknown>) => any), badge?: BadgeConfig[]): (context: CellContext<T, unknown>) => any;
export {};
