<script lang="ts">
  import * as Carousel from "$lib/components/ui/carousel/index.js";
  import type { GridProps } from "../data/types";
  import Grid02 from "./02/Grid02.svelte";
  import Grid01 from "./01/Grid01.svelte";

  let {
    variant,
    isLoading,
    items,
    itemClassName,
    onClick,
    autoPlay = false,
  }: GridProps = $props();

  const plugins = $derived(
    autoPlay
      ? [
          Carousel.autoplay({
            delay: 50000,
            loop: true,
            stopOnInteraction: false,
          }),
        ]
      : [],
  );
</script>

<Carousel.Root {plugins} class="show-scrollbar">
  <Carousel.Content>
    {#if isLoading}
      {#each Array.from({ length: 10 }) as _, i (`skeleton-${i}`)}
        <Carousel.Item class="basis-auto relative">
          {#if variant == 2}
            <Grid02 title={`${i}`} description="" icon="" {isLoading} />
          {:else}
            <Grid01 title={`${i}`} description="" icon="" {isLoading} />
          {/if}
        </Carousel.Item>
      {/each}
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

<style>
  :global(.show-scrollbar [data-slot="carousel-content"] > div) {
    scrollbar-width: auto !important;
  }
  :global(.show-scrollbar [data-slot="carousel-content"] > div)::-webkit-scrollbar {
    display: block !important;
    height: 8px;
  }
  :global(.show-scrollbar [data-slot="carousel-content"] > div)::-webkit-scrollbar-thumb {
    background-color: hsl(var(--muted-foreground) / 0.3);
    border-radius: 4px;
  }
  :global(.show-scrollbar [data-slot="carousel-content"] > div)::-webkit-scrollbar-thumb:hover {
    background-color: hsl(var(--muted-foreground) / 0.5);
  }
  :global(.show-scrollbar [data-slot="carousel-content"] > div)::-webkit-scrollbar-track {
    background-color: hsl(var(--muted) / 0.5);
  }
</style>
