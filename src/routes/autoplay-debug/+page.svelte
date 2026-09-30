<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import { autoplay } from "$lib/components/ui/carousel/autoplay.js";

  const items = Array.from({ length: 12 }, (_, i) => i + 1);
</script>

<h1 class="p-4">autoplay debug</h1>

<Carousel.Root plugins={[autoplay({ delay: 4000, stopOnInteraction: true })]}>
  <Carousel.Content>
    {#each items as n (n)}
      <Carousel.Item class="basis-auto">
        <div class="w-40 h-40 bg-blue-200 flex items-center justify-center">
          {n}
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
</Carousel.Root>
