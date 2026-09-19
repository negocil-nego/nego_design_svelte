<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { cn } from "$lib/utils";
    import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import type { ModalBadgeSelectionProps, ModelBadge } from "../types";

  let {
    title,
    subtitle,
    badges = [],
    selectedBadge = $bindable(null),
    selectedBadges = $bindable([]),
    multiple = false,
    totalSteps = 1,
    currentStep = 1,
    isOpen = $bindable(false),
    onSelect,
    onBack,
    onContinue,
    onSkip,
    class: className,
  }: ModalBadgeSelectionProps = $props();

  function handleSelect(badge: ModelBadge) {
    if (multiple) {
      const exists = selectedBadges.some((b) => b.value === badge.value);
      if (exists) {
        selectedBadges = selectedBadges.filter((b) => b.value !== badge.value);
      } else {
        selectedBadges = [...selectedBadges, badge];
      }
      onSelect?.(badge);
    } else {
      selectedBadge = badge;
      onSelect?.(badge);
    }
  }

  function isSelected(badge: ModelBadge): boolean {
    if (multiple) {
      return selectedBadges.some((b) => b.value === badge.value);
    }
    return selectedBadge?.value === badge.value;
  }
</script>

<ModalCore
  bind:isOpen
  {title}
  {subtitle}
  {totalSteps}
  {currentStep}
  showProgress={true}
  showBack={false}
  showSkip={true}
  {onBack}
  {onContinue}
  {onSkip}
  class={className}
>
  {#snippet content()}
    <div class="flex flex-wrap gap-3">
      {#each badges as badge (badge.value)}
        {@const selected = isSelected(badge)}
        <button
          type="button"
          class={cn(
            "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium transition-all duration-200",
            selected
              ? "border-foreground bg-foreground text-background shadow-md"
              : "border-border bg-card text-foreground hover:border-foreground/50 hover:shadow-sm"
          )}
          onclick={() => handleSelect(badge)}
        >
          {#if badge.icon}
            {#if typeof badge.icon === "string"}
              <i class="{badge.icon} text-sm"></i>
            {:else}
              <ImageHugeicons icon={badge.icon} class="size-4" />
            {/if}
          {/if}
          {badge.label}
        </button>
      {/each}
    </div>
  {/snippet}
</ModalCore>
