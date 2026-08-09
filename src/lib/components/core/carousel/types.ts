import type { IconSvgElement } from "@hugeicons/svelte";
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

export interface CarouselHeaderProps {
    title?: string,
    description?: string,
    titleClass?: string,
    descriptionClass?: string,
    containerClass?: string,
    onButtonViewAll?: () => void,
    positionButtonPreviousAndNext?: "center" | "top_right";
}

export interface CarouselBadgeProps {
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
