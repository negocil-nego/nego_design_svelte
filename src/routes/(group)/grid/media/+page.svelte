<script lang="ts">
  import items from "$lib/components/ui/card/core/media/data";
  import GridMedia from "$lib/components/ui/grid/core/media/ui/GridMedia.svelte";
</script>

<GridMedia
  {items}
  headerProps={{
    title: "Galeria de mídia",
    description: "Confira as fotos e vídeos que preparamos para você",
    containerClass: "bg-gray-50 dark:bg-gray-800",
  }}
  isImageButtonMaximized
  isVideoButtonMaximized
  onFavoriteClick={(id: string | number) => console.log("favorite", id)}
  onButtonProfile={(id: string | number) => console.log("profile", id)}
  onButtonDetails={(id: string | number) => console.log("details", id)}
/>
