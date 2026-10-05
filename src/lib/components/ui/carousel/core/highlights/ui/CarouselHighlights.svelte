<script lang="ts">
  import CardHighlight from "$lib/components/ui/card/core/highlight/CardHighlight.svelte";
  import CarouselHeaderSlot from "../../shared/ui/CarouselHeaderSlot.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselHighlightsProps } from "../types";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";

  const {
    headerProps,
    slotProps,
    items,
    isLoading = false,
    varient = 1,
    isDescriptionIcon,
    isDescriptionLabel,
    onClickBtn,
    onClickFavorite,
  }: CarouselHighlightsProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<CarouselHeaderSlot
  {headerProps}
  {slotProps}
  {isEmpty}
  {isLoading}
  emptyTitle={$t("empty.highlights.title")}
  emptyDescription={$t("empty.highlights.description")}
>
  {#if isLoading}
    {#each Array.from({ length: responsive.isMobile ? 5 : 10 }) as _, i (`loading-${i}`)}
      <Carousel.Item class="pl-2 basis-auto">
        <CardHighlight id={i} {isLoading} {varient} />
      </Carousel.Item>
    {/each}
  {:else}
    {#each items as item, i (`highlight-${item.id ?? i}`)}
      <Carousel.Item class="pl-2 basis-auto">
        <CardHighlight
          {...item}
          {varient}
          {isDescriptionIcon}
          {isDescriptionLabel}
          onClickBtn={(id: string | number) => {
            item.onClickBtn?.(id);
            onClickBtn?.(id);
          }}
          onClickFavorite={(id: string | number) => {
            item.onClickFavorite?.(id);
            onClickFavorite?.(id);
          }}
        />
      </Carousel.Item>
    {/each}
  {/if}
</CarouselHeaderSlot>

