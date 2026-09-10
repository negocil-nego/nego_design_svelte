import type { HeaderContext } from "$lib/components/ui/data-table"
import { createRawSnippet } from "svelte"
import { renderSnippet } from "$lib/components/ui/data-table"

export function resolveHeader<T>(
    configHeader: string | ((context: HeaderContext<T, unknown>) => unknown),
): (context: HeaderContext<T, unknown>) => unknown {
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
