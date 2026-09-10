import type { CellContext } from "$lib/components/ui/data-table"
import { createRawSnippet } from "svelte"
import { renderSnippet } from "$lib/components/ui/data-table"

export function resolveCell<T>(
    configCell: string | ((context: CellContext<T, unknown>) => unknown),
): (context: CellContext<T, unknown>) => unknown {
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
