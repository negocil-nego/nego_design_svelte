<script lang="ts">
  import CarouselSlot from "$lib/components/ui/panel/CarouselSlot.svelte";
  import { autoplay } from "$lib/components/ui/carousel/autoplay.js";
  import type { CarouselHeaderSlotProps } from "../../types";

  const {
    headerProps,
    slotProps,
    isEmpty = false,
    isLoading = false,
    emptyTitle,
    emptyDescription,
    emptyIcon,
    plugins = [autoplay({ delay: 4000, stopOnInteraction: true })],
    isScrollbar = false,
    children,
    emptySnippet,
  }: CarouselHeaderSlotProps = $props();
</script>

<CarouselSlot
  {headerProps}
  {slotProps}
  {isEmpty}
  {isLoading}
  {emptyTitle}
  {emptyDescription}
  {emptyIcon}
  {plugins}
  {isScrollbar}
  {emptySnippet}
>
  {@render children?.()}
</CarouselSlot>
