<script lang="ts">
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import LinkTermsOfService from "$lib/components/core/link/link-terms-of-service.svelte";
  import LinkPrivacyPolity from "$lib/components/core/link/link-privacy-polity.svelte";
  import TabUnderline from "$lib/components/core/tabs/ui/tab-underline.svelte";
  import ButtonBack from "$lib/components/core/button/ButtonBack.svelte";
  import LabelOr from "$lib/components/core/label/LabelOr.svelte";
  import type { Snippet } from "svelte";
  import { LightSwitch } from "$lib/components/ui/light-switch";
  import { t } from "$lib/i18n";
  import type { AuthFormType, LoginRequestDto, LinkProps } from "../../types";
  import FormLoginEmailPassword from "./FormLoginEmailPassword.svelte";
  import FormLoginUsernamePassword from "./FormLoginUsernamePassword.svelte";
  import FormLoginPhonePassword from "./FormLoginPhonePassword.svelte";

  /**
   * Card de autenticação com abas login/register.
   * @property {AuthFormType} formType - Tipo do form (EMAIL_PASSWORD, USERNAME_PASSWORD, PHONE_PASSWORD)
   * @property {(cred: Credential) => void} onSubmit - Callback ao submeter credenciais
   * @property {Snippet} register - Snippet do form de registro (opcional, exibe aba Register)
   * @property {LinkProps} privacyPolicy - Config do link de privacidade { url, onclick }
   * @property {LinkProps} termsOfService - Config do link de termos { url, onclick }
   */
  type Props = {
    formType?: AuthFormType;
    onSubmit?: (credential: LoginRequestDto) => void;
    register?: Snippet;
    forgetPassword?: LinkProps;
    privacyPolicy?: LinkProps;
    termsOfService?: LinkProps;
  };

  let { formType, onSubmit, register, forgetPassword, privacyPolicy, termsOfService }: Props =
    $props();
</script>

<div class="flex-1 flex flex-col justify-between h-screen bg-gradient-right">
  <nav class="flex justify-between p-5 md:bg-transparent">
    <div>
      <ButtonBack />
    </div>
    <div class="flex gap-2">
      <LightSwitch />
      <LanguageSwitcher />
    </div>
  </nav>

  <div
    class="p-5 h-full border-t-2 bg-background md:border-none rounded-tl-[35px] rounded-tr-[35px]"
  >
    <TabUnderline
      items={[
        {
          item: { label: $t("label.login"), value: "login" },
          children: loginSnippet,
        },
        ...(register
          ? [
              {
                item: { label: $t("label.register"), value: "register" },
                children: registerSnippet,
              },
            ]
          : []),
      ]}
    />

    {#snippet loginSnippet()}
      {#if formType == "EMAIL_PASSWORD"}
        <FormLoginEmailPassword {onSubmit} {forgetPassword} />
      {:else if formType == "USERNAME_PASSWORD"}
        <FormLoginUsernamePassword {onSubmit} {forgetPassword} />
      {:else if formType == "PHONE_PASSWORD"}
        <FormLoginPhonePassword {onSubmit} {forgetPassword} />
      {/if}
    {/snippet}

    {#snippet registerSnippet()}
      {#if register}
        {@render register()}
      {/if}
    {/snippet}
  </div>

  <!-- Footer Terms -->
  <div
    class="text-[11px] text-slate-400 py-2 flex justify-center gap-2 bg-background"
  >
    <LinkPrivacyPolity
      href={privacyPolicy?.url}
      onclick={privacyPolicy?.onclick}
    />
    <LabelOr />
    <LinkTermsOfService
      href={termsOfService?.url}
      onclick={termsOfService?.onclick}
    />
  </div>
</div>
