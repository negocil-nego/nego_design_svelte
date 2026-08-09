<script lang="ts">
  import CardPromotion from "$lib/components/core/card/promotion/CardPromotion.svelte";
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";
  import type { CarouselPromotionProps } from "../types";
  import CarouselHeader from "../../shared/ui/CarouselHeader.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";

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
    positionButtonPreviousAndNext,
    isDescriptionIcon,
    isDescriptionLabel,
    onButtonViewAll,
  }: CarouselPromotionProps = $props();

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
    {positionButtonPreviousAndNext}
    containerClass="w-full"
  >
    {#if isLoading}
      {#each Array.from({ length: responsive.isMobile ? 5 : 10 }) as it, i (i)}
        <div class="mx-2">
          <CardPromotion
            id={i}
            {isLoading}
            {isDescriptionIcon}
            {isDescriptionLabel}
          />
          <div class="src-only">{it}</div>
        </div>
      {/each}
    {:else}
      {#each items as item (item.id)}
        <div class="mx-2">
          <CardPromotion {...item} {isDescriptionIcon} {isDescriptionLabel} />
        </div>
      {/each}
    {/if}
  </CarouselSlot>
</CarouselHeader>
