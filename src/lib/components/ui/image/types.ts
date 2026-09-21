export interface ImageLogoProps {
    src?: string
    alt?: string
    text?: string
    textClass?: string
}

export type IconStyle = "SVG" | "DATA_IMAGE";

export interface ImageHugeiconsProps {
    icon: string
    class?: string
    alt?: string
    width?: number
    height?: number
    style?: IconStyle
    [key: string]: unknown
}