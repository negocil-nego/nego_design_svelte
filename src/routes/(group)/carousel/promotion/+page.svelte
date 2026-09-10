<script lang="ts">
  import items from "$lib/components/ui/card/core/promotion/data";
  import CarouselPromotion from "$lib/components/ui/carousel/core/promotion/ui/CarouselPromotion.svelte";
</script>

<div class="flex items-center justify-center mt-3 lg:mt-5">
  <CarouselPromotion
    {items}
    headerProps={{
      title: "Promoções imperdiveis",
      description: "Confira as promoções imperdiveis que preparamos para você",
      containerClass: "bg-gray-50 dark:bg-gray-800",
      onButtonViewAll: () => console.log("click"),
    }}
    slotProps={{
      buttonPreviousAndNextClass: "bg-white dark:bg-gray-800",
      positionButtonPreviousAndNext: "top_right",
      isButtonPreviousAndNext: true,
    }}
    isDescriptionIcon={false}
    isDescriptionLabel={false}
    onClickShop={(id) => alert(`shop ${id}`)}
    onClickFavorite={(id) => alert(`favorite ${id}`)}
    onClickBuy={(id) => alert(`buy ${id}`)}
  />
</div>
