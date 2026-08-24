<script lang="ts">
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import type { GridProps } from "../data/types";
  import Grid02 from "./02/Grid02.svelte";
  import Grid01 from "./01/Grid01.svelte";

  let { variant, className, isLoading, items }: GridProps = $props();

  const styleMobile = "flex justify-between overflow-x-auto no-scrollbar";

  const cols = (): string => {
    const len = items?.length ?? 0;
    if (len <= 3) return "grid grid-cols-3";
    if (len <= 4) return "grid grid-cols-4";
    if (len <= 5) return "grid grid-cols-5";
    if (len <= 6) return "grid grid-cols-6";
    if (len <= 7) return "grid grid-cols-7";
    if (len > 7) return styleMobile;
    return "grid grid-cols-1";
  };

  const responsive = useDevice();
</script>

<div
  class="{responsive.isMobile ? styleMobile : cols()} gap-4 my-2 {className}"
>
  {#each items as item, i (i)}
    {#if variant == 2}
      <Grid02 {...item} {isLoading} />
    {:else}
      <Grid01 {...item} {isLoading} />
    {/if}
  {/each}
</div>
