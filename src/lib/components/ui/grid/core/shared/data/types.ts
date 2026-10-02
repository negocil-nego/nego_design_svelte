import type { HugeiconsIconName } from "$lib/components/ui/image/icons";
import type { CarouselSlotProps } from "$lib/types";

export interface ItemGridProps {
    id?: string | number;
    title: string;
    isLoading?: boolean;
    description?: string;
    iconClass?: string;
    titleClass?: string;
    itemClassName?: string;
    descriptionClass?: string;
    icon?: string | HugeiconsIconName;
    image?: string | null;
    width?: string | number;
    height?: string | number;
    itemWidth?: string | number;
    itemHeight?: string | number;
    isShowDescription?: boolean;
    onClick?: (id: string | number) => void
}

export interface GridProps {
    items?: ItemGridProps[];
    itemClassName?: string;
    className?: string;
    variant?: 1 | 2;
    isLoading?: boolean;
    selectedKey?: string | number;
    autoPlay?: boolean;
    isShowDescription?: boolean;
    slotProps?: CarouselSlotProps;
    width?: string | number;
    height?: string | number;
    itemWidth?: string | number;
    itemHeight?: string | number;
    onClick?: (id: string | number) => void
}