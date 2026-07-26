import { createRawSnippet } from "svelte";
import { renderSnippet } from "../../../ui/data-table";
export function resolveHeader(configHeader) {
    if (typeof configHeader === "string") {
        const text = configHeader;
        return ({ column }) => {
            const snippet = createRawSnippet((getProps) => {
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
