<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import * as StarRating from "$lib/components/ui/star-rating";

  type Props = {
    startNumber: number;
    startMax: number;
    isLoading?: boolean;
  };

  let { startNumber, startMax, isLoading }: Props = $props();
</script>

{#if isLoading}
  <Skeleton class="w-12 h-6 rounded-lg bg-gray-300/90" />
{:else if startNumber}
  <StarRating.Root max={startMax} value={startNumber} class="size-15 h-auto">
    {#snippet children({ items })}
      {#each items as item (item.index)}
        <StarRating.Star {...item} class="py-0! my-0!" />
      {/each}
    {/snippet}
  </StarRating.Root>
{/if}
