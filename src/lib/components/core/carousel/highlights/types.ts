import type { CardHighlightProps } from "../../card/types";
import type { CarouselHeaderProps } from "../types";

export interface CarouselHighlightsProps extends CarouselHeaderProps {
    items: CardHighlightProps[]
    varient?: 1 | 2;
    isBorderBottom?: boolean,
    isLoading?: boolean,
    isButtonPreviousAndNext?: boolean,
    buttonPreviousAndNextClass?: string,
}
