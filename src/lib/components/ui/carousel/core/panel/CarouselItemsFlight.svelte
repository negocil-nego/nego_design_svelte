<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import CarouselHeaderSlot from "../shared/ui/CarouselHeaderSlot.svelte";
  import CardFlight from "$lib/components/ui/card/core/flight/CardFlight.svelte";
  import { autoplay } from "$lib/components/ui/carousel/autoplay.js";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import type { CarouselItemsFlightProps } from "./types";
  import type { CardFlightProps } from "$lib/components/ui/card/core/types";

  let {
    headerProps,
    slotProps,
    items = [],
    variant = 1,
    isLoading = false,
    itemClassName,
    className,
    gridColumns = 3,
    rowColumns = 3,
    isScrollbar = false,
    autoPlay = false,
    isDescriptionIcon,
    isDescriptionLabel,
    onClickBuy,
    onClickFavorite,
  }: CarouselItemsFlightProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));

  const itemsPerSlide = $derived((gridColumns || 3) * (rowColumns || 3));

  const slides = $derived.by(() => {
    if (!items || items.length === 0) return [];
    const chunks: CardFlightProps[][] = [];
    const perSlide = itemsPerSlide;
    for (let i = 0; i < items.length; i += perSlide) {
      chunks.push(items.slice(i, i + perSlide));
    }
    return chunks;
  });

  const defaultPlugins = $derived(
    autoPlay ? [autoplay({ delay: 4000, stopOnInteraction: true })] : [],
  );

  const itemClass = (item: CardFlightProps) =>
    [itemClassName, item.className].filter(Boolean).join(" ");
</script>

<CarouselHeaderSlot
  {headerProps}
  {slotProps}
  {isEmpty}
  {isLoading}
  plugins={defaultPlugins}
  {isScrollbar}
  emptyTitle={$t("empty.flights.title")}
  emptyDescription={$t("empty.flights.description")}
>
  {#if isLoading}
    <Carousel.Item class="basis-full min-w-0 shrink-0 grow-0 p-1">
      <div
        class="grid gap-3 w-full {className ?? ''}"
        style={`grid-template-columns: repeat(${responsive.isMobile ? Math.min(gridColumns, 2) : gridColumns}, minmax(0, 1fr));`}
      >
        {#each Array.from({ length: itemsPerSlide }) as _, i (`loading-${i}`)}
          <CardFlight
            id={i}
            {variant}
            {isLoading}
            {isDescriptionIcon}
            {isDescriptionLabel}
          />
        {/each}
      </div>
    </Carousel.Item>
  {:else}
    {#each slides as slideItems, slideIndex (`slide-${slideIndex}`)}
      <Carousel.Item class="basis-full min-w-0 shrink-0 grow-0 p-1">
        <div
          class="grid gap-3 w-full {className ?? ''}"
          style={`grid-template-columns: repeat(${responsive.isMobile ? Math.min(gridColumns, 2) : gridColumns}, minmax(0, 1fr));`}
        >
          {#each slideItems as item, i (`flight-${item.id ?? `${slideIndex}-${i}`}`)}
            <CardFlight
              {...item}
              {variant}
              className={itemClass(item)}
              isDescriptionIcon={item.isDescriptionIcon ?? isDescriptionIcon}
              isDescriptionLabel={item.isDescriptionLabel ??
                isDescriptionLabel}
              onClickBuy={item.onClickBuy ?? onClickBuy}
              onClickFavorite={item.onClickFavorite ?? onClickFavorite}
            />
          {/each}
        </div>
      </Carousel.Item>
    {/each}
  {/if}
</CarouselHeaderSlot>
