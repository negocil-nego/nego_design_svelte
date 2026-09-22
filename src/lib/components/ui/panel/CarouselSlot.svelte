<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import type { CarouselSlotProps } from "./type";

  const {
    positionButtonPreviousAndNext = "center",
    isButtonPreviousAndNext = true,
    buttonPreviousAndNextClass = "",
    isBorderBottom = false,
    containerClass = "w-full",
    plugins = [],
    onMoreViewClick,
    children,
  }: CarouselSlotProps = $props();

  const styleTopCenter = "bg-blue-700! text-white! cursor-pointer!";
  const styleCenter =
    "absolute top-1/2 -translate-y-1/2 mt-0.5 md:mr-0 z-50 bg-blue-700! text-white! cursor-pointer!";

  const responsive = useDevice();
</script>

<div
  class={`relative py-3 px-2 ${isBorderBottom ? "border-b" : ""} ${containerClass}`}
>
  <Carousel.Root {plugins}>
    <Carousel.Content
      class={positionButtonPreviousAndNext == "top_right" ? "" : "ml-0"}
    >
      {@render children?.()}
    </Carousel.Content>
    {#if positionButtonPreviousAndNext == "center" && !responsive.isMobile}
      {#if onMoreViewClick}
        <div class="absolute -top-5 md:-top-10 right-8 md:right-10 lg:right-12 z-20">
          <button
            type="button"
            onclick={onMoreViewClick}
            class={styleTopCenter}
          >
            <span class="px-2 py-1 text-sm font-medium">Ver mais</span>
          </button>
        </div>
      {/if}
      {#if isButtonPreviousAndNext}
        <Carousel.Previous
          class={`-left-8 ${styleCenter} ${buttonPreviousAndNextClass}`}
        />
        <Carousel.Next
          class={`-right-8 ${styleCenter} ${buttonPreviousAndNextClass}`}
        />
      {/if}
    {/if}
    {#if positionButtonPreviousAndNext == "top_right" || responsive.isMobile}
      <div class="flex items-center justify-end gap-2 absolute -top-5 md:-top-10 right-8 md:right-10 lg:right-12 z-20">
        {#if onMoreViewClick}
          <button
            type="button"
            onclick={onMoreViewClick}
            class={styleTopCenter}
          >
            <span class="px-2 py-1 text-sm font-medium">Ver mais</span>
          </button>
        {/if}
        {#if isButtonPreviousAndNext}
          <Carousel.Previous
            class={`${styleTopCenter} ${buttonPreviousAndNextClass}`}
          />
          <Carousel.Next
            class={`${styleTopCenter} ${buttonPreviousAndNextClass}`}
          />
        {/if}
      </div>
    {/if}
  </Carousel.Root>
</div>
