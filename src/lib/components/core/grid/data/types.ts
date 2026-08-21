import type { IconSvgElement } from "@hugeicons/svelte";

export interface SimpleGridProps {
    iconClass?: string;
    titleClass?: string;
    descriptionClass?: string;
    items?: {
        title: string;
        description?: string;
        icon: string | IconSvgElement;
    }[];
}