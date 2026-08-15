<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import type { CardTagsProps } from "../types";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  type Props = {
    className?: string;
    tags?: CardTagsProps[];
    isTagBorderBottom?: boolean;
    isWrap?: boolean;
    isLoading?: boolean;
  };

  const {
    tags = [],
    className,
    isTagBorderBottom,
    isWrap = false,
    isLoading = false,
  }: Props = $props();

  let isJustify = $derived(tags?.length == 2 || tags?.length == 3);
</script>

{#snippet createBadge(tag: CardTagsProps)}
  <div
    class="flex items-center h-5 shrink-0 {isTagBorderBottom
      ? 'border border-gray-200 rounded-full px-2 py-1'
      : ''}"
  >
    {#if tag.icon}
      <HugeiconsIcon icon={tag.icon} class="mr-0.5 h-3.75 w-3.75 shrink-0" />
    {/if}
    <div class="whitespace-nowrap">{tag.text}</div>
  </div>
{/snippet}

{#snippet skeletonTag()}
  <div class="my-2 flex gap-5">
    {#each Array.from({ length: 3 }) as it, i (i)}
      <Skeleton class="h-5 w-25 bg-black/50" />
    {/each}
  </div>
{/snippet}

{#if isWrap}
  <div class="flex flex-wrap gap-2 md:gap-5 {className}">
    {#if isLoading}
      {@render skeletonTag()}
    {:else if tags && tags.length > 0}
      {#each tags as tag, i (i)}
        {@render createBadge(tag)}
      {/each}
    {/if}
  </div>
{:else}
  <div
    class="flex overflow-x-auto no-scrollbar w-full min-w-0
        {isJustify ? 'justify-between gap-3' : 'gap-4 md:gap-5 lg:gap-10'}
        {className}"
  >
    {#if isLoading}
      {@render skeletonTag()}
    {:else if tags && tags.length > 0}
      {#each tags as tag, i (i)}
        {@render createBadge(tag)}
      {/each}
    {/if}
  </div>
{/if}
