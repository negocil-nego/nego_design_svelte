import type { CardMediaProps } from "$lib/components/core/card/types";
import type { SimpleGridProps } from "$lib/components/core/grid/data/types";
import type { CarouselSlotProps } from "$lib/components/core/panel/type";
import type { CarouselHeaderProps } from "../../types";

/**
 * Props do CarouselGridMedia — layout em grid de cards de mídia
 * (imagens/vídeos). Em telas mobile o grid vira carousel com swipe.
 */
export interface CarouselGridMediaProps {
    gridSimple?: SimpleGridProps,
    /** Props do cabeçalho do carousel (título, descrição, etc.) */
    headerProps?: CarouselHeaderProps;
    /** Props do slot/container do carousel (botões navegação, plugins) */
    slotProps?: CarouselSlotProps;
    /** Classe CSS adicional para o container do grid */
    gridClass?: string;
    /** Exibe ícone antes da descrição */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição */
    isDescriptionLabel?: boolean;
    /** Variante visual do card: 1 ou 2 */
    variant?: 1 | 2;
    /** Lista de itens de mídia para exibir nos cards */
    items: CardMediaProps[];
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    /** Exibe o botão de maximizar no vídeo */
    isVideoButtonMaximized?: boolean;
    /** Exibe o botão de maximizar na imagem */
    isImageButtonMaximized?: boolean;
    /** Callback acionado ao clicar no botão de favorito */
    onFavoriteClick?: (id: string | number) => void;
    /** Callback acionado ao clicar no botão de perfil */
    onButtonProfile?: (id: string | number) => void;
    /** Callback acionado ao clicar no botão de detalhes */
    onButtonDetails?: (id: string | number) => void;
}
