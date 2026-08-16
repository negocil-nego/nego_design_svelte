<script lang="ts">
  import CarouselGridSlot from "../../shared/ui/CarouselGridSlot.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import CarouselHeader from "../../../shared/ui/CarouselHeader.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import CardProduct from "$lib/components/core/card/product/CardProduct.svelte";
  import type { CarouselGridProductProps } from "../types";

  const {
    headerProps,
    slotProps,
    gridClass = "lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6",
    items,
    variant,
    isLoading = false,
    isDescriptionIcon = false,
    isDescriptionLabel = false,
  }: CarouselGridProductProps = $props();

  const responsive = useDevice();
</script>

<CarouselHeader {...headerProps}>
  <CarouselGridSlot {slotProps} {gridClass} totalItems={items.length}>
    {#if isLoading}
      {#each Array.from( { length: responsive.isMobile ? 3 : 6 }, ) as _, i (`loading-${i}`)}
        {#if responsive.isMobile}
          <Carousel.Item class="pl-2 basis-auto">
            <CardProduct id={i} {variant} isLoading />
          </Carousel.Item>
        {:else}
          <div>
            <CardProduct id={i} {variant} isLoading />
          </div>
        {/if}
      {/each}
    {:else}
      {#each items as item, i (`profile-${item.id ?? i}`)}
        {#if responsive.isMobile}
          <Carousel.Item class="pl-2 basis-auto">
            <CardProduct
              {...item}
              {variant}
              {isDescriptionIcon}
              {isDescriptionLabel}
            />
          </Carousel.Item>
        {:else}
          <div>
            <CardProduct
              {...item}
              {variant}
              {isDescriptionIcon}
              {isDescriptionLabel}
            />
          </div>
        {/if}
      {/each}
    {/if}
  </CarouselGridSlot>
</CarouselHeader>
