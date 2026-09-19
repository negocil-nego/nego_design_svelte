import type { IconSvgElement } from "@hugeicons/svelte";
import type { Snippet } from "svelte";

export type PageStatusProps = {
    title?: string;
    imageUrl?: string;
    subtitle?: string;
    description?: string;
    buttonText?: string;
    onAction?: () => void;
    actionHref?: string;
    className?: string;
    icon?: IconSvgElement;
    titleColor?: string;
    bgColor?: string;
    iconBg?: string;
    iconColor?: string;
    buttonBg?: string;
    buttonTextColor?: string;
    children?: Snippet;
};
