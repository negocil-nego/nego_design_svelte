<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import CarouselSlot from "$lib/components/ui/panel/CarouselSlot.svelte";
  import CarouselHeader from "../shared/ui/CarouselHeader.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import GridCard from "$lib/components/ui/grid/core/ui/shared/GridCard.svelte";
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

<CarouselHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.media.title")}
      description={$t("empty.media.description")}
    />
  {:else}
    <CarouselSlot
      containerClass="w-full"
      plugins={defaultPlugins}
      {isScrollbar}
      {...slotProps}
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
                  isShowDescription={item.isShowDescription ??
                    isShowDescription}
                />
              {/each}
            </div>
          </Carousel.Item>
        {/each}
      {/if}
    </CarouselSlot>
  {/if}
</CarouselHeader>
