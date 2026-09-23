<script lang="ts" module>
  /**
   * @component LoginCard02
   * Variant 02 authentication card with welcome header, social login, and form.
   *
   * @example svelte
   * <LoginCard02 formType="EMAIL_PASSWORD" onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import ButtonBack from "$lib/components/ui/button/ButtonBack.svelte";
  import { ThemeSwitch } from "$lib/components/ui/theme-switch";
  import { t } from "$lib/i18n";
  import type {
    LoginFormType,
    LoginRequestDto,
    LinkProps,
    SocialLoginItem,
  } from "../../types";
  import FormLoginUsernamePassword02 from "./FormLoginUsernamePassword02.svelte";
  import FormLoginUsernameOrEmailPassword02 from "./FormLoginUsernameOrEmailPassword02.svelte";
  import FormLoginEmailPassword02 from "./FormLoginEmailPassword02.svelte";
  import FormLoginPhonePassword02 from "./FormLoginPhonePassword02.svelte";

  type Props = {
    formType?: LoginFormType;
    onSubmit?: (credential: LoginRequestDto) => void;
    onButtonBack?: () => void;
    register?: LinkProps;
    forgetPassword?: LinkProps;
    privacyPolicy?: LinkProps;
    termsOfService?: LinkProps;
    socialLogins?: SocialLoginItem[];
    isLoading?: boolean;
  };

  let {
    formType,
    onSubmit,
    onButtonBack,
    register,
    forgetPassword,
    privacyPolicy,
    termsOfService,
    socialLogins = [],
    isLoading,
  }: Props = $props();
</script>

<div class="flex-1 flex flex-col justify-between h-full">
  <nav class="flex justify-between p-5">
    <div>
      {#if onButtonBack}
        <ButtonBack onclick={onButtonBack} />
      {/if}
    </div>
    <div class="flex gap-2">
      <ThemeSwitch />
      <LanguageSwitcher />
    </div>
  </nav>

  <div class="flex-1 flex flex-col justify-center px-8 md:px-12 pb-8">
    <div class="w-full max-w-sm mx-auto space-y-6">
      <div class="text-center space-y-2">
        <h1 class="text-2xl font-bold text-gray-900">
          {$t("text.login.welcome")}
        </h1>
        <p class="text-sm text-gray-500">
          {$t("text.login.continue")}
        </p>
      </div>

      {#if formType == "EMAIL_PASSWORD"}
        <FormLoginEmailPassword02
          {onSubmit}
          {forgetPassword}
          {socialLogins}
          {isLoading}
        />
      {:else if formType == "USERNAME_PASSWORD"}
        <FormLoginUsernamePassword02
          {onSubmit}
          {forgetPassword}
          {socialLogins}
          {isLoading}
        />
      {:else if formType == "USERNAME_OR_EMAIL_PASSWORD"}
        <FormLoginUsernameOrEmailPassword02
          {onSubmit}
          {forgetPassword}
          {socialLogins}
          {isLoading}
        />
      {:else if formType == "PHONE_PASSWORD"}
        <FormLoginPhonePassword02
          {onSubmit}
          {forgetPassword}
          {socialLogins}
          {isLoading}
        />
      {/if}

      <p class="text-center text-sm text-gray-600">
        {$t("text.login.no-account")}
        <a
          href={register?.url ?? "/register"}
          onclick={register?.onclick}
          class="font-semibold text-primary hover:underline"
        >
          {$t("text.login.sign-up")}
        </a>
      </p>

      <div class="text-center text-xs text-gray-400 space-x-2">
        <a
          href={privacyPolicy?.url ?? "/privacy-policy"}
          onclick={privacyPolicy?.onclick}
          class="hover:underline"
        >
          {$t("link.privacy-policy.label")}
        </a>
        <span>|</span>
        <a
          href={termsOfService?.url ?? "/terms-of-service"}
          onclick={termsOfService?.onclick}
          class="hover:underline"
        >
          {$t("link.terms-of-service.label")}
        </a>
      </div>
    </div>
  </div>
</div>
