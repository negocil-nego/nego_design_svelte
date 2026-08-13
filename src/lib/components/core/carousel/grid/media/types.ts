import type { CardMediaProps } from "$lib/components/core/card/types";
import type { CarouselSlotProps } from "$lib/components/core/panel/type";
import type { CarouselHeaderProps } from "../../types";

/**
 * Props do CarouselGridMedia — layout em grid de cards de mídia
 * (imagens/vídeos). Em telas mobile o grid vira carousel com swipe.
 */
export interface CarouselMediaProps {
    /** Props do cabeçalho do carousel (título, descrição, etc.) */
    headerProps?: CarouselHeaderProps;
    /** Props do slot/container do carousel (botões navegação, plugins) */
    slotProps?: CarouselSlotProps;
    /** Classe CSS adicional para o container do grid */
    gridClass?: string;
    /** Variante visual do card: 1 ou 2 */
    variant?: 1 | 2;
    /** Lista de itens de mídia para exibir nos cards */
    items: CardMediaProps[];
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
}
