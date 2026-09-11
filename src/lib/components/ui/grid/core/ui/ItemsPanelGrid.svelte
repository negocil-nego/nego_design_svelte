<script lang="ts">
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import type { GridProps } from "../data/types";
  import Grid02 from "./02/Grid02.svelte";
  import Grid01 from "./01/Grid01.svelte";

  let {
    variant,
    className,
    isLoading,
    items,
    itemClassName,
    onClick,
  }: GridProps = $props();

  const styleMobile = "flex justify-between overflow-x-auto no-scrollbar";

  const responsive = useDevice();
</script>

<div
  class="gap-4 my-2 {responsive.isMobile
    ? styleMobile
    : 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-h-237.5 overflow-y-auto'} {className}"
>
  {#if isLoading}
    {#each Array.from({ length: responsive.isMobile ? 3 : 10 }) as it, i (i)}
      {#if variant == 2}
        <Grid02 title={`${it}`} description="" icon="" {isLoading} />
      {:else}
        <Grid01 title={`${it}`} description="" icon="" {isLoading} />
      {/if}
    {/each}
  {:else}
    {#each items as item, i (i)}
      {#if variant == 2}
        <Grid02 {...item} {onClick} {itemClassName} />
      {:else}
        <Grid01 {...item} {onClick} {itemClassName} />
      {/if}
    {/each}
  {/if}
</div>
