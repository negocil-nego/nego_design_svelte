import type { CardPromotionProps } from "../../card/types";
import type { CarouselSlotProps } from "../../panel/type";
import type { CarouselHeaderProps } from "../types";

/**
 * Props do CarouselPromotion — carousel de cards de promoção
 * com preços antigo/novo e botões de compra.
 */
export interface CarouselPromotionProps {
    /** Props do cabeçalho do carousel (título, descrição, etc.) */
    headerProps?: CarouselHeaderProps;
    /** Props do slot/container do carousel (botões navegação, plugins) */
    slotProps?: CarouselSlotProps;
    /** Lista de promoções para exibir */
    items: CardPromotionProps[]
    /** Exibe ícone antes da descrição do card */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição do card */
    isDescriptionLabel?: boolean;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean,
    onClickBuy?: (id: string | number) => void;
    /** Callback ao clicar no botão carrinho */
    onClickShop?: (id: string | number) => void;
    /** Callback ao clicar no botão favorito */
    onClickFavorite?: (id: string | number) => void;
}
