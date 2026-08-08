<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { CarouselBadgeProps } from "$lib/components/core/carousel/types.js";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import CarouselSlot from "../../../panel/CarouselSlot.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  const {
    items,
    imageClass,
    iconClass,
    labelClass,
    activeClass,
    valueActive,
    isLoading = false,
    itemCarouselClass,
    orientation = "horizontal",
    isBorderItem = false,
    isBorderBottom = false,
    isButtonPreviousAndNext = true,
    buttonPreviousAndNextClass = "",
  }: CarouselBadgeProps = $props();

  const DEFAULT_IMG_OR_ICON_CLASS = "size-3";
</script>

<CarouselSlot
  {isBorderBottom}
  {isButtonPreviousAndNext}
  {buttonPreviousAndNextClass}
>
  {#if isLoading}
    {#each Array.from({ length: 10 }) as it (it)}
      <Carousel.Item>
        <Skeleton class="h-4 w-37.5" />
      </Carousel.Item>
    {/each}
  {:else}
    {#each items as item, i (i)}
      <Carousel.Item
        onclick={() => item.onClick?.(item.value)}
        class={`
          flex cursor-pointer items-center justify-center gap-1 basis-auto mx-3 pl-0
          ${isBorderItem ? "border border-solid border-gray-300 rounded-lg" : ""} 
          ${item.value === valueActive ? activeClass : ""}
          ${itemCarouselClass}`}
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
            {#if typeof item.icon === "string"}
              <div>
                <i
                  class={`${item.icon} ${iconClass || DEFAULT_IMG_OR_ICON_CLASS}`}
                >
                </i>
              </div>
            {:else}
              <HugeiconsIcon
                icon={item.icon}
                class={iconClass || DEFAULT_IMG_OR_ICON_CLASS}
              />
            {/if}
          {/if}
          <div class={`${labelClass}`}>{item.label}</div>
        </div>
      </Carousel.Item>
    {/each}
  {/if}
</CarouselSlot>
