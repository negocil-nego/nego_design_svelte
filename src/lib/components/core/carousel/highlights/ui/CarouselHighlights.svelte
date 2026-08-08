<script lang="ts">
  import CardHighlight from "$lib/components/core/card/highlight/CardHighlight.svelte";
  import CarouselHeader from "../../shared/ui/CarouselHeader.svelte";
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";
  import type { CarouselHighlightsProps } from "../types";

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
    onButtonViewAll,
  }: CarouselHighlightsProps = $props();
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
    {#each items as item (item.id)}
      <div class="mx-2">
        <CardHighlight {...item} {isLoading} />
      </div>
    {/each}
  </CarouselSlot>
</CarouselHeader>
