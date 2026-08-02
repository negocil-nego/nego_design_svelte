import type { IconSvgElement } from "@hugeicons/svelte";

export interface ItemCarousel {
    value: string,
    label: string,
    image?: string,
    link?: string,
    icon?: IconSvgElement,
    isActive?: boolean,
    onClick?: (value: string) => void,
}

export interface SimpleCarouselProps {
    items: ItemCarousel[]
    orientation?: "horizontal" | "vertical",
    imageClass?: string,
    iconClass?: string,
    labelClass?: string,
    activeClass?: string,
    valueActive?: string,
    isBorderItem?: boolean,
    isBorderBottom?: boolean,
    isButtonPreviousAndNext?: boolean,
    buttonPreviousAndNextClass?: string,
}