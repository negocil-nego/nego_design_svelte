import type { ItemGridProps } from "$lib/components/ui/grid/core/shared/data/types";
import type { GridHeaderProps } from "../types";

/**
 * Props do GridItemsPanel — grid de itens (cards Grid01 / Grid02)
 * com cabeçalho, loading skeleton e clique por item.
 */
export interface GridItemsPanelProps {
    /** Props do cabeçalho do grid (título, descrição, etc.) */
    headerProps?: GridHeaderProps;
    /** Classe CSS adicional para o container do grid */
    gridClass?: string;
    /** Lista de itens para exibir */
    items: ItemGridProps[];
    /** Variante do card (1 ou 2) */
    variant?: 1 | 2;
    /** Exibe a descrição do card */
    isShowDescription?: boolean;
    /** Classe CSS adicional dos cards */
    itemClassName?: string;
    /** Classe CSS adicional do container */
    className?: string;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    /** Largura personalizada dos cards (ex: "200px", 200, "100%") */
    width?: string | number;
    /** Altura personalizada dos cards (ex: "180px", 180) */
    height?: string | number;
    /** Alias para width */
    itemWidth?: string | number;
    /** Alias para height */
    itemHeight?: string | number;
    /** Callback disparado ao clicar num item */
    onClick?: (id: string | number) => void;
}
