<script lang="ts">
  import items from "$lib/components/ui/card/core/profile/data";
  import CarouselProfile from "$lib/components/ui/carousel/core/profile/ui/CarouselProfile.svelte";
</script>

<div class="flex items-center justify-center mt-3 lg:mt-5">
  <CarouselProfile
    {items}
    variant={1}
    headerProps={{
      title: "Os Nossos Guias",
      description: "Conheça os nossos guias de viagem de confiança",
      containerClass: "bg-blue-50 dark:bg-gray-800",
    }}
    slotProps={{
      buttonPreviousAndNextClass: "bg-white dark:bg-gray-800",
      onMoreViewClick: () => console.log("click"),
    }}
    isDescriptionIcon
    isDescriptionLabel
  />
</div>
