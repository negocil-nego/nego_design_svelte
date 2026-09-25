<script lang="ts">
  import CarouselSlot from "$lib/components/ui/panel/CarouselSlot.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselMediaProps } from "../types";
  import CarouselHeader from "../../shared/ui/CarouselHeader.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import { autoplay } from "$lib/components/ui/carousel/autoplay.js";
  import CardMedia from "$lib/components/ui/card/core/media/CardMedia.svelte";

  const {
    headerProps,
    slotProps,
    items,
    variant,
    isLoading = false,
    isDescriptionIcon,
    isDescriptionLabel,
  }: CarouselMediaProps = $props();

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
    <CarouselSlot
      {...slotProps}
      containerClass="w-full"
      plugins={[autoplay({ delay: 4000, stopOnInteraction: true })]}
    >
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 5 : 10 }, ) as _, i (`loading-${i}`)}
          <Carousel.Item class="pl-5 w-75 basis-auto">
            <CardMedia
              id={i}
              {variant}
              {isLoading}
              {isDescriptionIcon}
              {isDescriptionLabel}
            />
          </Carousel.Item>
        {/each}
      {:else}
        {#each items as item, i (`media-${item.id ?? i}`)}
          <Carousel.Item class="pl-2 w-75 basis-auto">
            <CardMedia
              {...item}
              {variant}
              {isDescriptionIcon}
              {isDescriptionLabel}
            />
          </Carousel.Item>
        {/each}
      {/if}
    </CarouselSlot>
  {/if}
</CarouselHeader>
