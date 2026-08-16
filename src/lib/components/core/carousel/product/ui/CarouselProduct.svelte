<script lang="ts">
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";
  import NotFoundEmpty from "$lib/components/core/panel/NotFoundEmpty.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselProductProps } from "../types";
  import CarouselHeader from "../../shared/ui/CarouselHeader.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import Autoplay from "embla-carousel-autoplay";
  import CardProduct from "$lib/components/core/card/product/CardProduct.svelte";

  const {
    headerProps,
    slotProps,
    items,
    isLoading = false,
    isDescriptionIcon,
    isDescriptionLabel,
  }: CarouselProductProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<CarouselHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.products.title")}
      description={$t("empty.products.description")}
    />
  {:else}
    <CarouselSlot
      {...slotProps}
      containerClass="w-full"
      plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
    >
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 5 : 10 }, ) as _, i (`loading-${i}`)}
          <Carousel.Item class="pl-5 w-75 basis-auto">
            <CardProduct
              id={i}
              {isLoading}
              {isDescriptionIcon}
              {isDescriptionLabel}
            />
          </Carousel.Item>
        {/each}
      {:else}
        {#each items as item, i (`product-${item.id ?? i}`)}
          <Carousel.Item class="pl-2 w-75 basis-auto">
            <CardProduct {...item} {isDescriptionIcon} {isDescriptionLabel} />
          </Carousel.Item>
        {/each}
      {/if}
    </CarouselSlot>
  {/if}
</CarouselHeader>
