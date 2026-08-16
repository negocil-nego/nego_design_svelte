<script lang="ts">
  import items from "$lib/components/core/card/product/data";
  import CarouselGridProduct from "$lib/components/core/carousel/grid/product/ui/CarouselGridProduct.svelte";

  let variant = $state<1 | 2>(2);
</script>

<svelte:head>
  <title>Carousel Grid Produtos | Negoturismo</title>
</svelte:head>

<div class="border-b bg-background px-6 py-3 flex items-center justify-between">
  <div class="flex items-center gap-2">
    <span
      class="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >Card Variant:</span
    >
    <button
      type="button"
      class="rounded-md px-3 py-1 text-xs font-medium transition-colors {variant ===
      1
        ? 'bg-primary text-primary-foreground shadow-sm'
        : 'bg-muted hover:bg-muted/80 text-muted-foreground'}"
      onclick={() => (variant = 1)}
    >
      Variante 1
    </button>
    <button
      type="button"
      class="rounded-md px-3 py-1 text-xs font-medium transition-colors {variant ===
      2
        ? 'bg-primary text-primary-foreground shadow-sm'
        : 'bg-muted hover:bg-muted/80 text-muted-foreground'}"
      onclick={() => (variant = 2)}
    >
      Variante 2
    </button>
  </div>
</div>

<CarouselGridProduct
  {items}
  {variant}
  headerProps={{
    title: "Acomodações e Pacotes Populares",
    description:
      "Explore os melhores hotéis, pousadas e resorts disponíveis para reserva imediata",
    containerClass: "bg-gray-50 dark:bg-gray-800/60 py-8 px-4 sm:px-6 lg:px-8",
    onButtonViewAll: () => alert("Ver todos os produtos"),
  }}
  slotProps={{
    buttonPreviousAndNextClass:
      "bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700",
    positionButtonPreviousAndNext: "center",
  }}
  gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
  isDescriptionIcon={false}
  isDescriptionLabel={false}
/>
