<script lang="ts">
  import { cn } from "$lib/utils";
  import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import type { ModalNotificationProps } from "../types";

  let {
    title,
    description,
    placeholder = "Your email address",
    buttonText = "Sign me up",
    buttonLoadingText = "Signing up...",
    isLoading = false,
    isOpen = $bindable(false),
    onSubmit,
    onClose,
    class: className,
  }: ModalNotificationProps = $props();

  let email = $state("");

  function handleSubmit() {
    if (!email.trim() || isLoading) return;
    onSubmit?.(email);
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") handleSubmit();
  }
</script>

<ModalCore
  bind:isOpen
  {title}
  showProgress={false}
  showBack={false}
  {onClose}
  class={cn("max-w-lg", className)}
>
  {#snippet content()}
    {#if description}
      <p class="text-sm text-muted-foreground">{description}</p>
    {/if}

    <div class="mt-6 flex items-center gap-3">
      <input
        type="email"
        {placeholder}
        bind:value={email}
        onkeydown={handleKeydown}
        class="flex-1 rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      <button
        type="button"
        disabled={isLoading || !email.trim()}
        class={cn(
          "shrink-0 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all",
          "hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-50"
        )}
        onclick={handleSubmit}
      >
        {isLoading ? buttonLoadingText : buttonText}
      </button>
    </div>
  {/snippet}
</ModalCore>
