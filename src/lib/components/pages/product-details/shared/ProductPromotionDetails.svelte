<script lang="ts">
  import CardPromotionPrice from "../../../core/card/promotion/CardPromotionPrice.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { ProductPromotionDetailsProps } from "../types";

  let {
    promotions = [],
    isLoading = false,
  }: {
    promotions?: ProductPromotionDetailsProps[];
    isLoading?: boolean;
  } = $props();
</script>

{#if isLoading}
  <div class="flex flex-col gap-2">
    <Skeleton class="h-5 w-36 rounded-md" />
    <Skeleton class="h-5 w-28 rounded-md" />
  </div>
{:else if promotions.length > 0}
  <div class="flex flex-col gap-2">
    <span class="text-sm font-medium text-muted-foreground">Promoções</span>
    {#each promotions as promo (promo.id)}
      <div class="flex items-center gap-2">
        <CardPromotionPrice
          newPrice={promo.newPrice}
          oldPrice={promo.oldPrice}
        />
      </div>
    {/each}
  </div>
{/if}
