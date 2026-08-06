<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { SimpleBadgeCarouselProps } from "$lib/components/core/carousel/types.js";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import CarouselSlot from "../../panel/CarouselSlot.svelte";

  const {
    items,
    imageClass,
    iconClass,
    labelClass,
    activeClass,
    valueActive,
    orientation = "horizontal",
    isBorderItem = true,
    isBorderBottom = true,
    isButtonPreviousAndNext = true,
    buttonPreviousAndNextClass = "",
  }: SimpleBadgeCarouselProps = $props();

  const DEFAULT_IMG_OR_ICON_CLASS = "size-5 rounded-lg";
</script>

<CarouselSlot
  {isBorderBottom}
  {isButtonPreviousAndNext}
  {buttonPreviousAndNextClass}
>
  {#each items as item (item.value)}
    <Carousel.Item
      onclick={() => item.onClick?.(item.value)}
      class={`
          flex cursor-pointer items-center justify-center gap-1 basis-auto mx-3 pl-0
          ${isBorderItem ? "border border-solid border-gray-300 rounded-lg" : ""} 
          ${item.value === valueActive ? activeClass : ""}`}
    >
      <div
        class={`
              flex gap-1 mx-2 p-0.5 justify-center items-center
               ${orientation === "horizontal" ? "flex-row" : "flex-col"}
          `}
      >
        {#if item.image}
          <img
            src={item.image}
            alt={item.label}
            class={imageClass || DEFAULT_IMG_OR_ICON_CLASS}
          />
        {:else if item.icon}
          <HugeiconsIcon
            icon={item.icon}
            class={iconClass || DEFAULT_IMG_OR_ICON_CLASS}
          />
        {/if}
        <div class={`${labelClass}`}>{item.label}</div>
      </div>
    </Carousel.Item>
  {/each}
</CarouselSlot>
