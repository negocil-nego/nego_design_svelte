<script lang="ts">
  import CardPromotion from "$lib/components/core/card/promotion/CardPromotion.svelte";
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselPromotionProps } from "../types";
  import CarouselHeader from "../../shared/ui/CarouselHeader.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import Autoplay from "embla-carousel-autoplay";

  const {
    headerProps,
    slotProps,
    items,
    isLoading = false,
    isDescriptionIcon,
    isDescriptionLabel,
  }: CarouselPromotionProps = $props();

  const responsive = useDevice();
</script>

<CarouselHeader {...headerProps}>
  <CarouselSlot
    {...slotProps}
    containerClass="w-full"
    plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
  >
    {#if isLoading}
      {#each Array.from( { length: responsive.isMobile ? 5 : 10 }, ) as _, i (`loading-${i}`)}
        <Carousel.Item class="pl-2 w-75 basis-auto">
          <CardPromotion
            id={i}
            {isLoading}
            {isDescriptionIcon}
            {isDescriptionLabel}
          />
        </Carousel.Item>
      {/each}
    {:else}
      {#each items as item, i (`promotion-${item.id ?? i}`)}
        <Carousel.Item class="pl-2 w-75 basis-auto">
          <CardPromotion {...item} {isDescriptionIcon} {isDescriptionLabel} />
        </Carousel.Item>
      {/each}
    {/if}
  </CarouselSlot>
</CarouselHeader>
