<script lang="ts" module>
  /**
   * Lista de avaliações de clientes do produto.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProductDetailReviews reviews={data.reviews} />
   * ```
   */
</script>

<script lang="ts">
  import CardStarRating from "../../../core/card/shared/CardStarRating.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { ProductDetailsReview } from "../types";

  let {
    reviews,
    isLoading = false,
  }: {
    reviews?: ProductDetailsReview[];
    isLoading?: boolean;
  } = $props();
</script>

{#if isLoading}
  <div class="flex flex-col gap-6">
    {#each Array.from({ length: 2 }) as _, i (i)}
      <div class="flex flex-col gap-2 border-b pb-6 last:border-b-0">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <Skeleton class="size-9 rounded-full" />
            <div class="flex flex-col gap-1">
              <Skeleton class="h-4 w-28 rounded-md" />
              <Skeleton class="h-3 w-20 rounded-md" />
            </div>
          </div>
          <Skeleton class="h-5 w-24 rounded-md" />
        </div>
        <Skeleton class="h-4 w-full rounded-md" />
        <Skeleton class="h-4 w-3/4 rounded-md" />
      </div>
    {/each}
  </div>
{:else if reviews?.length}
  <div class="flex flex-col gap-6">
    {#each reviews as review (review.id)}
      <article class="flex flex-col gap-2 border-b pb-6 last:border-b-0">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="flex size-9 items-center justify-center rounded-full bg-muted text-sm font-semibold">
              {review.author.charAt(0)}
            </div>
            <div>
              <p class="text-sm font-medium">{review.author}</p>
              {#if review.date}
                <p class="text-xs text-muted-foreground">{review.date}</p>
              {/if}
            </div>
          </div>
          <CardStarRating startNumber={review.rating} startMax={5} />
        </div>
        <p class="text-sm leading-6 text-foreground/85">{review.comment}</p>
      </article>
    {/each}
  </div>
{:else}
  <p class="text-muted-foreground">Sem avaliações disponíveis.</p>
{/if}
