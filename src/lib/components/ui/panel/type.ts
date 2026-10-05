import type { HugeiconsIconName } from "$lib/components/ui/image/icons";
import type { CarouselPlugins } from "$lib/components/ui/carousel/context";
import type { Snippet } from "svelte";

/**
 * Props do NotFoundEmpty — estado vazio com ícone, título, descrição
 * e ação (link ou botão) quando não há conteúdo a exibir.
 */
export type NotFoundEmptyProps = {
    /** Título do estado vazio. Padrão: tradução de "empty.title" */
    title?: string;
    /** Descrição/apoio do estado vazio. Padrão: tradução de "empty.description" */
    description?: string;
    /** Ícone exibido na área de media. Padrão: ícone de busca */
    icon?: HugeiconsIconName;
    /** Classe CSS adicional para o container */
    className?: string;
    /** URL de destino da ação (link) quando não há onAction */
    actionHref?: string;
    /** Texto da ação (link ou botão) */
    actionLabel?: string;
    /** Callback ao clicar na ação (renderiza um botão) */
    onAction?: () => void;
    /** Exibe a ação de suporte mesmo sem onAction */
    showAction?: boolean;
    /** Snippet de conteúdo customizado no lugar da ação padrão */
    children?: Snippet;
};

import type { CarouselHeaderProps } from "$lib/components/ui/carousel/core/types";

/**
 * Props do slot/container de carousel (CarouselSlot).
 * Unifica cabeçalho (título, descrição, botão "Ver mais"), botões de navegação,
 * plugins, estados de carregamento/vazio e conteúdo customizado.
 */
export type CarouselSlotProps = {
    /** Título do carousel */
    title?: string;
    /** Descrição/subtítulo abaixo do título */
    description?: string;
    /** Classe CSS personalizada para o título */
    titleClass?: string;
    /** Classe CSS personalizada para a descrição */
    descriptionClass?: string;
    /** Posição dos botões anterior/próximo: centro ou canto superior direito */
    positionButtonPreviousAndNext?: "center" | "top_right";
    /** Classe CSS personalizada para botões anterior/próximo */
    buttonPreviousAndNextClass?: string;
    /** Exibe os botões anterior/próximo */
    isButtonPreviousAndNext?: boolean;
    /** Exibe borda inferior no slot */
    isBorderBottom?: boolean;
    /** Exibe borda no container */
    isBorder?: boolean;
    /** Classe CSS adicional para o container */
    containerClass?: string;
    /** Classe CSS adicional para o container */
    paddingBottom?: string;
    /** Exibe a barra de scrollbar */
    isScrollbar?: boolean;
    /** Plugins do carousel (ex: autoplay, loop) */
    plugins?: CarouselPlugins;
    /** Callback ao clicar no botão "Ver mais" */
    onMoreViewClick?: () => void;
    /** Snippet de conteúdo customizado renderizado dentro do slot */
    children?: Snippet;
    /** Indica se o carousel está sem dados para exibir */
    isEmpty?: boolean;
    /** Indica se os itens estão em carregamento */
    isLoading?: boolean;
    /** Título exibido no estado vazio */
    emptyTitle?: string;
    /** Descrição exibida no estado vazio */
    emptyDescription?: string;
    /** Ícone exibido no estado vazio */
    emptyIcon?: HugeiconsIconName;
    /** Snippet customizado para o estado vazio */
    emptySnippet?: Snippet;
    /** Configurações de cabeçalho (para compatibilidade com headerProps) */
    headerProps?: CarouselHeaderProps;
    /** Configurações adicionais de slot (para compatibilidade com slotProps) */
    slotProps?: CarouselSlotProps;
};

