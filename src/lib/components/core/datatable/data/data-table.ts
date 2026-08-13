import type { CellContext, HeaderContext } from "@tanstack/table-core"
import type { Component } from "svelte"

/**
 * Definição completa de uma tabela de dados genérica.
 * Usada pelo DataTableCore para renderizar colunas, cabeçalhos,
 * células, badges, ações por linha e filtros.
 *
 * @template T Tipo genérico dos itens/linhas da tabela.
 */
export interface DataTableItem<T = unknown> {
    /** Definição das colunas da tabela */
    config: {
        /** Chave de acesso ao valor na linha (ex: "name", "email") */
        accessorKey: string
        /** Cabeçalho da coluna: string estática ou função que renderiza componente customizado */
        header: string | ((context: HeaderContext<T, unknown>) => any)
        /** Conteúdo da célula: string (valor simples) ou função que renderiza componente customizado */
        cell: string | ((context: CellContext<T, unknown>) => any)
        /** Habilita/desabilita ordenação nesta coluna */
        enableSorting?: boolean
        /** Habilita/desabilita ocultação da coluna */
        enableHiding?: boolean
        /** Configuração opcional de badges (etiquetas coloridas) renderizadas na célula */
        badge?: {
            /** Classe CSS adicional para o badge */
            className?: string
            /** Valor que ativa este badge (comparado com o valor da célula) */
            value: string
            /** Label exibida no badge (se omitido, usa o próprio valor) */
            label?: string
        }[]
    }[]
    /** Chave da coluna usada para o filtro de pesquisa global/list filter */
    columnFilter?: keyof T & string;
    /** Componente Svelte renderizado na coluna de ações de cada linha */
    actions?: Component<any>
    /** Array de itens/linhas para popular a tabela */
    items?: T[]
}

/**
 * Alias de DataTableItem<T> — props do componente DataTableCore.
 * @template T Tipo genérico dos itens/linhas.
 */
export type DataTableCoreProps<T = unknown> = DataTableItem<T>;
