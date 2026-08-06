<script lang="ts">
  import CardPromotion from "$lib/components/core/card/promotion/CardPromotion.svelte";
  import type { CarouselPromotionProps } from "$lib/components/core/carousel/types.js";
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";

  const {
    title,
    items,
    isButtonPreviousAndNext = true,
    buttonPreviousAndNextClass = "",
    containerClass = "",
  }: CarouselPromotionProps = $props();
</script>

<div class="w-full flex justify-center">
  <div class="w-[95%] p-2 rounded-xl {containerClass}">
    <div class="text-xl font-bold ml-10">{title ?? ""}</div>
    <CarouselSlot
      isBorderBottom={false}
      {isButtonPreviousAndNext}
      {buttonPreviousAndNextClass}
      containerClass="w-full"
    >
      {#each items as item (item.id)}
        <div class="mx-2">
          <CardPromotion {...item} />
        </div>
      {/each}
    </CarouselSlot>
  </div>
</div>
