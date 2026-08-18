<script lang="ts">
  import items from "$lib/components/core/card/media/data";
  import CarouselGridMedia from "$lib/components/core/carousel/grid/media/ui/CarouselGridMedia.svelte";
</script>

<CarouselGridMedia
  {items}
  headerProps={{
    title: "Promoções imperdiveis",
    description: "Confira as promoções imperdiveis que preparamos para você",
    containerClass: "bg-gray-50 dark:bg-gray-800",
    onButtonViewAll: () => console.log("click"),
  }}
  slotProps={{
    buttonPreviousAndNextClass: "bg-white dark:bg-gray-800",
    positionButtonPreviousAndNext: "center",
  }}
  variant={2}
  onFavoriteClick={(id: string | number) => console.log("click", id)}
  onButtonProfile={(id: string | number) => console.log("click", id)}
  onButtonDetails={(id: string | number) => console.log("click", id)}
/>
