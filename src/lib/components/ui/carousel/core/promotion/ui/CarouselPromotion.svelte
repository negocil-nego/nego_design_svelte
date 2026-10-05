<script lang="ts">
  import CardPromotion from "$lib/components/ui/card/core/promotion/CardPromotion.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselPromotionProps } from "../types";
  import CarouselHeaderSlot from "../../shared/ui/CarouselHeaderSlot.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";

  const {
    headerProps,
    slotProps,
    items,
    isLoading = false,
    isDescriptionIcon,
    isDescriptionLabel,
    onClickBuy,
    onClickShop,
    onClickFavorite,
  }: CarouselPromotionProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<CarouselHeaderSlot
  {headerProps}
  {slotProps}
  {isEmpty}
  {isLoading}
  emptyTitle={$t("empty.promotions.title")}
  emptyDescription={$t("empty.promotions.description")}
>
  {#if isLoading}
    {#each Array.from({ length: responsive.isMobile ? 5 : 10 }) as _, i (`loading-${i}`)}
      <Carousel.Item class="pl-5 w-75 basis-auto">
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
        <CardPromotion
          {...item}
          {isDescriptionIcon}
          {isDescriptionLabel}
          {onClickBuy}
          {onClickShop}
          {onClickFavorite}
        />
      </Carousel.Item>
    {/each}
  {/if}
</CarouselHeaderSlot>

