import type { CardProductProps } from "$lib/components/ui/card/core/types";
import type { GridHeaderProps } from "../types";

/**
 * Props do GridProduct — grid de cards de produto
 * com preços antigo/novo e botões de compra.
 */
export interface GridProductProps {
    /** Props do cabeçalho do grid (título, descrição, etc.) */
    headerProps?: GridHeaderProps;
    /** Classe CSS adicional para o container do grid */
    gridClass?: string;
    /** Variante visual do card: 1 ou 2 */
    variant?: 1 | 2;
    /** Lista de produtos para exibir */
    items: CardProductProps[];
    /** Exibe ícone antes da descrição do card */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição do card */
    isDescriptionLabel?: boolean;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    /** Callback ao clicar no botão comprar */
    onClickBuy?: (id: string | number) => void;
    /** Callback ao clicar no botão carrinho */
    onClickShop?: (id: string | number) => void;
    /** Callback ao clicar no botão favorito */
    onClickFavorite?: (id: string | number) => void;
}
