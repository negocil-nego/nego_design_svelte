<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { cn } from "$lib/utils";
    import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import type { ModalGridSelectionProps, ModelGridCard } from "../../types";

  let {
    title,
    subtitle,
    cards = [],
    selectedCard = $bindable(null),
    totalSteps = 1,
    currentStep = 1,
    isOpen = $bindable(false),
    onSelect,
    onBack,
    onContinue,
    class: className,
  }: ModalGridSelectionProps = $props();

  let hoveredIndex = $state<number | null>(null);

  function handleSelect(card: ModelGridCard) {
    selectedCard = card;
    onSelect?.(card);
  }

  function isSelected(card: ModelGridCard): boolean {
    return selectedCard?.title === card.title;
  }
</script>

<ModalCore
  bind:isOpen
  {title}
  {subtitle}
  {totalSteps}
  {currentStep}
  showProgress={false}
  showBack={currentStep > 1}
  {onBack}
  {onContinue}
  class={className}
>
  {#snippet content()}
    <div class="grid grid-cols-2 gap-4 md:grid-cols-3">
      {#each cards as card, i (i)}
        {@const selected = isSelected(card)}
        {@const hovered = hoveredIndex === i}
        <button
          type="button"
          class={cn(
            "flex flex-col items-center gap-3 rounded-xl border-2 p-6 text-center transition-all duration-200",
            selected
              ? "border-primary bg-primary/5 shadow-md"
              : "border-border hover:border-primary/50 hover:shadow-sm",
            hovered && !selected && "border-primary/30"
          )}
          onclick={() => handleSelect(card)}
          onmouseenter={() => (hoveredIndex = i)}
          onmouseleave={() => (hoveredIndex = null)}
        >
          {#if typeof card.icon === "string"}
            <i class="{card.icon} text-4xl text-muted-foreground md:text-5xl"></i>
          {:else}
            <ImageHugeicons icon={card.icon} class="size-10 text-muted-foreground md:size-12" />
          {/if}

          <p class="text-sm font-bold md:text-base">{card.title}</p>

          {#if card.description}
            <p class="line-clamp-2 text-xs text-muted-foreground md:text-sm">
              {card.description}
            </p>
          {/if}
        </button>
      {/each}
    </div>
  {/snippet}
</ModalCore>
