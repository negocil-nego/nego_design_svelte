import type { IconSvgElement } from "@hugeicons/svelte";

export interface ItemGridProps {
    id?: string | number;
    title: string;
    isLoading?: boolean;
    description?: string;
    titleClass?: string;
    descriptionClass?: string;
    icon: string | IconSvgElement;
    onClick?: (id: string | number) => void
}

export interface GridProps {
    items?: ItemGridProps[];
    className?: string;
    variant?: 1 | 2;
    isLoading?: boolean;
    onClick?: (id: string | number) => void
}