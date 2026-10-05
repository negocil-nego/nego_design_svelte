<script lang="ts">
  import type { GridProps } from "../data/types";
  import GridCard from "./shared/GridCard.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import CarouselHeaderSlot from "$lib/components/ui/carousel/core/shared/ui/CarouselHeaderSlot.svelte";
  import { autoplay } from "$lib/components/ui/carousel/autoplay.js";
  import { cn } from "$lib/utils";
  import { useDevice } from "$lib/hooks/responsive.svelte";

  let {
    variant,
    isLoading = false,
    items = [],
    itemClassName,
    width,
    height,
    itemWidth,
    itemHeight,
    onClick,
    slotProps,
    isScrollbar = false,
    isShowDescription = true,
    autoPlay = false,
  }: GridProps & {
    isScrollbar?: boolean;
  } = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));

  const plugins = $derived(
    autoPlay
      ? [
          autoplay({
            delay: 4000,
            loop: true,
            stopOnInteraction: false,
          }),
        ]
      : [autoplay({ delay: 4000, stopOnInteraction: true })],
  );

  const descriptionWidthHightClass = $derived(
    isShowDescription
      ? ""
      : "min-w-[100px] md:min-h-[100px] md:min-w-[150px] md:min-h-[150px]",
  );

  const effectiveSlotProps = $derived({
    isButtonPreviousAndNext: false,
    ...slotProps,
  });
</script>

<CarouselHeaderSlot
  slotProps={effectiveSlotProps}
  {isEmpty}
  {isLoading}
  {plugins}
  {isScrollbar}
>
  {#if isLoading}
    {#each Array.from( { length: responsive.isMobile ? 3 : 10 }, ) as _, i (`skeleton-${i}`)}
      <Carousel.Item class="basis-auto relative">
        <GridCard
          id={i}
          title={`${i}`}
          description=""
          icon=""
          {variant}
          {isLoading}
          {isShowDescription}
          {width}
          {height}
          {itemWidth}
          {itemHeight}
        />
      </Carousel.Item>
    {/each}
  {:else}
    {#each items as item, i (`panel-${item.id ?? i}`)}
      <Carousel.Item class={`basis-auto relative ${i == 0 ? "ml-3" : ""}`}>
        <GridCard
          {...item}
          {variant}
          {onClick}
          width={item.width ?? width}
          height={item.height ?? height}
          itemWidth={item.itemWidth ?? itemWidth}
          itemHeight={item.itemHeight ?? itemHeight}
          itemClassName={cn(itemClassName, descriptionWidthHightClass)}
          isShowDescription={item.isShowDescription ?? isShowDescription}
        />
      </Carousel.Item>
    {/each}
  {/if}
</CarouselHeaderSlot>
