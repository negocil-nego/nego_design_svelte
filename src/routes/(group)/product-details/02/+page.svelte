<script lang="ts">
  import ProductDetails from "$lib/components/pages/product-details/ProductDetails.svelte";
  import { productData } from "../_shared/data";

  let isLoading = $state(false);
</script>

<div class="bg-background">
  <ProductDetails
    varient={2}
    data={productData}
    {isLoading}
    onBuy={(id) => alert(`Buy ${id}`)}
    onFavorite={(id) => alert(`Favorite ${id}`)}
    onCart={(id) => alert(`Cart ${id}`)}
  />
</div>
