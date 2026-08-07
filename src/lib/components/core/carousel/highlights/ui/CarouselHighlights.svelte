<script lang="ts">
  import type { CarouselHighlightsProps } from "$lib/components/core/carousel/types.js";
  import Button from "$lib/components/ui/button/button.svelte";
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";
  import { t } from "$lib/i18n";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { ArrowRight02Icon } from "@hugeicons/core-free-icons";
  import CardHighlight from "$lib/components/core/card/highlight/CardHighlight.svelte";

  const {
    title,
    items,
    description,
    titleClass,
    descriptionClass,
    isButtonPreviousAndNext = true,
    buttonPreviousAndNextClass = "",
    containerClass = "",
    onButtonViewAll,
  }: CarouselHighlightsProps = $props();
</script>

<div class="w-full flex justify-center">
  <div class="w-[95%] p-2 rounded-xl {containerClass}">
    <div class="ml-10 flex flex-col gap-1">
      <div class="flex justify-between">
        <div>
          {#if title}
            <h1 class={`text-xl ${titleClass}`}>{title}</h1>
          {/if}
          {#if description}
            <div class={`mt-3 w-11/12 ${descriptionClass}`}>
              {description}
            </div>
          {/if}
        </div>
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
          <CardHighlight {...item} />
        </div>
      {/each}
    </CarouselSlot>
  </div>
</div>
