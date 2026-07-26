import type { HeaderContext } from "@tanstack/table-core";
export declare function resolveHeader<T>(configHeader: string | ((context: HeaderContext<T, unknown>) => any)): (context: HeaderContext<T, unknown>) => any;
