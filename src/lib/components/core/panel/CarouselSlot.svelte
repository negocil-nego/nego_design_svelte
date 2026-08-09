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
          class={`absolute top-1/2 -translate-y-1/2 -left-8 mt-0.5 mr-0 bg-blue-700! text-white! ${buttonPreviousAndNextClass}`}
        />
        <Carousel.Next
          class={`absolute top-1/2 -translate-y-1/2 -right-8 mt-0.5 mr-0 bg-blue-700! text-white! ${buttonPreviousAndNextClass}`}
        />
      {/if}
    {/if}
    {#if positionButtonPreviousAndNext == "top_right"}
      {#if isButtonPreviousAndNext}
        <div class="absolute -top-6 right-10 md:right-10 lg:right-12">
          <Carousel.Previous
            class={`bg-blue-700! text-white! ${buttonPreviousAndNextClass}`}
          />
          <Carousel.Next
            class={`bg-blue-700! text-white! ${buttonPreviousAndNextClass}`}
          />
        </div>
      {/if}
    {/if}
  </Carousel.Root>
</div>
