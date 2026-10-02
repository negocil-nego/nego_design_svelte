<script lang="ts">
  import items from "$lib/components/ui/card/core/highlight/data";
  import GridHighlights from "$lib/components/ui/grid/core/highlights/ui/GridHighlights.svelte";
</script>

<GridHighlights
  {items}
  varient={2}
  headerProps={{
    title: "Destaques",
    description: "Confira os destaques que preparamos para você",
    containerClass: "bg-blue-50 dark:bg-gray-800",
  }}
  onClickBtn={(id: string | number) => console.log("click", id)}
  onClickFavorite={(id: string | number) => console.log("favorite", id)}
/>
