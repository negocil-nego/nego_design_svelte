<script lang="ts" module>
  /**
   * @component ModalLogin
   * Modal de autenticação baseado no PageLogin01/LoginCard01 que abre globalmente
   * em qualquer parte da aplicação. Controlado pelo `loginStore`: quando
   * `$loginStore.open` é `true` o modal abre.
   * @see ModalLoginProps
   */
</script>

<script lang="ts">
  import { cn } from "$lib/utils";
  import ModalCore from "$lib/components/ui/modal/core/ui/ModalCore.svelte";
  import FormLoginEmailPassword from "$lib/components/pages/security/login/01/ui/FormLoginEmailPassword.svelte";
  import FormLoginUsernamePassword from "$lib/components/pages/security/login/01/ui/FormLoginUsernamePassword.svelte";
  import FormLoginUsernameOrEmailPassword from "$lib/components/pages/security/login/01/ui/FormLoginUsernameOrEmailPassword.svelte";
  import FormLoginPhonePassword from "$lib/components/pages/security/login/01/ui/FormLoginPhonePassword.svelte";
  import LinkPrivacyPolity from "$lib/components/ui/link/link-privacy-polity.svelte";
  import LinkTermsOfService from "$lib/components/ui/link/link-terms-of-service.svelte";
  import LabelOr from "$lib/components/ui/label/core/LabelOr.svelte";
  import { t } from "$lib/i18n";
  import { closeLogin, loginStore } from "$lib/store";
  import type { LoginRequestDto } from "$lib/components/pages/security/login/types";
  import type { ModalLoginProps } from "../types";

  let {
    title,
    subtitle,
    formType,
    isLoading,
    forgetPassword,
    privacyPolicy,
    termsOfService,
    socialLogins,
    onSubmit,
    onClose,
    class: className,
  }: ModalLoginProps = $props();

  const isOpen = $derived(loginStore.open);
  const finalTitle = $derived(
    title ?? loginStore.title ?? $t("label.login") ?? "Login",
  );
  const finalSubtitle = $derived(
    subtitle ?? loginStore.subtitle ?? $t("text.login") ?? "",
  );
  const finalFormType = $derived(
    formType ?? loginStore.formType ?? "USERNAME_PASSWORD",
  );
  const finalIsLoading = $derived(isLoading ?? loginStore.isLoading ?? false);
  const finalForgetPassword = $derived(forgetPassword ?? loginStore.forgetPassword);
  const finalPrivacyPolicy = $derived(privacyPolicy ?? loginStore.privacyPolicy);
  const finalTermsOfService = $derived(termsOfService ?? loginStore.termsOfService);
  const finalSocialLogins = $derived(socialLogins ?? loginStore.socialLogins);
  const submit = $derived(onSubmit ?? loginStore.onSubmit);

  function handleSubmit(credential: LoginRequestDto) {
    submit?.(credential);
  }

  function handleClose() {
    const callback = onClose ?? loginStore.onClose;
    callback?.();
    closeLogin();
  }
</script>

<ModalCore
  isOpen={isOpen}
  title={finalTitle}
  subtitle={finalSubtitle}
  showProgress={false}
  showBack={false}
  onClose={handleClose}
  class={cn("max-w-md", className)}
>
  {#snippet content()}
    <div class="flex flex-col gap-4">
      {#if finalFormType === "EMAIL_PASSWORD"}
        <FormLoginEmailPassword
          onSubmit={handleSubmit}
          forgetPassword={finalForgetPassword}
          socialLogins={finalSocialLogins}
          isLoading={finalIsLoading}
        />
      {:else if finalFormType === "USERNAME_PASSWORD"}
        <FormLoginUsernamePassword
          onSubmit={handleSubmit}
          forgetPassword={finalForgetPassword}
          socialLogins={finalSocialLogins}
          isLoading={finalIsLoading}
        />
      {:else if finalFormType === "USERNAME_OR_EMAIL_PASSWORD"}
        <FormLoginUsernameOrEmailPassword
          onSubmit={handleSubmit}
          forgetPassword={finalForgetPassword}
          socialLogins={finalSocialLogins}
          isLoading={finalIsLoading}
        />
      {:else if finalFormType === "PHONE_PASSWORD"}
        <FormLoginPhonePassword
          onSubmit={handleSubmit}
          forgetPassword={finalForgetPassword}
          socialLogins={finalSocialLogins}
          isLoading={finalIsLoading}
        />
      {/if}

      <div class="flex items-center justify-center gap-2 text-[11px]">
        <LinkPrivacyPolity
          href={finalPrivacyPolicy?.url}
          onclick={finalPrivacyPolicy?.onclick}
        />
        <LabelOr />
        <LinkTermsOfService
          href={finalTermsOfService?.url}
          onclick={finalTermsOfService?.onclick}
        />
      </div>
    </div>
  {/snippet}
</ModalCore>