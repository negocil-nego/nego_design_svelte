import type { CellContext } from "@tanstack/table-core"
import { createRawSnippet } from "svelte"
import { renderSnippet } from "$lib/components/ui/data-table"

export function resolveCell<T>(
    configCell: string | ((context: CellContext<T, unknown>) => any),
): (context: CellContext<T, unknown>) => any {
    if (typeof configCell === "string") {
        const key = configCell;
        return ({ row }: CellContext<T, unknown>) => {
            const snippet = createRawSnippet<[{ value: string }]>((getProps) => {
                const { value } = getProps();
                return {
                    render: () => `<div class="capitalize">${value}</div>`,
                };
            });
            return renderSnippet(snippet, {
                value: String((row.original as Record<string, unknown>)[key]),
            });
        };
    }
    return configCell;
}
