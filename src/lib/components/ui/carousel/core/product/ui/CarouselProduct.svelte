<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselProductProps } from "../types";
  import CarouselHeaderSlot from "../../shared/ui/CarouselHeaderSlot.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import CardProduct from "$lib/components/ui/card/core/product/CardProduct.svelte";

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

<CarouselHeaderSlot
  {headerProps}
  {slotProps}
  {isEmpty}
  {isLoading}
  emptyTitle={$t("empty.products.title")}
  emptyDescription={$t("empty.products.description")}
>
  {#if isLoading}
    {#each Array.from({ length: responsive.isMobile ? 5 : 10 }) as _, i (`loading-${i}`)}
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
</CarouselHeaderSlot>

