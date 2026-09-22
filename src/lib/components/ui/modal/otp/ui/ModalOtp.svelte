<script lang="ts" module>
  /**
   * @component ModalOtp
   * Modal de verificação OTP que abre globalmente em qualquer parte da aplicação.
   * Controlado pelo `otpStore`: quando `$otpStore.open` é `true` o modal abre.
   * @see ModalOtpProps
   */
</script>

<script lang="ts">
  import { cn } from "$lib/utils";
  import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import * as InputOTP from "$lib/components/ui/input-otp/index.js";
  import { t } from "$lib/i18n";
  import { closeOtp, otpStore } from "$lib/store";
  import type { ModalOtpProps } from "../types";

  let {
    title,
    subtitle,
    otpLength,
    isLoading,
    onSubmit,
    onClose,
    class: className,
  }: ModalOtpProps = $props();

  let code = $state("");

  const isOpen = $derived(otpStore.open);
  const finalTitle = $derived(
    title ?? otpStore.title ?? $t("label.otp-verification") ?? "OtP Verification",
  );
  const finalSubtitle = $derived(
    subtitle ??
      otpStore.subtitle ??
      $t("text.otp-verification") ??
      "Enter the verification code we sent to your email or phone.",
  );
  const finalLength = $derived(otpLength ?? otpStore.otpLength ?? 6);
  const finalIsLoading = $derived(isLoading ?? otpStore.isLoading ?? false);
  const half = $derived(Math.ceil(finalLength / 2));

  function handleSubmit() {
    const callback = onSubmit ?? otpStore.onSubmit;
    callback?.(code);
    if (!finalIsLoading) closeOtp();
  }

  function handleClose() {
    const callback = onClose ?? otpStore.onClose;
    callback?.();
    closeOtp();
  }
</script>

<ModalCore
  isOpen={isOpen}
  title={finalTitle}
  subtitle={finalSubtitle}
  showProgress={false}
  showBack={false}
  onClose={handleClose}
  class={cn("max-w-lg", className)}
>
  {#snippet content()}
    <div class="flex flex-col items-center gap-6">
      <InputOTP.Root
        maxlength={finalLength}
        bind:value={code}
        disabled={finalIsLoading}
        placeholder="0"
      >
        {#snippet children({ cells })}
          {#if finalLength > 3}
            <InputOTP.Group>
              {#each cells.slice(0, half) as cell, i (i)}
                <InputOTP.Slot {cell} />
              {/each}
            </InputOTP.Group>
            <InputOTP.Separator />
            <InputOTP.Group>
              {#each cells.slice(half, finalLength) as cell, i (i)}
                <InputOTP.Slot {cell} />
              {/each}
            </InputOTP.Group>
          {:else}
            <InputOTP.Group>
              {#each cells as cell, i (i)}
                <InputOTP.Slot {cell} />
              {/each}
            </InputOTP.Group>
          {/if}
        {/snippet}
      </InputOTP.Root>

      <Button
        type="button"
        {isLoading}
        disabled={finalIsLoading || code.length !== finalLength}
        onclick={handleSubmit}
        class="w-full"
      >
        {#if finalIsLoading}
          <span
            class="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
          ></span>
          {$t("label.submitting") ?? "Submitting..."}
        {:else}
          {$t("label.send") ?? "Send"}
        {/if}
      </Button>
    </div>
  {/snippet}
</ModalCore>