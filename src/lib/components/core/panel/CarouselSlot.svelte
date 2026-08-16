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
      {#if isButtonPreviousAndNext}
        <div
          class="absolute -top-16 md:-top-10 right-8 md:right-10 lg:right-12 z-20"
        >
          <Carousel.Previous
            class={`${styleTopCenter} ${buttonPreviousAndNextClass}`}
          />
          <Carousel.Next
            class={`start-0 ${styleTopCenter} ${buttonPreviousAndNextClass}`}
          />
        </div>
      {/if}
    {/if}
  </Carousel.Root>
</div>
