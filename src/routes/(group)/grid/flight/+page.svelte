<script lang="ts">
  import items from "$lib/components/ui/card/core/flight/data";
  import GridFlight from "$lib/components/ui/grid/core/flight/ui/GridFlight.svelte";

  let variant = $state<1 | 2>(1);
</script>

<div class="border-b bg-background px-6 py-3 flex items-center justify-between">
  <div class="flex items-center gap-2">
    <span
      class="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >Card Variant:</span
    >
    <button
      type="button"
      class="rounded-md px-3 py-1 text-xs font-medium transition-colors {variant ===
      1
        ? 'bg-primary text-primary-foreground shadow-sm'
        : 'bg-muted hover:bg-muted/80 text-muted-foreground'}"
      onclick={() => (variant = 1)}
    >
      Variante 1
    </button>
    <button
      type="button"
      class="rounded-md px-3 py-1 text-xs font-medium transition-colors {variant ===
      2
        ? 'bg-primary text-primary-foreground shadow-sm'
        : 'bg-muted hover:bg-muted/80 text-muted-foreground'}"
      onclick={() => (variant = 2)}
    >
      Variante 2
    </button>
  </div>
</div>

<GridFlight
  {items}
  {variant}
  headerProps={{
    title: "Viagens em destaque",
    description:
      "Descubra os próximos voos e viagens interprovinciais disponíveis",
    containerClass: "bg-gray-50 dark:bg-gray-800/60 py-8 px-4 sm:px-6 lg:px-8",
  }}
  isDescriptionIcon={false}
  isDescriptionLabel={false}
  onClickBuy={(id: string | number) => console.log("book", id)}
  onClickFavorite={(id: string | number) => console.log("favorite", id)}
/>