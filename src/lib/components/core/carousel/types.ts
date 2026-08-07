import type { IconSvgElement } from "@hugeicons/svelte";
import type { CardHighlightProps, CardPromotionProps } from "../card/types";
import type { NavMenuProps } from "../nav/data/nav-menu";

export interface ItemCarousel {
    value: string,
    label: string,
    image?: string,
    link?: string,
    icon?: IconSvgElement | string,
    isActive?: boolean,
    onClick?: (value: string) => void,
}

export interface SimpleBadgeCarouselProps {
    items: ItemCarousel[]
    orientation?: "horizontal" | "vertical",
    imageClass?: string,
    iconClass?: string,
    labelClass?: string,
    activeClass?: string,
    valueActive?: string,
    isLoading?: boolean,
    isBorderItem?: boolean,
    isBorderBottom?: boolean,
    itemCarouselClass?: string,
    isButtonPreviousAndNext?: boolean,
    buttonPreviousAndNextClass?: string,
}

export interface CarouselPromotionProps {
    title?: string,
    description?: string,
    titleClass?: string,
    descriptionClass?: string,
    items: CardPromotionProps[]
    isBorderBottom?: boolean,
    isButtonPreviousAndNext?: boolean,
    buttonPreviousAndNextClass?: string,
    containerClass?: string,
    onButtonViewAll?: () => void,
}

export interface CarouselHeroItem {
    title: string,
    image: string,
    description: string,
}

export interface CarouselHeroProps {
    items: CarouselHeroItem[],
    navMenu: NavMenuProps,
    className?: string
    titleClass?: string
    descriptionClass?: string
}


export interface CarouselHighlightsProps {
    title?: string,
    description?: string,
    titleClass?: string,
    descriptionClass?: string,
    items: CardHighlightProps[]
    isBorderBottom?: boolean,
    isButtonPreviousAndNext?: boolean,
    buttonPreviousAndNextClass?: string,
    containerClass?: string,
    onButtonViewAll?: () => void,
}