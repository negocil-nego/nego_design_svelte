import type { CardPromotionProps } from "../../card/types";
import type { CarouselSlotProps } from "../../panel/type";
import type { CarouselHeaderProps } from "../types";

export interface CarouselPromotionProps {
    headerProps?: CarouselHeaderProps;
    slotProps?: CarouselSlotProps;
    items: CardPromotionProps[]
    isDescriptionIcon?: boolean;
    isDescriptionLabel?: boolean;
    isLoading?: boolean,
}