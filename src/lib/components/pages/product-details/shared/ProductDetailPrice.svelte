<script lang="ts" module>
  /**
   * Preço do produto (novo e antigo), com moeda opcional.
   * Quando `isLoading` é true, exibe um Skeleton.
   * @component
   * @example
   * ```svelte
   * <ProductDetailPrice newPrice={1000} oldPrice={2000} currency="Kz" />
   * ```
   */
</script>

<script lang="ts">
  import CardStartPrice from "../../../core/card/shared/CardStartPrice.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  let {
    newPrice,
    oldPrice,
    currency,
    isLoading = false,
  }: {
    newPrice?: string | number;
    oldPrice?: string | number;
    currency?: string;
    isLoading?: boolean;
  } = $props();

  const formatted = $derived(
    newPrice != null
      ? currency
        ? `${newPrice} ${currency}`
        : String(newPrice)
      : undefined,
  );
</script>

{#if isLoading}
  <Skeleton class="h-7 w-28 rounded-md" />
{:else if formatted || oldPrice}
  <div class="flex items-end gap-3">
    <CardStartPrice newPrice={formatted} oldPrice={oldPrice} />
  </div>
{/if}
