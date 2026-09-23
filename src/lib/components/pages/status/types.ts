import type { CardEmailPhoneWhatsappProps } from "$lib/types";
import type { SvgAnimateKey } from "$lib/components/ui/image/svg-map";
import type { Snippet } from "svelte";

export type PageStatusProps = {
    title?: string;
    buttonBg?: string;
    subtitle?: string;
    className?: string;
    svgKey?: SvgAnimateKey;
    imgSlot?: Snippet;
    children?: Snippet;
    actionHref?: string;
    titleColor?: string;
    buttonText?: string;
    description?: string;
    onAction?: () => void;
    buttonTextColor?: string;
    emailPhoneWhatsapp?: CardEmailPhoneWhatsappProps;
};

export type PageLoadingProps = PageStatusProps & {
    /** Valor de progresso em percentagem (0-100). Quando definido, exibe uma barra de progresso abaixo do ícone. */
    progress?: number;
};
