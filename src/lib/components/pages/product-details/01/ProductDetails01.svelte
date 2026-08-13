<script lang="ts" module>
  /**
   * Variante 01 da página de detalhes do produto.
   * Layout de duas colunas: galeria à esquerda e informações/compra à direita.
   * @component
   * @example
   * ```svelte
   * <ProductDetails01 {data} {onBuy} {onFavorite} {onCart} />
   * ```
   */
</script>

<script lang="ts">
  import ProductDetailBreadcrumb from "../shared/ProductDetailBreadcrumb.svelte";
  import ProductDetailDescription from "../shared/ProductDetailDescription.svelte";
  import ProductDetailFeatures from "../shared/ProductDetailFeatures.svelte";
  import ProductDetailHeader from "../shared/ProductDetailHeader.svelte";
  import ProductDetailImage from "../shared/ProductDetailImage.svelte";
  import ProductDetailMap from "../shared/ProductDetailMap.svelte";
  import ProductDetailTags from "../shared/ProductDetailTags.svelte";
  import ProductPurchasePanel from "../shared/ProductPurchasePanel.svelte";
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

<div class="mx-auto max-w-7xl px-6 py-10">
  <div class="mb-8">
    <ProductDetailBreadcrumb items={data.breadcrumb} {isLoading} />
  </div>

  <div class="grid gap-10 lg:grid-cols-2">
    <ProductDetailImage images={data.gallery} {isLoading} />

    <div class="flex flex-col gap-5">
      <ProductDetailHeader title={data.title} subtitle={data.subtitle} {isLoading} />

      <ProductDetailTags tags={data.tags} {isLoading} />

      <ProductDetailDescription
        description={data.description}
        longDescription={data.longDescription}
        {isLoading}
      />

      {#if data.features}
        <ProductDetailFeatures features={data.features} {isLoading} />
      {/if}

      <ProductPurchasePanel {data} {isLoading} {onBuy} {onFavorite} {onCart} />
    </div>
  </div>

  {#if data.location}
    <div class="mt-12">
      <ProductDetailMap location={data.location} {isLoading} />
    </div>
  {/if}
</div>
