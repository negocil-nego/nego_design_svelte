<script lang="ts" module>
  /**
   * Variante 02 da página de detalhes do produto.
   * Layout com galeria em destaque e conteúdo em coluna centralizada.
   * @component
   * @example
   * ```svelte
   * <ProductDetails02 {data} {onBuy} {onFavorite} {onCart} />
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

<div class="bg-background">
  <ProductDetailFilesVertical
    images={data.gallery}
    className="mx-auto max-w-5xl px-6 pt-10"
    {isLoading}
  />

  <div class="mx-auto max-w-3xl px-6 py-12">
    <div class="flex flex-col gap-6">
      <div class="flex justify-center">
        <ProductDetailBreadcrumb items={data.breadcrumb} {isLoading} />
      </div>

      <ProductDetailHeader
        title={data.title}
        subtitle={data.subtitle}
        className="items-center text-center"
        {isLoading}
      />

      <div class="flex justify-center">
        <ProductDetailTags tags={data.tags} {isLoading} />
      </div>

      <ProductDetailDescription
        description={data.description}
        longDescription={data.longDescription}
        {isLoading}
      />

      {#if data.features}
        <div class="mx-auto w-full max-w-md">
          <ProductDetailFeatures features={data.features} {isLoading} />
        </div>
      {/if}

      <div class="flex justify-center">
        <div class="w-full max-w-sm">
          <ProductPurchasePanel {data} {isLoading} {onBuy} {onFavorite} {onCart} />
        </div>
      </div>
    </div>
  </div>

  {#if data.location}
    <div class="mx-auto max-w-3xl px-6 pb-12">
      <ProductDetailMap location={data.location} {isLoading} />
    </div>
  {/if}
</div>
