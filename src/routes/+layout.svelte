<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import NegoDesignLayout from "$lib/components/pages/NegoDesignLayout.svelte";
  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<NegoDesignLayout>
  {@render children()}
</NegoDesignLayout>
