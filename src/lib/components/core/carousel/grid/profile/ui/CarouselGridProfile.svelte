<script lang="ts">
  import CarouselGridSlot from "../../shared/ui/CarouselGridSlot.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import CarouselHeader from "../../../shared/ui/CarouselHeader.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import type { CarouselProfileProps } from "../types";
  import CardProfile from "$lib/components/core/card/profile/CardProfile.svelte";

  const {
    headerProps,
    slotProps,
    gridClass,
    items,
    variant,
    isLoading = false,
  }: CarouselProfileProps = $props();

  const responsive = useDevice();
</script>

<CarouselHeader {...headerProps}>
  <CarouselGridSlot {slotProps} {gridClass} totalItems={items.length}>
    {#if isLoading}
      {#each Array.from( { length: responsive.isMobile ? 5 : 9 }, ) as _, i (`loading-${i}`)}
        {#if responsive.isMobile}
          <Carousel.Item class="pl-2 basis-auto">
            <CardProfile id={i} {variant} isLoading />
          </Carousel.Item>
        {:else}
          <div>
            <CardProfile id={i} {variant} isLoading />
          </div>
        {/if}
      {/each}
    {:else}
      {#each items as item, i (`profile-${item.id ?? i}`)}
        {#if responsive.isMobile}
          <Carousel.Item class="pl-2 basis-auto">
            <CardProfile {...item} {variant} />
          </Carousel.Item>
        {:else}
          <div>
            <CardProfile {...item} {variant} />
          </div>
        {/if}
      {/each}
    {/if}
  </CarouselGridSlot>
</CarouselHeader>
