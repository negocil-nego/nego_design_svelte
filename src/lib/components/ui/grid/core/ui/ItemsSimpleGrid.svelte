<script lang="ts">
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import type { GridProps } from "../data/types";
  import GridCard from "./shared/GridCard.svelte";

  let { variant, className, isLoading, onClick, items }: GridProps = $props();

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
  {#if isLoading}
    {#each Array.from({ length: responsive.isMobile ? 3 : 10 }) as it, i (i)}
      <GridCard
        id={i}
        title={`${it}`}
        description=""
        icon=""
        {variant}
        {isLoading}
      />
    {/each}
  {:else}
    {#each items as item, i (i)}
      <GridCard {...item} {variant} {onClick} />
    {/each}
  {/if}
</div>
