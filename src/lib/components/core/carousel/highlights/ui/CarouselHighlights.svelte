<script lang="ts">
  import CardHighlight from "$lib/components/core/card/highlight/CardHighlight.svelte";
  import CarouselHeader from "../../shared/ui/CarouselHeader.svelte";
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";
  import type { CarouselHighlightsProps } from "../types";
  import { useDevice } from "$lib/hooks/responsive.svelte";

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
  >
    {#if isLoading}
      {#each Array.from({ length: responsive.isMobile ? 5 : 10 }) as it, i (i)}
        <div class="mx-2">
          <CardHighlight id={i} {isLoading} {varient} />
          <div class="src-only">{it}</div>
        </div>
      {/each}
    {:else}
      {#each items as item (item.id)}
        <div class="mx-2">
          <CardHighlight
            {...item}
            {varient}
            {isDescriptionIcon}
            {isDescriptionLabel}
          />
        </div>
      {/each}
    {/if}
  </CarouselSlot>
</CarouselHeader>
