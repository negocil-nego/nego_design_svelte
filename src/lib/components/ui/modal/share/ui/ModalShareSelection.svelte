<script lang="ts">
  import { cn } from "$lib/utils";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import type { ModalShareSelectionProps, ModelSocialShare } from "../types";

  let {
    title,
    subtitle,
    networks = [],
    linkLabel = "Or copy link",
    linkValue = "",
    copyText = "Copy",
    copiedText = "Copied!",
    isOpen = $bindable(false),
    onShare,
    onCopy,
    onClose,
    class: className,
  }: ModalShareSelectionProps = $props();

  let copied = $state(false);

  function handleCopy() {
    navigator.clipboard.writeText(linkValue).then(() => {
      copied = true;
      onCopy?.(linkValue);
      setTimeout(() => (copied = false), 2000);
    });
  }
</script>

<ModalCore
  bind:isOpen
  {title}
  {subtitle}
  showProgress={false}
  showBack={false}
  {onClose}
  class={cn("max-w-lg", className)}
>
  {#snippet content()}
    <!-- Social Networks -->
    <div class="flex flex-wrap items-center justify-center gap-4">
      {#each networks as network (network.name)}
        <button
          type="button"
          class="group flex flex-col items-center gap-2"
          onclick={() => onShare?.(network)}
        >
          <div
            class={cn(
              "flex size-14 items-center justify-center rounded-full border-2 border-border transition-all duration-200",
              "hover:scale-110 hover:shadow-md"
            )}
            style={network.color ? `border-color: ${network.color}30` : ""}
          >
            {#if typeof network.icon === "string"}
              <i
                class="{network.icon} text-2xl transition-colors"
                style={network.color ? `color: ${network.color}` : ""}
              ></i>
            {:else}
              <HugeiconsIcon
                icon={network.icon}
                class="size-6 transition-colors"
                style={network.color ? `color: ${network.color}` : ""}
              />
            {/if}
          </div>
          <span class="text-xs text-muted-foreground">{network.name}</span>
        </button>
      {/each}
    </div>
  {/snippet}

  {#snippet footer()}
    <!-- Copy Link -->
    <div>
      <p class="mb-3 text-sm font-medium text-muted-foreground">{linkLabel}</p>
      <div class="flex items-center gap-2">
        <input
          type="text"
          readonly
          value={linkValue}
          class="flex-1 rounded-lg border border-border bg-muted px-4 py-2.5 text-sm text-foreground outline-none"
        />
        <button
          type="button"
          class={cn(
            "shrink-0 rounded-lg px-5 py-2.5 text-sm font-semibold transition-colors",
            copied
              ? "bg-green-500 text-white"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
          onclick={handleCopy}
        >
          {copied ? copiedText : copyText}
        </button>
      </div>
    </div>
  {/snippet}
</ModalCore>
