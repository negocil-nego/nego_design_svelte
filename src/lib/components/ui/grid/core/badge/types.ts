import type { ItemGridBadge } from "../types"

/**
 * Props do GridBadge — grid de badges/categorias
 * com orientação horizontal ou vertical.
 */
export interface GridBadgeProps {
    /** Lista de itens do grid de badges */
    items: ItemGridBadge[]
    /** Orientação do conteúdo do item: horizontal (padrão) ou vertical */
    orientation?: "horizontal" | "vertical",
    /** Classe CSS personalizada para a imagem */
    imageClass?: string,
    /** Classe CSS personalizada para o ícone */
    iconClass?: string,
    /** Classe CSS personalizada para o label */
    labelClass?: string,
    /** Classe CSS personalizada para o estado ativo */
    activeClass?: string,
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean,
    itemClass?: string,
    isBorderInline?: boolean,
    /** Classe CSS adicional para o container do grid */
    gridClass?: string,
    menuKey?: string
    itemStyle?: 'BORDER' | 'INLINE' | 'DEFAULT',
    onClick?: (value: string | number) => void,
}
