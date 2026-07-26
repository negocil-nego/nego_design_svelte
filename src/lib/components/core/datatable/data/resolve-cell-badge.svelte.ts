import type { CellContext } from "@tanstack/table-core"
import { renderComponent, renderSnippet } from "$lib/components/ui/data-table"
import { createRawSnippet } from "svelte"
import { Badge } from "$lib/components/ui/badge"
import { resolveCell } from "./resolve-cell.svelte"

type BadgeConfig = {
    className?: string
    value: string
    label?: string
}

export function resolveCellBadge<T>(
    configCell: string | ((context: CellContext<T, unknown>) => any),
    badge?: BadgeConfig[],
): (context: CellContext<T, unknown>) => any {
    if (typeof configCell === "string" && badge && badge.length > 0) {
        const key = configCell;
        const badgeMap = new Map(badge.map((b) => [b.value, b]));

        return ({ row }: CellContext<T, unknown>) => {
            const cellValue = String((row.original as Record<string, unknown>)[key]);
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

            const fallbackSnippet = createRawSnippet<[{ value: string }]>((getProps) => {
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
