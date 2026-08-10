<script lang="ts">
  import items from "$lib/components/core/card/media/data";
  import CarouselGridProfile from "$lib/components/core/carousel/grid/profile/ui/CarouselGridProfile.svelte";
</script>

<CarouselGridProfile
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
  isLoading
/>
