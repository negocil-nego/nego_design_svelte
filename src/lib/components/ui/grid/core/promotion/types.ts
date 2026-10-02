import type { CardPromotionProps } from "$lib/components/ui/card/core/types";
import type { GridHeaderProps } from "../types";

/**
 * Props do GridPromotion — grid de cards de promoção
 * com preços antigo/novo e botões de compra.
 */
export interface GridPromotionProps {
    /** Props do cabeçalho do grid (título, descrição, etc.) */
    headerProps?: GridHeaderProps;
    /** Classe CSS adicional para o container do grid */
    gridClass?: string;
    /** Lista de promoções para exibir */
    items: CardPromotionProps[];
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
