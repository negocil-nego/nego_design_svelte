import type { ItemCarousel } from "../types"

/**
 * Props do CarouselBadge — carousel de badges/categorias
 * com orientação horizontal ou vertical.
 */
export interface CarouselBadgeProps {
    /** Lista de itens do carousel de badges */
    items: ItemCarousel[]
    /** Orientação do layout: horizontal (padrão) ou vertical */
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
    btnNavClass?: string,
    isBorderInline?: boolean,
    showButton?: boolean
    itemStyle?: 'BORDER' | 'INLINE' | 'DEFAULT',
    onClick?: (value: string | number) => void,
}