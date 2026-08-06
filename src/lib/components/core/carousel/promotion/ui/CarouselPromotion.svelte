<script lang="ts">
  import CardPromotion from "$lib/components/core/card/promotion/CardPromotion.svelte";
  import type { CarouselPromotionProps } from "$lib/components/core/carousel/types.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";
  import { t } from "$lib/i18n";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { ArrowRight02Icon } from "@hugeicons/core-free-icons";

  const {
    title,
    items,
    isButtonPreviousAndNext = true,
    buttonPreviousAndNextClass = "",
    containerClass = "",
    onButtonViewAll,
  }: CarouselPromotionProps = $props();
</script>

<div class="w-full flex justify-center">
  <div class="w-[95%] p-2 rounded-xl {containerClass}">
    <div class="ml-10 flex flex-col gap-1">
      <div class="flex justify-between">
        <div class="text-xl">{title ?? $t("label.promotion")}</div>
        {#if onButtonViewAll}
          <div>
            <Button
              variant="ghost"
              size="sm"
              class="flex items-center gap-0.5"
              onclick={onButtonViewAll}
            >
              {$t("label.view.full")}
              <HugeiconsIcon icon={ArrowRight02Icon} />
            </Button>
          </div>
        {/if}
      </div>
    </div>
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
