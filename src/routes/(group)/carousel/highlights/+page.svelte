<script lang="ts">
  import items from "$lib/components/core/card/highlight/data";
  import CarouselHighlights from "$lib/components/core/carousel/highlights/ui/CarouselHighlights.svelte";
</script>

<div class="flex items-center justify-center mt-3 lg:mt-5">
  <CarouselHighlights
    {items}
    headerProps={{
      title: "Destaques",
      description: "Confira os destaques que preparamos para você",
      containerClass: "bg-blue-50 dark:bg-gray-800",
      onButtonViewAll: () => console.log("click"),
    }}
    slotProps={{
      buttonPreviousAndNextClass: "bg-white dark:bg-gray-800",
    }}
    varient={2}
    onClickBtn={(id: string | number) => console.log("click", id)}
    onClickFavorite={(id: string | number) => console.log("click", id)}
  />
</div>
