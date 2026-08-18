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
  import ProductPromotionDetails from "./ProductPromotionDetails.svelte";
  import type {
    ProductDetailsData,
    ProductPromotionDetailsProps,
  } from "../types";

  let {
    data,
    isLoading = false,
    promotions = [],
    showPriceWithPromotions = false,
    onBuy,
    onFavorite,
    onCart,
  }: {
    data: ProductDetailsData;
    isLoading?: boolean;
    promotions?: ProductPromotionDetailsProps[];
    showPriceWithPromotions?: boolean;
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

  {#if !(showPriceWithPromotions && promotions.length > 0)}
    <ProductDetailPrice
      newPrice={data.newPrice}
      oldPrice={data.oldPrice}
      currency={data.currency}
      {isLoading}
    />
  {/if}

  <ProductPromotionDetails {promotions} {isLoading} />

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
