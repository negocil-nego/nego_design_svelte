<script lang="ts">
  import type { ModalGridSelectionProps } from "../types";
  import ModalGridSelection01 from "./01/ModalGridSelection01.svelte";
  import ModalGridSelection02 from "./02/ModalGridSelection02.svelte";

  let {
    variant = 1,
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
</script>

{#if variant === 2}
  <ModalGridSelection02
    bind:isOpen
    bind:selectedCard
    {title}
    {subtitle}
    {categories}
    {cards}
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
    {currentStep}
    {onSelect}
    {onBack}
    {onContinue}
    class={className}
  />
{/if}
