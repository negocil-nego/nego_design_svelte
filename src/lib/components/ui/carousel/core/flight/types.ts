import type { CardFlightProps } from "$lib/components/ui/card/core/types";
import type { CarouselSlotProps } from "$lib/components/ui/panel/type";
import type { CarouselHeaderProps } from "../types";

/**
 * Props do CarouselFlight — carousel de cards de viagem/voo
 * com rota (origem → destino), horários e botão de reserva.
 */
export interface CarouselFlightProps {
    /** Props do cabeçalho do carousel (título, descrição, etc.) */
    headerProps?: CarouselHeaderProps;
    /** Props do slot/container do carousel (botões navegação, plugins) */
    slotProps?: CarouselSlotProps;
    /** Lista de viagens para exibir */
    items: CardFlightProps[];
    /** Variante do card (1 ou 2) */
    variant?: 1 | 2;
    /** Exibe ícone antes da descrição do card */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição do card */
    isDescriptionLabel?: boolean;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    /** Callback acionado ao clicar no botão de reserva */
    onClickBuy?: (id: string | number) => void;
    /** Callback acionado ao clicar no botão de favorito */
    onClickFavorite?: (id: string | number) => void;
}