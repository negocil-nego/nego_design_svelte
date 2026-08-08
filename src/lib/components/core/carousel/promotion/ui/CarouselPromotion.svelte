<script lang="ts">
  import CardPromotion from "$lib/components/core/card/promotion/CardPromotion.svelte";
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";
  import type { CarouselPromotionProps } from "../types";
  import CarouselHeader from "../../shared/ui/CarouselHeader.svelte";

  const {
    title,
    items,
    description,
    titleClass,
    descriptionClass,
    isButtonPreviousAndNext = true,
    isLoading = false,
    buttonPreviousAndNextClass = "",
    containerClass = "",
    onButtonViewAll,
  }: CarouselPromotionProps = $props();
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
        <CardPromotion {...item} {isLoading} />
      </div>
    {/each}
  </CarouselSlot>
</CarouselHeader>
