<script lang="ts" module>
  /**
   * Formulário de alteração de senha da variante 2 (aba "Security").
   * Contém campos Current password, New password e Confirm new password,
   * além dos botões Update Password e Cancel.
   * @component
   */
</script>

<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Input from "$lib/components/ui/input/input.svelte";
  import Label from "$lib/components/ui/label/label.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { cn } from "$lib/utils.js";
  import { t } from "$lib/i18n";
  import type { ProfileUserResetPasswordProps } from "../types";

  let {
    isLoading = false,
    className,
    onChangePassword,
    onCancel,
    title = $t("profile-user.resetPassword.title"),
    currentLabel = $t("profile-user.resetPassword.current.label"),
    currentPlaceholder = $t("profile-user.resetPassword.current.placeholder"),
    newLabel = $t("profile-user.resetPassword.new.label"),
    newPlaceholder = $t("profile-user.resetPassword.new.placeholder"),
    confirmLabel = $t("profile-user.resetPassword.confirm.label"),
    confirmPlaceholder = $t("profile-user.resetPassword.confirm.placeholder"),
    submitLabel = $t("profile-user.resetPassword.submit"),
    cancelLabel = $t("profile-user.resetPassword.cancel"),
  }: ProfileUserResetPasswordProps & {
    isLoading?: boolean;
  } = $props();

  let currentPassword = $state("");
  let newPassword = $state("");
  let confirmPassword = $state("");

  const handleSubmit = () => {
    onChangePassword?.({
      currentPassword,
      newPassword,
      confirmPassword,
    });
  };

  const handleCancel = () => {
    currentPassword = "";
    newPassword = "";
    confirmPassword = "";
    onCancel?.();
  };
</script>

<section class={cn("rounded-lg border bg-card p-6", className)} data-slot="profile-user-reset-password">
  <h3 class="mb-6 text-lg font-semibold">{title}</h3>

  <form
    class="flex max-w-md flex-col gap-5"
    onsubmit={(e) => {
      e.preventDefault();
      handleSubmit();
    }}
  >
    <div class="flex flex-col gap-2">
      <Label for="currentPassword">{currentLabel}</Label>
      {#if isLoading}
        <Skeleton class="h-9 w-full rounded-md" />
      {:else}
        <Input
          id="currentPassword"
          type="password"
          bind:value={currentPassword}
          placeholder={currentPlaceholder}
        />
      {/if}
    </div>

    <div class="flex flex-col gap-2">
      <Label for="newPassword">{newLabel}</Label>
      {#if isLoading}
        <Skeleton class="h-9 w-full rounded-md" />
      {:else}
        <Input
          id="newPassword"
          type="password"
          bind:value={newPassword}
          placeholder={newPlaceholder}
        />
      {/if}
    </div>

    <div class="flex flex-col gap-2">
      <Label for="confirmPassword">{confirmLabel}</Label>
      {#if isLoading}
        <Skeleton class="h-9 w-full rounded-md" />
      {:else}
        <Input
          id="confirmPassword"
          type="password"
          bind:value={confirmPassword}
          placeholder={confirmPlaceholder}
        />
      {/if}
    </div>

    <div class="flex gap-3 pt-2">
      <Button type="submit" disabled={isLoading}>{submitLabel}</Button>
      <Button type="button" variant="outline" onclick={handleCancel} disabled={isLoading}>
        {cancelLabel}
      </Button>
    </div>
  </form>
</section>
