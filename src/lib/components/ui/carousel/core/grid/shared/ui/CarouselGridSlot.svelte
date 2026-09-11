<script lang="ts">
  import type { Snippet } from "svelte";
  import CarouselSlot from "$lib/components/ui/panel/CarouselSlot.svelte";
  import type { CarouselSlotProps } from "$lib/components/ui/panel/type";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { autoplay } from "$lib/components/ui/carousel/autoplay.js";
  import type { GridProps } from "$lib/components/ui/grid/core/data/types";
  import SimpleGrid from "$lib/components/ui/grid/core/ui/ItemsSimpleGrid.svelte";

  type Props = {
    slotProps?: CarouselSlotProps;
    gridProps?: GridProps;
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
    plugins={[autoplay({ delay: 4000, stopOnInteraction: true })]}
  >
    {@render children()}
  </CarouselSlot>
{:else}
  <div
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-2 {gridClass}"
  >
    {@render children()}
  </div>
{/if}
