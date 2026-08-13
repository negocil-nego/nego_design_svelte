import type { CarouselPlugins } from "$lib/components/ui/carousel/context";
import type { Snippet } from "svelte";

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
