<script lang="ts">
  import { PageStatusPending } from "$lib";
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
</script>

<svelte:head>
  <title>Pending | Status | NegoDesign</title>
  <meta
    name="description"
    content="Demo em página inteira do componente PageStatusPending."
  />
</svelte:head>

<PageStatusPending
  onAction={() => console.log("done")}
  onButtonBack={() => console.log("back")}
  svgKey="loading-travel"
  isLoading={true}
/>
