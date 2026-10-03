import type { CardFlightProps } from "$lib/components/ui/card/core/types";
import type { GridHeaderProps } from "../types";

/**
 * Props do GridFlight — grid de cards de viagem/voo com rota
 * (origem → destino), horários e botão de reserva.
 */
export interface GridFlightProps {
    /** Props do cabeçalho do grid (título, descrição, etc.) */
    headerProps?: GridHeaderProps;
    /** Classe CSS adicional para o container do grid */
    gridClass?: string;
    /** Variante visual do card: 1 ou 2 */
    variant?: 1 | 2;
    /** Lista de viagens para exibir */
    items: CardFlightProps[];
    /** Exibe ícone antes da descrição do card */
    isDescriptionIcon?: boolean;
    /** Exibe etiqueta (label) na descrição do card */
    isDescriptionLabel?: boolean;
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean;
    /** Callback ao clicar no botão de reserva */
    onClickBuy?: (id: string | number) => void;
    /** Callback ao clicar no botão de favorito */
    onClickFavorite?: (id: string | number) => void;
}