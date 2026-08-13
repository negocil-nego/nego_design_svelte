<script lang="ts" module>
  /**
   * Variante 03 da página de detalhes do produto.
   * Layout com galeria, conteúdo expandido e painel de compra sticky.
   * @component
   * @example
   * ```svelte
   * <ProductDetails03 {data} {onBuy} {onFavorite} {onCart} />
   * ```
   */
</script>

<script lang="ts">
  import ProductDetailBreadcrumb from "../shared/ProductDetailBreadcrumb.svelte";
  import ProductDetailDescription from "../shared/ProductDetailDescription.svelte";
  import ProductDetailFeatures from "../shared/ProductDetailFeatures.svelte";
  import ProductDetailFilesVertical from "../shared/ProductDetailFilesVertical.svelte";
  import ProductDetailHeader from "../shared/ProductDetailHeader.svelte";
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

  <div class="grid gap-10 lg:grid-cols-[1fr_22rem]">
    <div class="flex flex-col gap-8">
      <ProductDetailFilesVertical images={data.gallery} {isLoading} />

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
      </div>
    </div>

    <aside class="lg:sticky lg:top-8 lg:self-start">
      <div class="rounded-lg border p-6">
        <ProductPurchasePanel {data} {isLoading} {onBuy} {onFavorite} {onCart} />
      </div>
    </aside>
  </div>

  {#if data.location}
    <div class="mt-12">
      <ProductDetailMap location={data.location} {isLoading} />
    </div>
  {/if}
</div>
