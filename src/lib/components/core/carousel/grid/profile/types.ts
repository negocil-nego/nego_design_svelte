import type { CardProfileProps } from "$lib/components/core/card/types";
import type { CarouselSlotProps } from "$lib/components/core/panel/type";
import type { CarouselHeaderProps } from "../../types";

export interface CarouselProfileProps {
    headerProps?: CarouselHeaderProps;
    slotProps?: CarouselSlotProps;
    gridClass?: string;
    variant?: 1 | 2;
    items: CardProfileProps[];
    isLoading?: boolean;
}