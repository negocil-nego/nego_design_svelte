<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import type { Snippet } from "svelte";

    type Props = {
        isBorderBottom?: boolean;
        isButtonPreviousAndNext?: boolean;
        buttonPreviousAndNextClass?: string;
        children: Snippet;
    };

    const {
        isBorderBottom = true,
        isButtonPreviousAndNext = true,
        buttonPreviousAndNextClass = "",
        children,
    }: Props = $props();
</script>

<div class={`relative py-3 px-2 ${isBorderBottom ? "border-b" : ""}`}>
    <Carousel.Root>
        <Carousel.Content class="ml-10">
            {@render children()}
        </Carousel.Content>
        {#if isButtonPreviousAndNext}
            <Carousel.Previous
                class={`absolute top-1/2 -translate-y-1/2 left-1 mt-0.5 ${buttonPreviousAndNextClass}`}
            />
            <Carousel.Next
                class={`absolute top-1/2 -translate-y-1/2 right-1 mt-0.5 ${buttonPreviousAndNextClass}`}
            />
        {/if}
    </Carousel.Root>
</div>
