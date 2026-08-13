<script lang="ts">
  import type { Snippet } from "svelte";
  import CarouselSlot from "../../../../panel/CarouselSlot.svelte";
  import type { CarouselSlotProps } from "../../../../panel/type";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import Autoplay from "embla-carousel-autoplay";

  type Props = {
    slotProps?: CarouselSlotProps;
    totalItems: number;
    gridClass?: string;
    children: Snippet;
  };

  const { slotProps, totalItems, gridClass, children }: Props = $props();

  const responsive = useDevice();

  const colsClass = $derived(totalItems <= 2 ? "grid-cols-2" : "grid-cols-3");
</script>

{#if responsive.isMobile}
  <CarouselSlot
    {...slotProps}
    plugins={[Autoplay({ delay: 4000, stopOnInteraction: true })]}
  >
    {@render children()}
  </CarouselSlot>
{:else}
  <div class="grid {colsClass} gap-4 p-2 {gridClass}">
    {@render children()}
  </div>
{/if}
