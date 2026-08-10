import type { CarouselPlugins } from "$lib/components/ui/carousel/context";
import type { Snippet } from "svelte";

export type CarouselSlotProps = {
    positionButtonPreviousAndNext?: "center" | "top_right";
    buttonPreviousAndNextClass?: string;
    isButtonPreviousAndNext?: boolean;
    isBorderBottom?: boolean;
    containerClass?: string;
    plugins?: CarouselPlugins;
    children: Snippet;
  };