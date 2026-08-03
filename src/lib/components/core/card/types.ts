import type { IconSvgElement } from "@hugeicons/svelte";

export interface CardTagsProps {
    icon?: IconSvgElement
    text: string
}

export interface CardMediaProps {
    id: string | number;
    logo?: string;
    title?: string;
    content?: string;
    startMax?: number;
    imageUrl?: string;
    videoUrl?: string;
    className?: string;
    tags?: CardTagsProps[];
    isFavorite?: boolean;
    startNumber?: number;
    isTagBorderBottom?: boolean;
    buttonProfileClass?: string;
    buttonDetailsClass?: string;
    isVideoButtonMaximized?: boolean;
    isImageButtonMaximized?: boolean;
    onFavoriteClick?: (id:string | number) => void;
    onButtonProfile?:  (id:string | number) => void;
    onButtonDetails?:  (id:string | number) => void;
    videoAction?: 'START_REPRODUCTION' | 'HOVER_REPRODUCTION'
}

export interface CardProfileProps {
    id: string | number;
    logo?: string;
    title?: string;
    content?: string;
    startMax?: number;
    className?: string;
    tags?: CardTagsProps[];
    isFavorite?: boolean;
    startNumber?: number;
    isTagBorderBottom?: boolean;
    buttonProfileClass?: string;
    buttonDetailsClass?: string;
    onFavoriteClick?: (id:string | number) => void;
    onButtonProfile?:  (id:string | number) => void;
    onButtonDetails?:  (id:string | number) => void;
}