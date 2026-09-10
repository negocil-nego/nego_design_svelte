import type { IconSvgElement } from "@hugeicons/svelte";

export type { CarouselBadgeProps } from "./badge/type";
export type { CarouselHeroItem, CarouselHeroProps } from "./hero/types";

/**
 * Item individual do CarouselBadge — categoria/opção com ícone,
 * imagem, label e callback de clique.
 */
export interface ItemCarousel {
    /** Valor único do item (usado para identificar seleção) */
    value: string,
    /** Texto exibido no item */
    label: string,
    /** URL da imagem opcional do item */
    image?: string,
    /** URL de navegação opcional */
    link?: string,
    /** Ícone SVG opcional do item */
    icon?: IconSvgElement | string,
    /** Indica se o item está ativo/selecionado */
    isActive?: boolean,
    /** Callback acionado ao clicar no item */
    onClick?: (value: string) => void,
}

/**
 * Props do CarouselHeader — cabeçalho de carousel com título,
 * descrição e botão "Ver tudo".
 */
export interface CarouselHeaderProps {
    /** Título do carousel */
    title?: string,
    /** Descrição/subtítulo abaixo do título */
    description?: string,
    /** Classe CSS personalizada para o título */
    titleClass?: string,
    /** Classe CSS personalizada para a descrição */
    descriptionClass?: string,
    /** Classe CSS adicional para o container do header */
    containerClass?: string,
    /** Callback ao clicar no botão "Ver tudo" */
    onButtonViewAll?: () => void,
    /** Posição dos botões anterior/próximo */
    positionButtonPreviousAndNext?: "center" | "top_right";
    /** Exibe borda inferior no header */
    isBorder?: boolean;
}
