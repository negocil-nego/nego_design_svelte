import type { CardProfileProps } from "$lib/components/core/card/types";
import type { CarouselSlotProps } from "$lib/components/core/panel/type";
import type { CarouselHeaderProps } from "../../types";

/**
 * Props do CarouselGridProfile — layout em grid de cards de perfil
 * (guias, intérpretes, organizações). Em mobile vira carousel com swipe.
 */
export interface CarouselGridProfileProps {
    /** Props do cabeçalho do carousel (título, descrição, etc.) */
    headerProps?: CarouselHeaderProps;
    /** Props do slot/container do carousel (botões navegação, plugins) */
    slotProps?: CarouselSlotProps;
    /** Classe CSS adicional para o container do grid */
    gridClass?: string;
    /** Variante visual do card: 1 ou 2 */
    variant?: 1 | 2;
    /** Lista de perfis para exibir nos cards */
    items: CardProfileProps[];
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
}
