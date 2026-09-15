<script lang="ts">
  import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import InputEmailOrPhone from "$lib/components/ui/form/ui/input-email-or-phone.svelte";
  import InputEmail from "$lib/components/ui/form/ui/input-email.svelte";
  import InputPhone from "$lib/components/ui/form/ui/input-phone.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { t } from "$lib/i18n";
  import {
    Mail01Icon,
    SmartPhone01Icon,
    CheckmarkCircle02Icon,
    Login02Icon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import type {
    ModalFormEmailOrPhoneProps,
    ModalFormEmailOrPhoneType,
  } from "../types";

  let {
    title,
    subtitle,
    email,
    phone,
    isOpen = $bindable(false),
    submitText,
    submitLoadingText,
    cancelText,
    isLoading = false,
    showCancel = true,
    onSubmit,
    onCancel,
    onClose,
    class: className,
  }: ModalFormEmailOrPhoneProps = $props();

  let userEmail = $state(email ?? "");
  let userPhone = $state(phone ?? "");
  let emailOrPhone = $state("");
  let channel = $state<ModalFormEmailOrPhoneType>("EMAIL_OR_PHONE");

  const hasPreset = $derived(Boolean(email || phone));
  const isValid = $derived(
    !hasPreset
      ? Boolean(emailOrPhone.trim())
      : channel === "EMAIL"
        ? Boolean(userEmail.trim())
        : Boolean(userPhone.trim()),
  );

  const finalTitle = $derived(
    title ?? $t("label.otp-verification") ?? "Verificação OTP",
  );
  const finalSubtitle = $derived(
    subtitle ??
      $t("text.otp-verification") ??
      "Insira o seu email ou telefone para receber o código de verificação.",
  );
  const finalSubmitText = $derived(submitText ?? $t("label.send") ?? "Enviar");
  const finalLoadingText = $derived(
    submitLoadingText ?? $t("label.submitting") ?? "A submeter...",
  );
  const finalCancelText = $derived(
    cancelText ?? $t("label.cancel") ?? "Cancelar",
  );

  function handleSubmit(e: Event) {
    e.preventDefault();
    if (isLoading || !isValid) return;
    const value = !hasPreset
      ? emailOrPhone.trim()
      : channel === "EMAIL"
        ? userEmail.trim()
        : userPhone.trim();
    onSubmit?.({
      type: !hasPreset ? "EMAIL_OR_PHONE" : channel,
      value,
      email: hasPreset ? userEmail.trim() : undefined,
      phone: hasPreset ? userPhone.trim() : undefined,
    });
  }

  function handleCancel() {
    isOpen = false;
    onCancel?.();
  }
</script>

<ModalCore
  bind:isOpen
  title={finalTitle}
  subtitle={finalSubtitle}
  showProgress={false}
  showBack={false}
  {onClose}
  class={className}
>
  {#snippet content()}
    <form class="space-y-4" onsubmit={handleSubmit}>
      {#if !hasPreset}
        <InputEmailOrPhone
          bind:value={emailOrPhone}
          isLabel
          isIcon
          disabled={isLoading}
        />
      {:else}
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {#each [{ type: "EMAIL" as const, label: $t("input.email.label") ?? "Email", val: email, icon: Mail01Icon }, { type: "PHONE" as const, label: $t("input.phone.label") ?? "Telefone", val: phone, icon: SmartPhone01Icon }] as item (item.type)}
            {@const isSelected = channel === item.type}
            <button
              type="button"
              class="relative flex flex-col items-start gap-1 rounded-2xl border p-4 text-left transition {isSelected
                ? 'border-primary bg-primary/5 ring-2 ring-primary/20'
                : 'border-border bg-card hover:bg-muted/50'}"
              onclick={() => (channel = item.type)}
            >
              <div class="flex w-full items-center justify-between">
                <div
                  class="flex size-9 items-center justify-center rounded-xl {isSelected
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground'}"
                >
                  <HugeiconsIcon icon={item.icon} size={18} />
                </div>
                {#if isSelected}
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    class="size-5 text-primary"
                  />
                {/if}
              </div>
              <span class="mt-2 text-sm font-semibold">{item.label}</span>
              {#if item.val}
                <p class="truncate text-xs text-muted-foreground max-w-50">
                  {item.val}
                </p>
              {/if}
            </button>
          {/each}
        </div>

        <div class="space-y-3 pt-1">
          <div
            class="transition-opacity {channel !== 'EMAIL'
              ? 'opacity-50 pointer-events-none'
              : ''}"
          >
            <InputEmail
              bind:value={userEmail}
              isLabel
              isIcon
              disabled={isLoading || channel !== "EMAIL"}
            />
          </div>
          <div
            class="transition-opacity {channel !== 'PHONE'
              ? 'opacity-50 pointer-events-none'
              : ''}"
          >
            <InputPhone
              bind:value={userPhone}
              isLabel
              disabled={isLoading || channel !== "PHONE"}
            />
          </div>
        </div>
      {/if}

      <div class="pt-2">
        <Button
          type="submit"
          {isLoading}
          disabled={isLoading || !isValid}
          class="w-full flex items-center justify-center gap-2 py-2.5"
        >
          {#if isLoading}
            <span
              class="size-4 animate-spin rounded-full border-2 border-current border-t-transparent"
            ></span>
            {finalLoadingText}
          {:else}
            <HugeiconsIcon icon={Login02Icon} size={16} />
            {finalSubmitText}
          {/if}
        </Button>
      </div>
    </form>
  {/snippet}

  {#snippet footer()}
    {#if showCancel}
      <div class="flex items-center justify-end">
        <button
          type="button"
          class="rounded-lg border border-border px-5 py-2 text-sm font-semibold transition hover:bg-muted"
          onclick={handleCancel}
        >
          {finalCancelText}
        </button>
      </div>
    {/if}
  {/snippet}
</ModalCore>
