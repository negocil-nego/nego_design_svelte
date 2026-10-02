<script lang="ts">
  import items from "$lib/components/ui/card/core/promotion/data";
  import GridPromotion from "$lib/components/ui/grid/core/promotion/ui/GridPromotion.svelte";
</script>

<GridPromotion
  {items}
  headerProps={{
    title: "Promoções imperdíveis",
    description:
      "Confira as melhores ofertas e descontos exclusivos em hotéis e estadias para você",
    containerClass: "bg-gray-50 dark:bg-gray-800/60 py-8 px-4 sm:px-6 lg:px-8",
  }}
  isDescriptionIcon={false}
  isDescriptionLabel={false}
  onClickBuy={(id: string | number) => console.log("buy", id)}
  onClickShop={(id: string | number) => console.log("shop", id)}
  onClickFavorite={(id: string | number) => console.log("favorite", id)}
/>
