import type { HeaderContext } from "@tanstack/table-core"
import { createRawSnippet } from "svelte"
import { renderSnippet } from "$lib/components/ui/data-table"

export function resolveHeader<T>(
    configHeader: string | ((context: HeaderContext<T, unknown>) => any),
): (context: HeaderContext<T, unknown>) => any {
    if (typeof configHeader === "string") {
        const text = configHeader;
        return ({ column }: HeaderContext<T, unknown>) => {
            const snippet = createRawSnippet<[{ text: string }]>((getProps) => {
                const { text } = getProps();
                return {
                    render: () => `<div class="capitalize">${text}</div>`,
                };
            });
            return renderSnippet(snippet, { text });
        };
    }
    return configHeader;
}
