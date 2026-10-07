<script lang="ts">
  import ImageFlag from "$lib/components/ui/image/ImageFlag.svelte";
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { cn } from "$lib/utils";
  import ModalCore from "./ModalCore.svelte";
  import type { ModalOptionsPanelProps } from "../types";

  let {
    isOpen = $bindable(false),
    title,
    subtitle,
    options = [],
    selecteds = [],
    onToggle,
    continueText,
    class: className,
  }: ModalOptionsPanelProps = $props();

  function isSelected(value: string): boolean {
    return selecteds.includes(value);
  }
</script>

<ModalCore
  bind:isOpen
  {title}
  {subtitle}
  {continueText}
  showProgress={false}
  showBack={false}
  showSkip={false}
  onContinue={() => (isOpen = false)}
  class={className}
>
  {#snippet content()}
    <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
      {#each options as option (option.value)}
        {@const selected = isSelected(option.value)}
        <button
          type="button"
          aria-pressed={selected}
          class={cn(
            "flex items-center gap-2 rounded-xl border-2 px-3 py-2.5 text-sm font-medium transition-all duration-200",
            selected
              ? "border-primary bg-primary/5 text-foreground shadow-md"
              : "border-border text-foreground hover:border-primary/50 hover:shadow-sm",
          )}
          onclick={() => onToggle?.(option.value)}
        >
          {#if option.country}
            <ImageFlag
              country={option.country}
              alt={option.label}
              class="size-5 shrink-0 rounded-md"
            />
          {:else if option.icon}
            {#if typeof option.icon === "string"}
              <i class="{option.icon} shrink-0"></i>
            {:else}
              <ImageHugeicons icon={option.icon} class="size-4 shrink-0" />
            {/if}
          {/if}
          <span class="min-w-0 flex-1 truncate text-left">{option.label}</span>
        </button>
      {/each}
    </div>
  {/snippet}
</ModalCore>
