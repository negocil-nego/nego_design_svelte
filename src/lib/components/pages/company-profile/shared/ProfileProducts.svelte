<script lang="ts" module>
  /**
   * Secção "Produtos": exibe a lista de produtos/serviços da empresa
   * utilizando o componente CarouselGridProduct.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProfileProducts data={data.products} />
   * ```
   */
</script>

<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import CarouselGridProduct from "$lib/components/ui/carousel/core/grid/product/ui/CarouselGridProduct.svelte";
  import type { ProfileProductsData } from "../types";
      import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";

  let {
    data,
    isLoading = false,
    className = "",
  }: {
    data?: ProfileProductsData;
    isLoading?: boolean;
    className?: string;
  } = $props();

  const items = $derived(data?.items ?? []);
  const loading = $derived(isLoading || Boolean(data?.isLoading));
  const variant = $derived(data?.variant ?? data?.varient ?? 1);
</script>

<div class="bg-gray-50 dark:bg-background p-4 md:p-6 rounded-lg {className}">
  <h2 class="mb-4 flex items-center gap-2 text-lg font-bold">
    <ImageHugeicons icon="package" class="size-5" />
    {data?.title ?? "Produtos"}
  </h2>

  {#if !loading && items.length === 0}
    <NotFoundEmpty />
  {:else}
    <CarouselGridProduct
      {items}
      {variant}
      isLoading={loading}
      headerProps={{
        title: "",
        description: data?.description,
        containerClass: "p-0 bg-transparent",
      }}
      slotProps={{
        buttonPreviousAndNextClass:
          "bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700",
        positionButtonPreviousAndNext: "center",
      }}
      gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
    />
  {/if}
</div>
