<script lang="ts">
  import CarouselGridSlot from "../../shared/ui/CarouselGridSlot.svelte";
  import CarouselHeader from "../../../shared/ui/CarouselHeader.svelte";
  import NotFoundEmpty from "$lib/components/core/panel/NotFoundEmpty.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import CardPromotion from "$lib/components/core/card/promotion/CardPromotion.svelte";
  import type { CarouselGridPromotionProps } from "../types";

  const {
    headerProps,
    slotProps,
    gridClass = "lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5",
    items,
    isLoading = false,
    isDescriptionIcon = false,
    isDescriptionLabel = false,
  }: CarouselGridPromotionProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<CarouselHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.promotions.title")}
      description={$t("empty.promotions.description")}
    />
  {:else}
    <CarouselGridSlot {slotProps} {gridClass}>
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 3 : 6 }, ) as _, i (`loading-${i}`)}
          {#if responsive.isMobile}
            <Carousel.Item class="pl-2 basis-auto w-[300px]">
              <CardPromotion id={i} isLoading />
            </Carousel.Item>
          {:else}
            <div>
              <CardPromotion id={i} isLoading />
            </div>
          {/if}
        {/each}
      {:else}
        {#each items as item, i (`promotion-${item.id ?? i}`)}
          {#if responsive.isMobile}
            <Carousel.Item class="pl-2 basis-auto w-[300px]">
              <CardPromotion
                {...item}
                {isDescriptionIcon}
                {isDescriptionLabel}
              />
            </Carousel.Item>
          {:else}
            <div>
              <CardPromotion
                {...item}
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
