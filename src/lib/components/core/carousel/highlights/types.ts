import type { CardHighlightProps } from "../../card/types";
import type { CarouselSlotProps } from "../../panel/type";
import type { CarouselHeaderProps } from "../types";

/**
 * Props do CarouselHighlights — carousel de cards de destaque
 * (organizações, serviços em evidência).
 */
export interface CarouselHighlightsProps {
    /** Props do cabeçalho do carousel (título, descrição, etc.) */
    headerProps?: CarouselHeaderProps;
    /** Props do slot/container do carousel (botões navegação, plugins) */
    slotProps?: CarouselSlotProps;
    /** Lista de itens de destaque */
    items: CardHighlightProps[]
    /** Variante visual do card: 1 ou 2 */
    varient?: 1 | 2;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean,
    /** Exibe ícone antes da descrição do card */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição do card */
    isDescriptionLabel?: boolean;
}
