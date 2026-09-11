<script lang="ts">
  import type { ModalGridSelectionProps } from "../types";
  import ModalGridSelection01 from "./01/ModalGridSelection01.svelte";
  import ModalGridSelection02 from "./02/ModalGridSelection02.svelte";

  let {
    variant = 1,
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
</script>

{#if variant === 2}
  <ModalGridSelection02
    bind:isOpen
    bind:selectedCard
    bind:selectedCards
    bind:selectedCategory
    {title}
    {subtitle}
    {categories}
    {cards}
    {multiple}
    {totalSteps}
    {currentStep}
    {onSelect}
    {onSelectCategory}
    {onBack}
    {onContinue}
    class={className}
  />
{:else}
  <ModalGridSelection01
    bind:isOpen
    bind:selectedCard
    {title}
    {subtitle}
    {cards}
    {totalSteps}
    {currentStep}
    {onSelect}
    {onBack}
    {onContinue}
    class={className}
  />
{/if}
