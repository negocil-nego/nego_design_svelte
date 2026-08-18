<script lang="ts" module>
  /**
   * Página de detalhes do produto com seleção de layout.
   * Permite escolher entre quatro variantes:
   * - **1**: Duas colunas (galeria à esquerda, info à direita).
   * - **2**: Galeria em destaque com conteúdo centralizado.
   * - **3**: Painel de compra sticky no lado direito.
   * - **4**: Abas de conteúdo (descrição e avaliações) abaixo da info.
   *
   * @component
   * @example
   * ```svelte
   * <ProductDetails varient={1} data={productData} />
   *
   * <ProductDetails varient={3} data={productData} onBuy={(id) => console.log(id)} />
   * ```
   */
</script>

<script lang="ts">
  import type { ProductDetailsProps } from "./types";
  import ProductDetails01 from "./01/ProductDetails01.svelte";
  import ProductDetails02 from "./02/ProductDetails02.svelte";
  import ProductDetails03 from "./03/ProductDetails03.svelte";

  let {
    varient = 1,
    data,
    isLoading = false,
    promotions = [],
    showPriceWithPromotions = false,
    onBuy,
    onFavorite,
    onCart,
  }: ProductDetailsProps = $props();
</script>

{#if varient === 2}
  <ProductDetails02
    {data}
    {isLoading}
    {promotions}
    {showPriceWithPromotions}
    {onBuy}
    {onFavorite}
    {onCart}
  />
{:else if varient === 3}
  <ProductDetails03
    {data}
    {isLoading}
    {promotions}
    {showPriceWithPromotions}
    {onBuy}
    {onFavorite}
    {onCart}
  />
{:else}
  <ProductDetails01
    {data}
    {isLoading}
    {promotions}
    {showPriceWithPromotions}
    {onBuy}
    {onFavorite}
    {onCart}
  />
{/if}
