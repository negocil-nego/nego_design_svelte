<script lang="ts">
  import { cn } from "$lib/utils";
  import {
    ArrowLeft01Icon,
    ArrowRight01Icon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import type { ModalCoreProps } from "../types";

  let {
    isOpen = $bindable(false),
    title,
    subtitle,
    totalSteps = 1,
    currentStep = 1,
    showProgress = true,
    showBack = true,
    showSkip = false,
    skipText = "Skip This Step",
    continueText = "Continue",
    backText = "Back",
    onBack,
    onContinue,
    onSkip,
    onClose,
    content,
    footer,
    class: className,
  }: ModalCoreProps = $props();

  function handleClose() {
    isOpen = false;
    onClose?.();
  }

  const progressPercent = $derived(
    totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0,
  );
</script>

{#if isOpen}
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div
      class="absolute inset-0 bg-black/50 backdrop-blur-sm"
      onclick={handleClose}
      onkeydown={(e) => {
        if (e.key === "Escape") handleClose();
      }}
    ></div>

    <div
      class={cn(
        "relative z-10 mx-4 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-border shadow-lg bg-background",
        "before:absolute before:-inset-px before:z-[-1] before:rounded-3xl",
        "animate-in fade-in zoom-in-95 duration-200",
        className,
      )}
    >
      <!-- Header -->
      <div class="px-8 pt-8">
        <h2 class="text-2xl font-semibold tracking-tight">
          {title}
        </h2>
        {#if subtitle}
          <p class="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        {/if}
      </div>

      <!-- Content -->
      <div class="flex-1 overflow-y-auto px-8 py-6">
        {#if content}
          {@render content()}
        {/if}
      </div>

      <!-- Footer -->
      {#if footer}
        <div class="border-t border-border px-8 py-5">
          {@render footer()}
        </div>
      {:else}
        <div class="border-t border-border px-8 py-5">
          {#if showProgress}
            <div class="mb-5 h-1.5 w-full overflow-hidden rounded-full">
              <div
                class="h-full rounded-full transition-all duration-300"
                style="width: {progressPercent}%"
              ></div>
            </div>
          {/if}

          <div class="flex items-center justify-between">
            <div class="flex items-center gap-4">
              {#if showSkip}
                <button
                  type="button"
                  class="text-sm font-medium text-muted-foreground transition hover:text-foreground"
                  onclick={onSkip}
                >
                  {skipText}
                </button>
              {/if}
            </div>

            <div class="flex items-center gap-3">
              {#if showBack && currentStep > 1}
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition"
                  onclick={onBack}
                >
                  <HugeiconsIcon icon={ArrowLeft01Icon} class="size-4" />
                  {backText}
                </button>
              {/if}

              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold bg-primary text-white transition"
                onclick={onContinue}
              >
                {continueText}
                <HugeiconsIcon icon={ArrowRight01Icon} class="size-4" />
              </button>
            </div>
          </div>
        </div>
      {/if}
    </div>
  </div>
{/if}
