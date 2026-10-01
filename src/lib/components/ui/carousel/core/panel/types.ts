import type { CarouselSlotProps, ItemGridProps } from "$lib/types";
import type { CarouselHeaderProps } from "../types";

export interface CarouselItemsPanelProps {
    /** Props do cabeçalho do carousel (título, descrição, etc.) */
    headerProps?: CarouselHeaderProps;
    /** Props do slot/container do carousel (botões navegação, plugins) */
    slotProps?: CarouselSlotProps;
    /** Lista de itens de mídia para exibir */
    items: ItemGridProps[];
    /** Variante do card (1 ou 2) */
    variant?: 1 | 2;
    /** Exibe ícone antes da descrição do card */
    isShowDescription?: boolean;
    /** Exibe etiqueta (label) na descrição do card */
    itemClassName?: string;
    /** Classe CSS adicional do container */
    className?: string;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    style?: "inline" | "grid";
    isScrollbar?: boolean;
    /** Número de colunas da grade em cada slide (padrão: 3) */
    gridColumns?: number;
    /** Número de linhas da grade em cada slide (padrão: 3) */
    rowColumns?: number;
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
    /** Habilita rotação automática */
    autoPlay?: boolean;
}