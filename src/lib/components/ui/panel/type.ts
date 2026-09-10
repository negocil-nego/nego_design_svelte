import type { CarouselPlugins } from "$lib/components/ui/carousel/context";
import type { Snippet } from "svelte";
import type { IconSvgElement } from "@hugeicons/svelte";

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
    icon?: IconSvgElement;
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

/**
 * Props do slot/container de carousel (CarouselSlot).
 * Controla botões de navegação, bordas, plugins e conteúdo customizado.
 */
export type CarouselSlotProps = {
    /** Posição dos botões anterior/próximo: centro ou canto superior direito */
    positionButtonPreviousAndNext?: "center" | "top_right";
    /** Classe CSS personalizada para botões anterior/próximo */
    buttonPreviousAndNextClass?: string;
    /** Exibe os botões anterior/próximo */
    isButtonPreviousAndNext?: boolean;
    /** Exibe borda inferior no slot */
    isBorderBottom?: boolean;
    /** Classe CSS adicional para o container */
    containerClass?: string;
    /** Plugins do carousel (ex: autoplay, loop) */
    plugins?: CarouselPlugins;
    /** Snippet de conteúdo customizado renderizado dentro do slot */
    children?: Snippet;
};
