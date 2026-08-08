import type { CardHighlightProps } from "../../card/types";
import type { CarouselHeaderProps } from "../types";

export interface CarouselHighlightsProps extends CarouselHeaderProps {
    items: CardHighlightProps[]
    isBorderBottom?: boolean,
    isLoading?: boolean,
    isButtonPreviousAndNext?: boolean,
    buttonPreviousAndNextClass?: string,
}
