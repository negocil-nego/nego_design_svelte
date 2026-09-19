import type { HugeiconsIconName } from "$lib/components/ui/image/hugeicons";

export interface ItemGridProps {
    id?: string | number;
    title: string;
    isLoading?: boolean;
    description?: string;
    iconClass?: string;
    titleClass?: string;
    itemClassName?: string;
    descriptionClass?: string;
    icon: string | HugeiconsIconName;
    onClick?: (id: string | number) => void
}

export interface GridProps {
    items?: ItemGridProps[];
    itemClassName?: string;
    className?: string;
    variant?: 1 | 2;
    isLoading?: boolean;
    selectedKey?: string | number;
    onClick?: (id: string | number) => void
}