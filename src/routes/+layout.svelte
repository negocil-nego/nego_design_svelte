<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import NegoDesign from "$lib/components/NegoDesign.svelte";
  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<NegoDesign>
  {@render children()}
</NegoDesign>
