import type { CardEmailPhoneWhatsappProps } from "$lib/types";
import type { IconSvgElement } from "@hugeicons/svelte";
import type { Snippet } from "svelte";

export type PageStatusProps = {
    title?: string;
    iconBg?: string;
    bgColor?: string;
    buttonBg?: string;
    imageUrl?: string;
    subtitle?: string;
    className?: string;
    iconColor?: string;
    children?: Snippet;
    actionHref?: string;
    titleColor?: string;
    buttonText?: string;
    description?: string;
    icon?: IconSvgElement;
    onAction?: () => void;
    buttonTextColor?: string;
    emailPhoneWhatsapp?: CardEmailPhoneWhatsappProps;
};
