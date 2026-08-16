import type { IconSvgElement } from "@hugeicons/svelte";
import type { NavMenuProps } from "../nav/data/nav-menu";

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

/**
 * Props do CarouselBadge — carousel de badges/categorias
 * com orientação horizontal ou vertical.
 */
export interface CarouselBadgeProps {
    /** Lista de itens do carousel de badges */
    items: ItemCarousel[]
    /** Orientação do layout: horizontal (padrão) ou vertical */
    orientation?: "horizontal" | "vertical",
    /** Classe CSS personalizada para a imagem */
    imageClass?: string,
    /** Classe CSS personalizada para o ícone */
    iconClass?: string,
    /** Classe CSS personalizada para o label */
    labelClass?: string,
    /** Classe CSS personalizada para o estado ativo */
    activeClass?: string,
    /** Estado de carregamento (skeleton) */
    isLoading?: boolean,
    itemClass?: string,
    onClick?: (value: string | number) => void,
}

/**
 * Item individual do CarouselHero — slide com imagem,
 * título e descrição.
 */
export interface CarouselHeroItem {
    /** Título do slide hero */
    title: string,
    /** URL da imagem de fundo do slide */
    image: string,
    /** Descrição do slide */
    description: string,
}

/**
 * Props do CarouselHero — carousel hero principal (ex: página de login)
 * com slides em fullscreen e menu de navegação sobreposto.
 */
export interface CarouselHeroProps {
    /** Lista de slides do hero */
    items: CarouselHeroItem[],
    /** Configuração do menu de navegação sobreposto */
    navMenu: NavMenuProps,
    /** Classe CSS adicional para o container */
    className?: string
    /** Classe CSS personalizada para o título */
    titleClass?: string
    /** Classe CSS personalizada para a descrição */
    descriptionClass?: string
}
