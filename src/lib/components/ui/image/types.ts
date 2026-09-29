import type { HugeiconsIconName } from "./icons";

export interface ImageLogoProps {
    src?: string
    alt?: string
    text?: string
    textClass?: string
}

export interface ImageHugeiconsProps {
    icon: HugeiconsIconName
    class?: string
    [key: string]: unknown
}