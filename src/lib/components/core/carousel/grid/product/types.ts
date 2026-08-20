import type { CardProductProps } from "$lib/components/core/card/types";
import type { CarouselSlotProps } from "$lib/components/core/panel/type";
import type { CarouselHeaderProps } from "../../types";

/**
 * Props do CarouselGridProduct — layout em grid de cards de product
 */
export interface CarouselGridProductProps {
    /** Props do cabeçalho do carousel (título, descrição, etc.) */
    headerProps?: CarouselHeaderProps;
    /** Props do slot/container do carousel (botões navegação, plugins) */
    slotProps?: CarouselSlotProps;
    /** Classe CSS adicional para o container do grid */
    gridClass?: string;
    /** Variante visual do card: 1 ou 2 */
    variant?: 1 | 2;
    /** Lista de perfis para exibir nos cards */
    items: CardProductProps[];
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    isDescriptionIcon?: boolean;
    isDescriptionLabel?: boolean;
    onClickBuy?: (id: string | number) => void;
    /** Callback ao clicar no botão carrinho */
    onClickShop?: (id: string | number) => void;
    /** Callback ao clicar no botão favorito */
    onClickFavorite?: (id: string | number) => void;
}
