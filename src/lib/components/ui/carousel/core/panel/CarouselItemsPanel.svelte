<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import CarouselHeaderSlot from "../shared/ui/CarouselHeaderSlot.svelte";
  import GridCard from "$lib/components/ui/grid/core/shared/ui/shared/GridCard.svelte";
  import { autoplay } from "$lib/components/ui/carousel/autoplay.js";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import type { CarouselItemsPanelProps } from "./types";
  import type { ItemGridProps } from "$lib/types";

  let {
    headerProps,
    slotProps,
    items = [],
    variant = 1,
    isLoading = false,
    isShowDescription = true,
    itemClassName,
    className,
    gridColumns = 3,
    rowColumns = 3,
    width,
    height,
    itemWidth,
    itemHeight,
    isScrollbar = false,
    autoPlay = false,
    onClick,
  }: CarouselItemsPanelProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));

  const itemsPerSlide = $derived((gridColumns || 3) * (rowColumns || 3));

  const slides = $derived.by(() => {
    if (!items || items.length === 0) return [];
    const chunks: ItemGridProps[][] = [];
    const perSlide = itemsPerSlide;
    for (let i = 0; i < items.length; i += perSlide) {
      chunks.push(items.slice(i, i + perSlide));
    }
    return chunks;
  });

  const defaultPlugins = $derived(
    autoPlay ? [autoplay({ delay: 4000, stopOnInteraction: true })] : [],
  );
</script>

<CarouselHeaderSlot
  {headerProps}
  {slotProps}
  {isEmpty}
  {isLoading}
  plugins={defaultPlugins}
  {isScrollbar}
  emptyTitle={$t("empty.media.title")}
  emptyDescription={$t("empty.media.description")}
>
  {#if isLoading}
    <Carousel.Item class="basis-full min-w-0 shrink-0 grow-0 p-1">
      <div
        class="grid gap-3 w-full {className ?? ''}"
        style={`grid-template-columns: repeat(${responsive.isMobile ? Math.min(gridColumns, 2) : gridColumns}, minmax(0, 1fr));`}
      >
        {#each Array.from({ length: itemsPerSlide }) as _, i (`loading-${i}`)}
          <GridCard
            id={i}
            title={`${i}`}
            description=""
            icon=""
            {variant}
            {isLoading}
            {isShowDescription}
            {itemClassName}
            {width}
            {height}
            {itemWidth}
            {itemHeight}
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
          {#each slideItems as item, i (`item-${item.id ?? `${slideIndex}-${i}`}`)}
            <GridCard
              {...item}
              {variant}
              {onClick}
              {itemClassName}
              width={item.width ?? width}
              height={item.height ?? height}
              itemWidth={item.itemWidth ?? itemWidth}
              itemHeight={item.itemHeight ?? itemHeight}
              isShowDescription={item.isShowDescription ??
                isShowDescription}
            />
          {/each}
        </div>
      </Carousel.Item>
    {/each}
  {/if}
</CarouselHeaderSlot>

