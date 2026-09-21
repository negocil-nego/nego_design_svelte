import type { HugeiconsIconName } from "$lib/components/ui/image/hugeicons-icons";

export interface SectionCardItem {
    id?: string | number;
    title: string;
    description?: string;
    icon: string | HugeiconsIconName;
    isActive?: boolean;
}

export interface SectionFeatureItem {
    id?: string | number;
    title: string;
    description?: string;
    link?: string;
    linkLabel?: string;
}

export interface Section01Props {
    title?: string;
    description?: string;
    items?: SectionCardItem[];
    selectedKey?: string | number;
    titleClass?: string;
    descriptionClass?: string;
    className?: string;
    onSelect?: (id: string | number) => void;
    onPrev?: () => void;
    onNext?: () => void;
}

export interface Section02Props {
    title?: string;
    description?: string;
    image?: string;
    imageAlt?: string;
    features?: SectionFeatureItem[];
    titleClass?: string;
    descriptionClass?: string;
    className?: string;
    imageClass?: string;
}

export interface Section03Props {
    title?: string;
    description?: string;
    items?: SectionCardItem[];
    titleClass?: string;
    descriptionClass?: string;
    className?: string;
}
