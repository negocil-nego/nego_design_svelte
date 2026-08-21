<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import type { IconSvgElement } from "@hugeicons/svelte";
  import type { SimpleGridProps } from "../data/types";
  import { useDevice } from "$lib/hooks/responsive.svelte";

  let {
    descriptionClass = "text-muted-foreground line-clamp-2 md:line-clamp-4",
    titleClass = "font-semibold",
    iconClass = "size-8 md:size-10",
    items,
  }: SimpleGridProps = $props();

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

<div class="{responsive.isMobile ? styleMobile : cols()} gap-4">
  {#each items as item, i (i)}
    <div class="flex flex-col justify-center items-center gap-2">
      {@render iconRender(item.icon)}
      <p class={titleClass}>{item.title}</p>
      {#if item.description}
        <p class="{descriptionClass} text-center min-w-62.5">
          {item.description}
        </p>
      {/if}
    </div>
  {/each}
</div>

{#snippet iconRender(icon: IconSvgElement | string)}
  {#if typeof icon === "string"}
    <i class="{icon} {iconClass}"></i>
  {:else}
    <HugeiconsIcon {icon} class={iconClass} />
  {/if}
{/snippet}
