<script lang="ts">
  import IconRender from "$lib/components/ui/image/IconRender.svelte";
  import type { AdminSectionCardsProps } from "./types";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  let {
    cards = [],
    className,
    cardClass,
    gridClass,
    onCardClick,
  }: AdminSectionCardsProps = $props();

  const responsive = useDevice();
</script>

<div class="rounded-2xl border border-border bg-gradient p-3 {className}">
  {#if cards.length > 0}
    {#if responsive.isMobile}
      <div class="flex gap-5 overflow-x-auto mt-5">
        {@render cardsGrid("min-w-[200px]")}
      </div>
    {:else}
      <div
        class="hidden mt-6 md:grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 {gridClass}"
      >
        {@render cardsGrid()}
      </div>
    {/if}
  {/if}
</div>

{#snippet cardsGrid(style?: string)}
  {#each cards as card, i (card.id ?? i)}
    {@const cardKey = card.id ?? i}
    <button
      type="button"
      onclick={() => onCardClick?.(cardKey)}
      class="group flex flex-col items-start gap-2 rounded-xl bg-white/20 p-5 text-left transition hover:border-primary/40 hover:shadow-sm {cardClass} {style}"
    >
      <span class="text-sm font-semibold text-white">{card.title}</span>
      <div class="flex items-center justify-between w-full">
        {#if card.isLoading}
          <span class="h-7 w-20 animate-pulse rounded bg-white/30"></span>
        {:else if card.value !== undefined}
          <span class="text-2xl font-bold tracking-tight text-white"
            >{card.value}</span
          >
        {/if}
        {#if card.icon}
          <span
            class="flex size-11 items-center justify-center rounded-lg bg-primary/50 text-primary {card.iconClass}"
          >
            <IconRender icon={card.icon} class="size-5" />
          </span>
        {/if}
      </div>
    </button>
  {/each}
{/snippet}
