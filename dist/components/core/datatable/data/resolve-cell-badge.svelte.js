import { renderComponent, renderSnippet } from "../../../ui/data-table";
import { createRawSnippet } from "svelte";
import { Badge } from "../../../ui/badge";
import { resolveCell } from "./resolve-cell.svelte";
export function resolveCellBadge(configCell, badge) {
    if (typeof configCell === "string" && badge && badge.length > 0) {
        const key = configCell;
        const badgeMap = new Map(badge.map((b) => [b.value, b]));
        return ({ row }) => {
            const cellValue = String(row.original[key]);
            const matchedBadge = badgeMap.get(cellValue);
            if (matchedBadge) {
                const displayText = matchedBadge.label ?? cellValue;
                const badgeSnippet = createRawSnippet(() => ({
                    render: () => displayText,
                }));
                return renderComponent(Badge, {
                    class: matchedBadge.className,
                    children: badgeSnippet,
                });
            }
            const fallbackSnippet = createRawSnippet((getProps) => {
                const { value } = getProps();
                return {
                    render: () => `<div class="capitalize">${value}</div>`,
                };
            });
            return renderSnippet(fallbackSnippet, { value: cellValue });
        };
    }
    return resolveCell(configCell);
}
