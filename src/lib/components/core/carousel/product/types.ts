import type { CardProductProps } from "../../card/types";
import type { CarouselSlotProps } from "../../panel/type";
import type { CarouselHeaderProps } from "../types";

/**
 * Props do CarouselProduct — carousel de cards de produto
 * com preços antigo/novo e botões de compra.
 */
export interface CarouselProductProps {
    /** Props do cabeçalho do carousel (título, descrição, etc.) */
    headerProps?: CarouselHeaderProps;
    /** Props do slot/container do carousel (botões navegação, plugins) */
    slotProps?: CarouselSlotProps;
    /** Lista de promoções para exibir */
    items: CardProductProps[]
    /** Exibe ícone antes da descrição do card */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição do card */
    isDescriptionLabel?: boolean;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean,
}
