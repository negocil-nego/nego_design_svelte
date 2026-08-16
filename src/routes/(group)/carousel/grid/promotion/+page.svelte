<script lang="ts">
  import items from "$lib/components/core/card/promotion/data";
  import CarouselGridPromotion from "$lib/components/core/carousel/grid/promotion/ui/CarouselGridPromotion.svelte";
</script>

<svelte:head>
  <title>Carousel Grid Promoções | Negoturismo</title>
</svelte:head>

<CarouselGridPromotion
  {items}
  headerProps={{
    title: "Promoções Imperdíveis",
    description: "Confira as melhores ofertas e descontos exclusivos em hotéis e estadias para você",
    containerClass: "bg-gray-50 dark:bg-gray-800/60 py-8 px-4 sm:px-6 lg:px-8",
    onButtonViewAll: () => alert("Ver todas as promoções"),
  }}
  slotProps={{
    buttonPreviousAndNextClass: "bg-white dark:bg-gray-800 shadow-md hover:bg-gray-100 dark:hover:bg-gray-700",
    positionButtonPreviousAndNext: "center",
  }}
  gridClass="grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4"
  isDescriptionIcon={false}
  isDescriptionLabel={false}
/>
