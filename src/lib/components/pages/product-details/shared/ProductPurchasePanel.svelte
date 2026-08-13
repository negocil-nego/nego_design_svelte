<script lang="ts" module>
  /**
   * Painel de compra do produto: avaliação, preço e ações.
   * Compõe ProductDetailRating, ProductDetailPrice e ProductDetailActions.
   * @component
   * @example
   * ```svelte
   * <ProductPurchasePanel {data} isLoading={true} />
   * ```
   */
</script>

<script lang="ts">
  import ProductDetailActions from "./ProductDetailActions.svelte";
  import ProductDetailPrice from "./ProductDetailPrice.svelte";
  import ProductDetailRating from "./ProductDetailRating.svelte";
  import type { ProductDetailsData } from "../types";

  let {
    data,
    isLoading = false,
    onBuy,
    onFavorite,
    onCart,
  }: {
    data: ProductDetailsData;
    isLoading?: boolean;
    onBuy?: (id: string | number) => void;
    onFavorite?: (id: string | number) => void;
    onCart?: (id: string | number) => void;
  } = $props();
</script>

<div class="flex flex-col gap-4">
  <ProductDetailRating
    rating={data.rating}
    reviewsCount={data.reviewsCount}
    {isLoading}
  />

  <ProductDetailPrice
    newPrice={data.newPrice}
    oldPrice={data.oldPrice}
    currency={data.currency}
    {isLoading}
  />

  <ProductDetailActions
    id={data.id}
    buttonBuyText={data.buttonBuyText}
    isFavorite={data.isFavorite}
    isCart={data.isCart}
    {isLoading}
    {onBuy}
    {onFavorite}
    {onCart}
  />
</div>
