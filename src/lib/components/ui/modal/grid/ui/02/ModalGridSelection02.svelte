<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { cn } from "$lib/utils";
      import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import type {
    ModalGridSelectionProps,
    ModelGridCard,
    ModelGridCategory,
  } from "../../types";

  let {
    title,
    subtitle,
    categories = [],
    cards = [],
    selectedCard = $bindable(null),
    currentStep = 1,
    isOpen = $bindable(false),
    onSelect,
    onSelectCategory,
    onBack,
    onContinue,
    class: className,
  }: ModalGridSelectionProps = $props();

  let selectedCategory = $state<ModelGridCategory | null>(null);

  function handleSelectCard(card: ModelGridCard) {
    selectedCard = card;
    onSelect?.(card);
  }

  function handleSelectCategory(category: ModelGridCategory) {
    selectedCategory = category;
    onSelectCategory?.(category);
  }

  function isSelectedCard(card: ModelGridCard): boolean {
    return selectedCard?.title === card.title;
  }

  function isSelectedCategory(category: ModelGridCategory): boolean {
    return selectedCategory?.value === category.value;
  }
</script>

<ModalCore
  bind:isOpen
  {title}
  {subtitle}
  {currentStep}
  showProgress={false}
  showBack={currentStep > 1}
  {onBack}
  {onContinue}
  class={cn(className)}
>
  {#snippet content()}
    <!-- Categories -->
    {#if categories.length > 0}
      <div class="mb-6 flex flex-wrap gap-2">
        {#each categories as cat (cat.value)}
          {@const active = isSelectedCategory(cat)}
          <button
            type="button"
            class={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200",
              active ? "" : "",
            )}
            onclick={() => handleSelectCategory(cat)}
          >
            {cat.label}
          </button>
        {/each}
      </div>
    {/if}

    <!-- Cards Grid -->
    <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
      {#each cards as card, i (i)}
        {@const selected = isSelectedCard(card)}
        <button
          type="button"
          class={cn(
            "relative flex items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200",
            selected ? "" : "",
          )}
          onclick={() => handleSelectCard(card)}
        >
          <!-- Icon -->
          <div
            class={cn(
              "flex size-10 shrink-0 items-center justify-center rounded-lg",
              selected ? "bg-primary/20" : "bg-primary/40",
            )}
          >
            {#if typeof card.icon === "string"}
              <i class="{card.icon} text-lg"></i>
            {:else}
              <ImageHugeicons icon={card.icon} class="size-5" />
            {/if}
          </div>

          <!-- Text -->
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold">{card.title}</p>
            {#if card.description}
              <p class="mt-0.5 line-clamp-1 text-xs">
                {card.description}
              </p>
            {/if}

            {#if card.info?.length}
              <ul class="mt-1.5 flex flex-col gap-1">
                {#each card.info as point, j (`${card.title}-${j}`)}
                  <li
                    class="flex items-center gap-1.5 text-xs {point.isChecked
                      ? 'text-foreground'
                      : 'text-muted-foreground opacity-70'}"
                  >
                    <i class="{point.icon} shrink-0"></i>
                    <span class="truncate">{point.text}</span>
                  </li>
                {/each}
              </ul>
            {/if}
          </div>

          <!-- Checkmark -->
          {#if selected}
            <ImageHugeicons icon="CheckmarkCircle02Icon" class="size-5 shrink-0 text-primary" />
          {/if}
        </button>
      {/each}
    </div>
  {/snippet}
</ModalCore>
