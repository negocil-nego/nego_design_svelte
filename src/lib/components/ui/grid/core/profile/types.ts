import type { CardProfileProps } from "$lib/components/ui/card/core/types";
import type { GridHeaderProps } from "../types";

/**
 * Props do GridProfile — grid de cards de perfil
 * (guias, intérpretes, organizações).
 */
export interface GridProfileProps {
    /** Props do cabeçalho do grid (título, descrição, etc.) */
    headerProps?: GridHeaderProps;
    /** Classe CSS adicional para o container do grid */
    gridClass?: string;
    /** Variante visual do card: 1 ou 2 */
    variant?: 1 | 2;
    /** Lista de perfis para exibir nos cards */
    items: CardProfileProps[];
    /** Exibe ícone antes da descrição do card */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição do card */
    isDescriptionLabel?: boolean;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    /** Callback ao clicar no botão favorito */
    onFavoriteClick?: (id: string | number) => void;
    /** Callback ao clicar no botão perfil */
    onButtonProfile?: (id: string | number) => void;
    /** Callback ao clicar no botão email */
    onEmailClick?: (id: string | number) => void;
    /** Callback ao clicar no botão whatsapp */
    onWhatsappClick?: (id: string | number) => void;
}
