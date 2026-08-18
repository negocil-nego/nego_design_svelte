<script lang="ts">
  import items from "$lib/components/core/card/profile/data";
  import CarouselGridProfile from "$lib/components/core/carousel/grid/profile/ui/CarouselGridProfile.svelte";
</script>

<CarouselGridProfile
  {items}
  variant={1}
  onEmailClick={(id) => alert("email")}
  onWhatsappClick={(id) => alert("whatsapp")}
  onButtonProfile={(id) => alert("buttonProfile")}
  onFavoriteClick={(id) => alert("favorite")}
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
/>
