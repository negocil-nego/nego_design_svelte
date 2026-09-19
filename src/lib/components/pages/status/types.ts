import type { HugeiconsIconName } from "$lib/components/ui/image/hugeicons";
import type { CardEmailPhoneWhatsappProps } from "$lib/types";
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
    icon?: HugeiconsIconName;
    onAction?: () => void;
    buttonTextColor?: string;
    emailPhoneWhatsapp?: CardEmailPhoneWhatsappProps;
};
