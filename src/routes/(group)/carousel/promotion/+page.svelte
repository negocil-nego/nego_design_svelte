<script lang="ts">
  import items from "$lib/components/core/card/promotion/data";
  import CarouselPromotion from "$lib/components/core/carousel/promotion/ui/CarouselPromotion.svelte";
</script>

<div class="flex items-center justify-center mt-3 lg:mt-5">
  <CarouselPromotion
    {items}
    containerClass="bg-blue-50 dark:bg-gray-800"
    buttonPreviousAndNextClass="bg-white dark:bg-gray-800"
  />
</div>
