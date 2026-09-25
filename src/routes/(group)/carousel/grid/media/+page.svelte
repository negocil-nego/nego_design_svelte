<script lang="ts">
  import items from "$lib/components/ui/card/core/media/data";
  import CarouselGridMedia from "$lib/components/ui/carousel/core/grid/media/ui/CarouselGridMedia.svelte";
</script>

<CarouselGridMedia
  {items}
  headerProps={{
    title: "Promoções imperdiveis",
    description: "Confira as promoções imperdiveis que preparamos para você",
    containerClass: "bg-gray-50 dark:bg-gray-800",
  }}
  slotProps={{
    buttonPreviousAndNextClass: "bg-white dark:bg-gray-800",
    positionButtonPreviousAndNext: "top_right",
    onMoreViewClick: () => console.log("click"),
  }}
  onFavoriteClick={(id: string | number) => console.log("click", id)}
  onButtonProfile={(id: string | number) => console.log("click", id)}
/>
