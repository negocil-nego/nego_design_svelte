<script lang="ts" module>
  /**
   * Variante 04 da página de detalhes do produto.
   * Layout com galeria, informações e abas de conteúdo (descrição,
   * avaliações) abaixo dos dados principais.
   * @component
   * @example
   * ```svelte
   * <ProductDetails04 {data} {onBuy} {onFavorite} {onCart} />
   * ```
   */
</script>

<script lang="ts">
  import ProductDetailBreadcrumb from "../shared/ProductDetailBreadcrumb.svelte";
  import ProductDetailHeader from "../shared/ProductDetailHeader.svelte";
  import ProductDetailImage from "../shared/ProductDetailImage.svelte";
  import ProductDetailMap from "../shared/ProductDetailMap.svelte";
  import ProductDetailTags from "../shared/ProductDetailTags.svelte";
  import ProductDetailTabs from "../shared/ProductDetailTabs.svelte";
  import ProductPurchasePanel from "../shared/ProductPurchasePanel.svelte";
  import type {
    ProductDetailsData,
    ProductPromotionDetailsProps,
  } from "../types";
  import { useDevice } from "$lib/hooks/responsive.svelte";

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
  const responsive = useDevice();
</script>

<div class="mx-auto max-w-7xl px-6 py-10">
  <div class="mb-8">
    <ProductDetailBreadcrumb items={data.breadcrumb} {isLoading} />
  </div>

  <div class="grid gap-10 lg:grid-cols-2">
    <ProductDetailImage files={data.gallery} {isLoading} />

    <div class="flex flex-col gap-5">
      <ProductDetailHeader
        title={data.title}
        subtitle={data.subtitle}
        {isLoading}
      />

      <ProductDetailTags tags={data.tags} {isLoading} />

      <ProductPurchasePanel
        {data}
        {isLoading}
        {promotions}
        {showPriceWithPromotions}
        {onBuy}
        {onFavorite}
        {onCart}
      />

      {#if !responsive.isMobile}
        {#if data.location}
          <div class="mt-5">
            <ProductDetailMap location={data.location} {isLoading} />
          </div>
        {/if}
      {/if}
    </div>
  </div>

  <div class="mt-12 border-t pt-8">
    <ProductDetailTabs tabs={data.tabs} {data} {isLoading} />
  </div>

  {#if responsive.isMobile}
    {#if data.location}
      <div class="mt-12">
        <ProductDetailMap location={data.location} {isLoading} />
      </div>
    {/if}
  {/if}
</div>
