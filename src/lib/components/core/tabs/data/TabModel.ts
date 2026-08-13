import type { Snippet } from "svelte"

/**
 * Item básico de uma aba — valor identificador e label visível.
 */
export interface TabItem {
    /** Texto exibido na aba */
    label: string
    /** Valor único identificador da aba */
    value: string
}

/**
 * Props completas de uma aba no TabUnderline — item (label/value)
 * mais o conteúdo (Snippet) renderizado quando a aba está ativa.
 */
export interface TabProps {
    /** Dados da aba (label + valor) */
    item: TabItem
    /** Snippet com o conteúdo exibido ao selecionar a aba */
    children?: Snippet
}
