<script lang="ts">
  import { cn } from "$lib/utils";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
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
    selectedCategory = $bindable(null),
    cards = [],
    selectedCard = $bindable(null),
    selectedCards = $bindable([]),
    multiple = false,
    totalSteps = 1,
    currentStep = 1,
    isOpen = $bindable(false),
    onSelect,
    onSelectCategory,
    onBack,
    onContinue,
    class: className,
  }: ModalGridSelectionProps = $props();

  function handleSelectCard(card: ModelGridCard) {
    if (multiple) {
      const exists = selectedCards.some(
        (c: ModelGridCard) => c.title === card.title,
      );
      if (exists) {
        selectedCards = selectedCards.filter(
          (c: ModelGridCard) => c.title !== card.title,
        );
      } else {
        selectedCards = [...selectedCards, card];
      }
      onSelect?.(card);
    } else {
      selectedCard = card;
      onSelect?.(card);
    }
  }

  function handleSelectCategory(category: ModelGridCategory) {
    selectedCategory = category;
    onSelectCategory?.(category);
  }

  function isSelectedCard(card: ModelGridCard): boolean {
    if (multiple) {
      return selectedCards.some((c: ModelGridCard) => c.title === card.title);
    }
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
  {totalSteps}
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
              <HugeiconsIcon icon={card.icon} class="size-5" />
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
          </div>

          <!-- Checkmark -->
          {#if selected}
            <HugeiconsIcon
              icon={CheckmarkCircle02Icon}
              class="size-5 shrink-0 text-primary"
            />
          {/if}
        </button>
      {/each}
    </div>
  {/snippet}
</ModalCore>
