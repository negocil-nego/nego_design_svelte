<script lang="ts">
  import CarouselGridSlot from "../../shared/ui/CarouselGridSlot.svelte";
  import CarouselHeader from "../../../shared/ui/CarouselHeader.svelte";
  import NotFoundEmpty from "$lib/components/core/panel/NotFoundEmpty.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
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
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<CarouselHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.products.title")}
      description={$t("empty.products.description")}
    />
  {:else}
    <CarouselGridSlot {slotProps} {gridClass} totalItems={items?.length ?? 0}>
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 3 : 6 }, ) as _, i (`loading-${i}`)}
          {#if responsive.isMobile}
            <Carousel.Item class="pl-2 basis-auto w-[300px]">
              <CardProduct id={i} {variant} isLoading />
            </Carousel.Item>
          {:else}
            <div>
              <CardProduct id={i} {variant} isLoading />
            </div>
          {/if}
        {/each}
      {:else}
        {#each items as item, i (`product-${item.id ?? i}`)}
          {#if responsive.isMobile}
            <Carousel.Item class="pl-2 basis-auto w-[300px]">
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
  {/if}
</CarouselHeader>
