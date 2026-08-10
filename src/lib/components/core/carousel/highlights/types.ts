import type { CardHighlightProps } from "../../card/types";
import type { CarouselSlotProps } from "../../panel/type";
import type { CarouselHeaderProps } from "../types";

export interface CarouselHighlightsProps {
    headerProps?: CarouselHeaderProps;
    slotProps?: CarouselSlotProps;
    items: CardHighlightProps[]
    varient?: 1 | 2;
    isLoading?: boolean,
    isDescriptionIcon?: boolean;
    isDescriptionLabel?: boolean;
}
