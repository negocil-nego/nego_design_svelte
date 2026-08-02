<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { SimpleCarouselProps } from "$lib/components/core/carousel/types.js";
  import { HugeiconsIcon } from "@hugeicons/svelte";

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
  }: SimpleCarouselProps = $props();

  const DEFAULT_IMG_OR_ICON_CLASS = "size-5 rounded-lg";
</script>

<nav class={`relative py-3 px-2 ${isBorderBottom ? "border-b" : ""}`}>
  <Carousel.Root>
    <Carousel.Content class="ml-10">
      {#each items as item (item.value)}
        <Carousel.Item
          onclick={() => item.onClick?.(item.value)}
          class={`
          flex cursor-pointer items-center justify-center gap-1 basis-auto mx-3 pl-0
          ${isBorderItem ? "border border-solid border-gray-300 rounded-lg" : ""} 
          ${item.value === valueActive ? activeClass : ""}`}
        >
          <div class={`
              flex gap-1 mx-2 p-0.5 justify-center items-center
               ${orientation === "horizontal" ? "flex-row" : "flex-col"}
          `}>
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
    </Carousel.Content>
    {#if isButtonPreviousAndNext}
      <Carousel.Previous
        class={`absolute top-1/2 -translate-y-1/2 left-1 mt-0.5 ${buttonPreviousAndNextClass}`}
      />
      <Carousel.Next class={`absolute top-1/2 -translate-y-1/2 right-1 mt-0.5 ${buttonPreviousAndNextClass}`} />
    {/if}
  </Carousel.Root>
</nav>
