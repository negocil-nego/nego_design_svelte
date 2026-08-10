import type { CardMediaProps } from "$lib/components/core/card/types";
import type { CarouselSlotProps } from "$lib/components/core/panel/type";
import type { CarouselHeaderProps } from "../../types";

export interface CarouselMediaProps {
    headerProps?: CarouselHeaderProps;
    slotProps?: CarouselSlotProps;
    variant?: 1 | 2;
    items: CardMediaProps[];
    isLoading?: boolean;
}