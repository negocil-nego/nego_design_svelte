<script lang="ts">
  import type { GridProps } from "../data/types";
  import GridCard from "./shared/GridCard.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import CarouselSlot from "$lib/components/ui/panel/CarouselSlot.svelte";
  import { autoplay } from "$lib/components/ui/carousel/autoplay.js";
  import { cn } from "$lib/utils";

  let {
    variant,
    isLoading,
    items,
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

  const plugins = $derived(
    autoPlay
      ? [
          Carousel.autoplay({
            delay: 50000,
            loop: true,
            stopOnInteraction: false,
          }),
        ]
      : [],
  );

  const descriptionWidthHightClass = $derived(
    isShowDescription
      ? ""
      : "min-w-[100px] md:min-h-[100px] md:min-w-[150px] md:min-h-[150px]",
  );
</script>

{#if isLoading}
  <Carousel.Root {plugins} {isScrollbar}>
    <Carousel.Content>
      {#each Array.from({ length: 10 }) as _, i (`skeleton-${i}`)}
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
    </Carousel.Content>
  </Carousel.Root>
{:else}
  <CarouselSlot
    containerClass="w-full"
    isButtonPreviousAndNext={false}
    plugins={[autoplay({ delay: 4000, stopOnInteraction: true })]}
    {isScrollbar}
    {...slotProps}
  >
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
  </CarouselSlot>
{/if}
