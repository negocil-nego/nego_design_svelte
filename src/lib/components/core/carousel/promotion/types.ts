import type { CardPromotionProps } from "../../card/types";
import type { CarouselHeaderProps } from "../types";

export interface CarouselPromotionProps extends CarouselHeaderProps {
    items: CardPromotionProps[]
    isBorderBottom?: boolean,
    isLoading?: boolean,
    isButtonPreviousAndNext?: boolean,
    buttonPreviousAndNextClass?: string,
    isDescriptionIcon?: boolean;
    isDescriptionLabel?: boolean;
}