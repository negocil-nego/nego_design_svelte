<script lang="ts">
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import type { GridProps } from "../data/types";
  import Grid02 from "./02/Grid02.svelte";
  import Grid01 from "./01/Grid01.svelte";

  let { variant, className, isLoading, items, onClick }: GridProps = $props();

  const styleMobile = "flex justify-between overflow-x-auto no-scrollbar";

  const responsive = useDevice();
</script>

<div
  class="gap-4 my-2 {responsive.isMobile
    ? styleMobile
    : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-h-237.5 overflow-y-auto'} 
    {className}"
>
  {#each items as item, i (i)}
    {#if variant == 2}
      <Grid02 {...item} {onClick} {isLoading} />
    {:else}
      <Grid01 {...item} {onClick} {isLoading} />
    {/if}
  {/each}
</div>
