<script lang="ts">
  import CarouselGridSlot from "../../shared/ui/CarouselGridSlot.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import CarouselHeader from "../../../shared/ui/CarouselHeader.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import CardMedia from "$lib/components/core/card/media/CardMedia.svelte";
  import type { CarouselGridMediaProps } from "$lib/types";

  const {
    headerProps,
    slotProps,
    gridClass,
    items,
    variant,
    isLoading = false,
  }: CarouselGridMediaProps = $props();

  const responsive = useDevice();
</script>

<CarouselHeader {...headerProps}>
  <CarouselGridSlot {slotProps} {gridClass} totalItems={items.length}>
    {#if isLoading}
      {#each Array.from( { length: responsive.isMobile ? 5 : 9 }, ) as _, i (`loading-${i}`)}
        {#if responsive.isMobile}
          <Carousel.Item class="pl-2 basis-auto">
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
          <Carousel.Item class="pl-2 basis-auto">
            <CardMedia {...item} {variant} />
          </Carousel.Item>
        {:else}
          <div>
            <CardMedia {...item} {variant} />
          </div>
        {/if}
      {/each}
    {/if}
  </CarouselGridSlot>
</CarouselHeader>
