import type { CellContext } from "$lib/components/ui/data-table"
import { renderComponent, renderSnippet } from "$lib/components/ui/data-table"
import { createRawSnippet } from "svelte"
import { SvelteMap } from "svelte/reactivity"
import { Badge } from "$lib/components/ui/badge"
import { resolveCell, type ConfigCell } from "./resolve-cell.svelte"

type BadgeConfig = {
    className?: string
    value: string
    label?: string
}

/**
 * Renderizador de célula com suporte a badges.
 *
 * A chave do valor na linha vem do `cell` quando é string e, caso contrário,
 * do `fallbackKey` (o `accessorKey` da coluna) — assim uma coluna pode
 * definir apenas `{ accessorKey: "status", badge: [...] }` ou usar
 * `cell: null` sem perder os badges.
 */
export function resolveCellBadge<T>(
    configCell?: ConfigCell<T>,
    badge?: BadgeConfig[],
    fallbackKey?: string,
): (context: CellContext<T, unknown>) => unknown {
    const key = typeof configCell === "string" ? configCell : fallbackKey;

    if (key && badge && badge.length > 0) {
        const badgeMap = new SvelteMap(badge.map((b) => [b.value, b]));

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

    return resolveCell(configCell, fallbackKey);
}
