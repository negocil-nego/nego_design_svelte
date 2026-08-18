<script lang="ts">
  import CarouselGridSlot from "../../shared/ui/CarouselGridSlot.svelte";
  import CarouselHeader from "../../../shared/ui/CarouselHeader.svelte";
  import NotFoundEmpty from "$lib/components/core/panel/NotFoundEmpty.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import CardMedia from "$lib/components/core/card/media/CardMedia.svelte";
  import type { CarouselGridMediaProps } from "$lib/types";

  const {
    headerProps,
    slotProps,
    gridClass,
    items,
    variant,
    isLoading = false,
    isDescriptionIcon,
    isDescriptionLabel,
    onFavoriteClick,
    onButtonProfile,
    onButtonDetails,
  }: CarouselGridMediaProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<CarouselHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.media.title")}
      description={$t("empty.media.description")}
    />
  {:else}
    <CarouselGridSlot {slotProps} {gridClass} totalItems={items?.length ?? 0}>
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 3 : 6 }, ) as _, i (`loading-${i}`)}
          {#if responsive.isMobile}
            <Carousel.Item class="pl-2 basis-auto w-75">
              <CardMedia id={i} {variant} isLoading />
            </Carousel.Item>
          {:else}
            <div>
              <CardMedia id={i} {variant} isLoading />
            </div>
          {/if}
        {/each}
      {:else}
        {#each items as item, i (`media-${item.id ?? i}`)}
          {#if responsive.isMobile}
            <Carousel.Item class="pl-2 basis-auto w-75">
              <CardMedia
                {...item}
                {variant}
                {isDescriptionIcon}
                {isDescriptionLabel}
                onFavoriteClick={(id: string | number) => {
                  item?.onFavoriteClick?.(id);
                  onFavoriteClick?.(id);
                }}
                onButtonProfile={(id: string | number) => {
                  item?.onButtonProfile?.(id);
                  onButtonProfile?.(id);
                }}
                onButtonDetails={(id: string | number) => {
                  item?.onButtonDetails?.(id);
                  onButtonDetails?.(id);
                }}
              />
            </Carousel.Item>
          {:else}
            <div>
              <CardMedia
                {...item}
                {variant}
                {isDescriptionIcon}
                {isDescriptionLabel}
                onFavoriteClick={(id: string | number) => {
                  item?.onFavoriteClick?.(id);
                  onFavoriteClick?.(id);
                }}
                onButtonProfile={(id: string | number) => {
                  item?.onButtonProfile?.(id);
                  onButtonProfile?.(id);
                }}
                onButtonDetails={(id: string | number) => {
                  item?.onButtonDetails?.(id);
                  onButtonDetails?.(id);
                }}
              />
            </div>
          {/if}
        {/each}
      {/if}
    </CarouselGridSlot>
  {/if}
</CarouselHeader>
