import type { CardHighlightProps } from "$lib/components/ui/card/core/types";
import type { GridHeaderProps } from "../types";

/**
 * Props do GridHighlights — grid de cards de destaque
 * (organizações, serviços em evidência).
 */
export interface GridHighlightsProps {
    /** Props do cabeçalho do grid (título, descrição, etc.) */
    headerProps?: GridHeaderProps;
    /** Classe CSS adicional para o container do grid */
    gridClass?: string;
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
    onClickFavorite?: (id: string | number) => void;
    /** Callback ao clicar no botão principal */
    onClickBtn?: (id: string | number) => void;
}
