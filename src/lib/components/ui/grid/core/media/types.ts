import type { CardMediaProps } from "$lib/components/ui/card/core/types";
import type { GridHeaderProps } from "../types";

/**
 * Props do GridMedia — grid de cards de mídia (imagens/vídeos)
 * com tags, rating e botões de perfil/detalhes.
 */
export interface GridMediaProps {
    /** Props do cabeçalho do grid (título, descrição, etc.) */
    headerProps?: GridHeaderProps;
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
