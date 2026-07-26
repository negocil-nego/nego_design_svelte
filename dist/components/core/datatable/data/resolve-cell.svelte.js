import { createRawSnippet } from "svelte";
import { renderSnippet } from "../../../ui/data-table";
export function resolveCell(configCell) {
    if (typeof configCell === "string") {
        const key = configCell;
        return ({ row }) => {
            const snippet = createRawSnippet((getProps) => {
                const { value } = getProps();
                return {
                    render: () => `<div class="capitalize">${value}</div>`,
                };
            });
            return renderSnippet(snippet, {
                value: String(row.original[key]),
            });
        };
    }
    return configCell;
}
