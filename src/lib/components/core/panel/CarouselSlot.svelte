<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    positionButtonPreviousAndNext?: "center" | "top_right";
    buttonPreviousAndNextClass?: string;
    isButtonPreviousAndNext?: boolean;
    isBorderBottom?: boolean;
    containerClass?: string;
    children: Snippet;
  };

  const {
    positionButtonPreviousAndNext = "center",
    isButtonPreviousAndNext = true,
    buttonPreviousAndNextClass = "",
    isBorderBottom = true,
    containerClass = "",
    children,
  }: Props = $props();

  const styleTopCenter = "bg-blue-700! text-white! cursor-pointer!";
  const styleCenter =
    "absolute top-1/2 -translate-y-1/2 mt-0.5 mr-0 z-50 bg-blue-700! text-white! cursor-pointer!";
</script>

<div
  class={`relative py-3 px-2 ${isBorderBottom ? "border-b" : ""} ${containerClass}`}
>
  <Carousel.Root>
    <Carousel.Content
      class={positionButtonPreviousAndNext == "top_right" ? "" : "ml-0"}
    >
      {@render children()}
    </Carousel.Content>
    {#if positionButtonPreviousAndNext == "center"}
      {#if isButtonPreviousAndNext}
        <Carousel.Previous
          class={`-left-8 ${styleCenter} ${buttonPreviousAndNextClass}`}
        />
        <Carousel.Next
          class={`-right-8 ${styleCenter} ${buttonPreviousAndNextClass}`}
        />
      {/if}
    {/if}
    {#if positionButtonPreviousAndNext == "top_right"}
      {#if isButtonPreviousAndNext}
        <div class="absolute -top-6 right-10 md:right-10 lg:right-12 z-20">
          <Carousel.Previous
            class={`${styleTopCenter} ${buttonPreviousAndNextClass}`}
          />
          <Carousel.Next
            class={`${styleTopCenter} ${buttonPreviousAndNextClass}`}
          />
        </div>
      {/if}
    {/if}
  </Carousel.Root>
</div>
