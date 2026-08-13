<script lang="ts" module>
  /**
   * Avaliação (estrelas + contagem) do produto.
   * Quando `isLoading` é true, exibe um Skeleton.
   * @component
   * @example
   * ```svelte
   * <ProductDetailRating rating={4.5} reviewsCount={120} />
   * ```
   */
</script>

<script lang="ts">
  import CardStarRating from "../../../core/card/shared/CardStarRating.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  let {
    rating,
    reviewsCount,
    isLoading = false,
  }: {
    rating?: number;
    reviewsCount?: number;
    isLoading?: boolean;
  } = $props();
</script>

{#if isLoading}
  <div class="flex items-center gap-2">
    <Skeleton class="h-6 w-24 rounded-md" />
    <Skeleton class="h-4 w-16 rounded-md" />
  </div>
{:else if rating}
  <div class="flex items-center gap-2">
    <CardStarRating startNumber={rating} startMax={5} />
    {#if reviewsCount}
      <span class="text-sm text-muted-foreground">
        ({reviewsCount} avaliações)
      </span>
    {/if}
  </div>
{/if}
