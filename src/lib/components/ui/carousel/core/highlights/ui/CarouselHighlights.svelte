<script lang="ts">
  import CardHighlight from "$lib/components/ui/card/core/highlight/CardHighlight.svelte";
  import CarouselHeader from "../../shared/ui/CarouselHeader.svelte";
  import CarouselSlot from "$lib/components/ui/panel/CarouselSlot.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselHighlightsProps } from "../types";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import { autoplay } from "$lib/components/ui/carousel/autoplay.js";

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

<CarouselHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.highlights.title")}
      description={$t("empty.highlights.description")}
    />
  {:else}
    <CarouselSlot
      {...slotProps}
      plugins={[autoplay({ delay: 4000, stopOnInteraction: true })]}
    >
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 5 : 10 }, ) as _, i (`loading-${i}`)}
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
    </CarouselSlot>
  {/if}
</CarouselHeader>
