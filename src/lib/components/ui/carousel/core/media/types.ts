import type { CardMediaProps } from "$lib/components/ui/card/core/types";
import type { CarouselSlotProps } from "$lib/components/ui/panel/type";
import type { CarouselHeaderProps } from "../types";

/**
 * Props do CarouselMedia — carousel de cards de mídia
 * com imagem/vídeo, tags, rating e botões de perfil/detalhes.
 */
export interface CarouselMediaProps {
    /** Props do cabeçalho do carousel (título, descrição, etc.) */
    headerProps?: CarouselHeaderProps;
    /** Props do slot/container do carousel (botões navegação, plugins) */
    slotProps?: CarouselSlotProps;
    /** Lista de itens de mídia para exibir */
    items: CardMediaProps[];
    /** Variante do card (1 ou 2) */
    variant?: 1 | 2;
    /** Exibe ícone antes da descrição do card */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição do card */
    isDescriptionLabel?: boolean;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
}
