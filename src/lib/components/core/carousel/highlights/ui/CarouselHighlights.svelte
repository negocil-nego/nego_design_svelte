<script lang="ts">
  import CardHighlight from "$lib/components/core/card/highlight/CardHighlight.svelte";
  import CarouselHeader from "../../shared/ui/CarouselHeader.svelte";
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselHighlightsProps } from "../types";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import Autoplay from "embla-carousel-autoplay";

  const {
    title,
    items,
    description,
    titleClass,
    descriptionClass,
    isButtonPreviousAndNext = true,
    buttonPreviousAndNextClass = "",
    containerClass = "",
    isLoading = false,
    varient = 1,
    isDescriptionIcon,
    isDescriptionLabel,
    onButtonViewAll,
  }: CarouselHighlightsProps = $props();

  const responsive = useDevice();
</script>

<CarouselHeader
  {title}
  {description}
  {titleClass}
  {descriptionClass}
  {containerClass}
  {onButtonViewAll}
>
  <CarouselSlot
    isBorderBottom={false}
    {isButtonPreviousAndNext}
    {buttonPreviousAndNextClass}
    containerClass="w-full"
    plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
  >
    {#if isLoading}
      {#each Array.from( { length: responsive.isMobile ? 5 : 10 }, ) as _, i (`loading-${i}`)}
        <Carousel.Item class="pl-2 md:basis-1/2 lg:basis-auto">
          <CardHighlight id={i} {isLoading} {varient} />
        </Carousel.Item>
      {/each}
    {:else}
      {#each items as item (item.id)}
        <Carousel.Item class="pl-2 md:basis-1/2 lg:basis-auto">
          <CardHighlight
            {...item}
            {varient}
            {isDescriptionIcon}
            {isDescriptionLabel}
          />
        </Carousel.Item>
      {/each}
    {/if}
  </CarouselSlot>
</CarouselHeader>
