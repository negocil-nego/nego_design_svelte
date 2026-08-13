<script lang="ts">
  import ProductDetails from "$lib/components/pages/product-details/ProductDetails.svelte";
  import { productData } from "../_shared/data";

  let isLoading = $state(false);
</script>

<div class="bg-background">
  <div class="mx-auto max-w-7xl px-6 py-8">
    <h1 class="text-2xl font-bold mb-2">ProductDetails — Variante 02</h1>
    <p class="text-muted-foreground mb-6">Galeria em destaque com conteúdo centralizado.</p>

    <button
      type="button"
      class="mb-6 rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted transition-colors"
      onclick={() => (isLoading = !isLoading)}
    >
      {isLoading ? "Carregar dados" : "Mostrar loading"}
    </button>
  </div>

  <ProductDetails
    varient={2}
    data={productData}
    {isLoading}
    onBuy={(id) => alert(`Buy ${id}`)}
    onFavorite={(id) => alert(`Favorite ${id}`)}
    onCart={(id) => alert(`Cart ${id}`)}
  />
</div>
