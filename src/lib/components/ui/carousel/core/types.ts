import type { HugeiconsIconName } from "$lib/components/ui/image/icons";

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
    /** Código ISO do país da bandeira a exibir via ImageFlag */
    country?: string,
    /** URL da imagem opcional do item */
    image?: string,
    /** URL de navegação opcional */
    link?: string,
    /** Ícone SVG opcional do item */
    icon?: HugeiconsIconName | string,
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
    /** Posição dos botões anterior/próximo */
    positionButtonPreviousAndNext?: "center" | "top_right";
    /** Exibe borda inferior no header */
    isBorder?: boolean;
}

import type { CarouselPlugins } from "$lib/components/ui/carousel/context";
import type { CarouselSlotProps } from "$lib/components/ui/panel/type";
import type { Snippet } from "svelte";

/**
 * Props do CarouselHeaderSlot — wrapper reutilizável que combina cabeçalho (CarouselHeader),
 * slot de carousel (CarouselSlot), verificação de estado vazio (isEmpty) e loading,
 * alternando automaticamente para versão mobile (CarouselHeaderSlotMobile) quando em telas mobile.
 */
export interface CarouselHeaderSlotProps {
    /** Configurações do cabeçalho */
    headerProps?: CarouselHeaderProps;
    /** Configurações do slot de carousel */
    slotProps?: CarouselSlotProps;
    /** Indica se o carousel está sem dados para exibir */
    isEmpty?: boolean;
    /** Indica se os itens estão em carregamento */
    isLoading?: boolean;
    /** Título exibido no estado vazio (fallback: tradução de "empty.title") */
    emptyTitle?: string;
    /** Descrição exibida no estado vazio (fallback: tradução de "empty.description") */
    emptyDescription?: string;
    /** Ícone exibido no estado vazio */
    emptyIcon?: HugeiconsIconName;
    /** Plugins do carousel (ex: autoplay) */
    plugins?: CarouselPlugins;
    /** Exibe a barra de scroll horizontal */
    isScrollbar?: boolean;
    /** Snippet com o conteúdo do carousel (itens) */
    children?: Snippet;
    /** Snippet customizado para o estado vazio */
    emptySnippet?: Snippet;
}

/**
 * Props do CarouselHeaderSlotMobile — versão mobile do CarouselHeaderSlot.
 */
export type CarouselHeaderSlotMobileProps = CarouselHeaderSlotProps;

