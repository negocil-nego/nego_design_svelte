import type { CellContext } from "$lib/components/ui/data-table"
import { createRawSnippet } from "svelte"
import { renderSnippet } from "$lib/components/ui/data-table"

/**
 * Conteúdo de célula aceite pelo `DataTableItem`: a chave do valor na linha,
 * uma função que renderiza o conteúdo, ou `null`/`undefined` para usar
 * automaticamente o `accessorKey` da coluna.
 */
export type ConfigCell<T> =
    | string
    | ((context: CellContext<T, unknown>) => unknown)
    | null
    | undefined

/** Renderiza o valor bruto da linha para a chave indicada. */
function renderValue<T>(key: string): (context: CellContext<T, unknown>) => unknown {
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

/**
 * Converte o `cell` de uma coluna num renderizador.
 *
 * - string → renderiza o valor da chave na linha;
 * - função → é devolvida intacta;
 * - `null`/`undefined` → usa `fallbackKey` (o `accessorKey` da coluna) ou, na
 *   ausência deste, o valor que a própria coluna devolve (`ctx.getValue()`).
 */
export function resolveCell<T>(
    configCell: ConfigCell<T>,
    fallbackKey?: string,
): (context: CellContext<T, unknown>) => unknown {
    if (typeof configCell === "function") return configCell
    const key = typeof configCell === "string" ? configCell : fallbackKey
    if (key) return renderValue<T>(key)

    return ({ getValue }: CellContext<T, unknown>) => {
        const snippet = createRawSnippet<[{ value: string }]>((getProps) => {
            const { value } = getProps();
            return {
                render: () => `<div class="capitalize">${value}</div>`,
            };
        });
        return renderSnippet(snippet, { value: String(getValue()) });
    };
}
