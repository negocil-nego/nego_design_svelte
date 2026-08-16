<script lang="ts">
  import CardPromotion from "$lib/components/core/card/promotion/CardPromotion.svelte";
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";
  import NotFoundEmpty from "$lib/components/core/panel/NotFoundEmpty.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselPromotionProps } from "../types";
  import CarouselHeader from "../../shared/ui/CarouselHeader.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import Autoplay from "embla-carousel-autoplay";

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

<CarouselHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.promotions.title")}
      description={$t("empty.promotions.description")}
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
    </CarouselSlot>
  {/if}
</CarouselHeader>
