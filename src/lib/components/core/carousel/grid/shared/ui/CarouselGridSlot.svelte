<script lang="ts">
  import type { Snippet } from "svelte";
  import CarouselSlot from "../../../../panel/CarouselSlot.svelte";
  import type { CarouselSlotProps } from "../../../../panel/type";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import Autoplay from "embla-carousel-autoplay";
  import type { SimpleGridProps } from "$lib/components/core/grid/data/types";
  import SimpleGrid from "$lib/components/core/grid/ui/SimpleGrid.svelte";

  type Props = {
    slotProps?: CarouselSlotProps;
    gridProps?: SimpleGridProps;
    gridClass?: string;
    children: Snippet;
  };

  const { slotProps, gridProps, gridClass, children }: Props = $props();

  const responsive = useDevice();
</script>

{#if gridProps}
  <SimpleGrid {...gridProps} />
{/if}
{#if responsive.isMobile}
  <CarouselSlot
    {...slotProps}
    plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
  >
    {@render children()}
  </CarouselSlot>
{:else}
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 p-2 {gridClass}"
  >
    {@render children()}
  </div>
{/if}
