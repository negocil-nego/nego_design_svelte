<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { GridProps } from "../data/types";
  import Grid02 from "./02/Grid02.svelte";
  import Grid01 from "./01/Grid01.svelte";

  let { variant, isLoading, items, itemClassName, onClick }: GridProps =
    $props();
</script>

<Carousel.Root>
  <Carousel.Content>
    {#if isLoading}
      <div class="flex items-center justify-between w-full gap-1 md:gap-2">
        {#each Array.from({ length: 10 }) as _, i (`skeleton-${i}`)}
          <Carousel.Item class="basis-auto relative">
            {#if variant == 2}
              <Grid02 title={`${i}`} description="" icon="" {isLoading} />
            {:else}
              <Grid01 title={`${i}`} description="" icon="" {isLoading} />
            {/if}
          </Carousel.Item>
        {/each}
      </div>
    {:else}
      {#each items as item, i (`panel-${i}`)}
        <Carousel.Item class="basis-auto relative">
          {#if variant == 2}
            <Grid02 {...item} {onClick} {itemClassName} />
          {:else}
            <Grid01 {...item} {onClick} {itemClassName} />
          {/if}
        </Carousel.Item>
      {/each}
    {/if}
  </Carousel.Content>
</Carousel.Root>
