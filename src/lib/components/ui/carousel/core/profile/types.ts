import type { CardProfileProps } from "$lib/components/ui/card/core/types";
import type { CarouselSlotProps } from "$lib/components/ui/panel/type";
import type { CarouselHeaderProps } from "../types";

/**
 * Props do CarouselProfile — carousel de cards de perfil
 * com logo, descrição, tags, rating e botões de perfil/detalhes.
 */
export interface CarouselProfileProps {
    /** Props do cabeçalho do carousel (título, descrição, etc.) */
    headerProps?: CarouselHeaderProps;
    /** Props do slot/container do carousel (botões navegação, plugins) */
    slotProps?: CarouselSlotProps;
    /** Lista de perfis para exibir */
    items: CardProfileProps[];
    /** Variante do card (1 ou 2) */
    variant?: 1 | 2;
    /** Exibe ícone antes da descrição do card */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição do card */
    isDescriptionLabel?: boolean;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
}
