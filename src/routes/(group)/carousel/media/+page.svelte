<script lang="ts">
  import items from "$lib/components/ui/card/core/media/data";
  import CarouselMedia from "$lib/components/ui/carousel/core/media/ui/CarouselMedia.svelte";
</script>

<div class="flex items-center justify-center mt-3 lg:mt-5">
  <CarouselMedia
    {items}
    variant={1}
    headerProps={{
      title: "Galeria de Mídia",
      description: "Explore as nossas fotos e vídeos",
      containerClass: "bg-blue-50 dark:bg-gray-800",
    }}
    slotProps={{
      buttonPreviousAndNextClass: "bg-white dark:bg-gray-800",
      positionButtonPreviousAndNext: "top_right",
      onMoreViewClick: () => console.log("click"),
    }}
    isDescriptionIcon
    isDescriptionLabel
  />
</div>
