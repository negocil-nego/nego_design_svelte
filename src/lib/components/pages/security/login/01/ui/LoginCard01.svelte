<script lang="ts" module>
  /**
   * @component LoginCard
   * Authentication card with login/register tabs, back button, light switch, and link footer.
   *
   * @example svelte
   * <LoginCard formType="EMAIL_PASSWORD" onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import LinkTermsOfService from "$lib/components/ui/link/link-terms-of-service.svelte";
  import LinkPrivacyPolity from "$lib/components/ui/link/link-privacy-polity.svelte";
  import TabUnderline from "$lib/components/ui/tabs/ui/tab-underline.svelte";
  import ButtonBack from "$lib/components/ui/button/ButtonBack.svelte";
  import LabelOr from "$lib/components/ui/label/core/LabelOr.svelte";
  import type { Snippet } from "svelte";
  import { LightSwitch } from "$lib/components/ui/light-switch";
  import { t } from "$lib/i18n";
  import type {
    LoginFormType,
    LoginRequestDto,
    LinkProps,
    SocialLoginItem,
  } from "../../types";
  import FormLoginEmailPassword from "./FormLoginEmailPassword.svelte";
  import FormLoginUsernamePassword from "./FormLoginUsernamePassword.svelte";
  import FormLoginPhonePassword from "./FormLoginPhonePassword.svelte";

  type Props = {
    formType?: LoginFormType;
    onSubmit?: (credential: LoginRequestDto) => void;
    register?: Snippet;
    forgetPassword?: LinkProps;
    privacyPolicy?: LinkProps;
    termsOfService?: LinkProps;
    socialLogins?: SocialLoginItem[];
    textClass?: string;
  };

  let {
    formType,
    onSubmit,
    register,
    forgetPassword,
    privacyPolicy,
    termsOfService,
    socialLogins = [],
    textClass,
  }: Props = $props();
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
    class="p-5 h-full border-t-2 md:border-none rounded-tl-[35px] rounded-tr-[35px]"
  >
    <TabUnderline
      items={[
        {
          item: {
            label: $t("label.login"),
            value: "login",
            className: "text-white",
          },
          children: loginSnippet,
        },
        ...(register
          ? [
              {
                item: {
                  label: $t("label.register"),
                  value: "register",
                  className: "text-white",
                },
                children: registerSnippet,
              },
            ]
          : []),
      ]}
    />

    {#snippet loginSnippet()}
      {#if formType == "EMAIL_PASSWORD"}
        <FormLoginEmailPassword
          {onSubmit}
          {forgetPassword}
          {socialLogins}
          inputLabelClass="text-white"
          inputClass="text-white/90 placeholder:text-white/50"
          textClass="text-white"
        />
      {:else if formType == "USERNAME_PASSWORD"}
        <FormLoginUsernamePassword
          {onSubmit}
          {forgetPassword}
          {socialLogins}
          inputLabelClass="text-white"
          inputClass="text-white/90 placeholder:text-white/50"
          textClass="text-white"
        />
      {:else if formType == "PHONE_PASSWORD"}
        <FormLoginPhonePassword
          {onSubmit}
          {forgetPassword}
          {socialLogins}
          inputLabelClass="text-white"
          inputClass="text-white/90 placeholder:text-white/50"
          textClass="text-white"
        />
      {/if}
    {/snippet}

    {#snippet registerSnippet()}
      {#if register}
        {@render register()}
      {/if}
    {/snippet}
  </div>

  <!-- Footer Terms -->
  <div class="text-[11px] text-white py-2 flex justify-center gap-2">
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
