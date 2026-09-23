<script lang="ts" module>
  /**
   * @component LoginCard03
   * Variant 03 authentication card with glass morphism design, social login, and user stats.
   *
   * @example svelte
   * <LoginCard03 formType="EMAIL_PASSWORD" onSubmit={(cred) => login(cred)} />
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
  import FormLoginUsernamePassword03 from "./FormLoginUsernamePassword03.svelte";
  import FormLoginUsernameOrEmailPassword03 from "./FormLoginUsernameOrEmailPassword03.svelte";
  import FormLoginEmailPassword03 from "./FormLoginEmailPassword03.svelte";
  import FormLoginPhonePassword03 from "./FormLoginPhonePassword03.svelte";

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
      <div class="space-y-2">
        <div class="w-12 h-12 rounded-xl flex items-center justify-center">
          <span class="text-xl font-bold text-gray-600">G</span>
        </div>
        <h1 class="text-2xl font-bold text-gray-900">
          {$t("text.login.welcome")}
        </h1>
        <p class="text-sm text-gray-500">
          {$t("text.login.subtitle")}
        </p>
      </div>

      {#if formType == "EMAIL_PASSWORD"}
        <FormLoginEmailPassword03
          {onSubmit}
          {forgetPassword}
          {socialLogins}
          {isLoading}
        />
      {:else if formType == "USERNAME_PASSWORD"}
        <FormLoginUsernamePassword03
          {onSubmit}
          {forgetPassword}
          {socialLogins}
          {isLoading}
        />
      {:else if formType == "USERNAME_OR_EMAIL_PASSWORD"}
        <FormLoginUsernameOrEmailPassword03
          {onSubmit}
          {forgetPassword}
          {socialLogins}
          {isLoading}
        />
      {:else if formType == "PHONE_PASSWORD"}
        <FormLoginPhonePassword03
          {onSubmit}
          {forgetPassword}
          {socialLogins}
          {isLoading}
        />
      {/if}

      <div class="flex flex-col space-y-2">
        <div class="text-center text-xs space-x-2">
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

        <p class="text-center text-sm">
          {$t("text.login.no-account")}
          <a
            href={register?.url ?? "/register"}
            onclick={register?.onclick}
            class="font-semibold text-primary hover:underline"
          >
            {$t("text.login.sign-up")}
          </a>
        </p>
      </div>
    </div>
  </div>

  <div class="px-8 pb-8">
    <div class="flex items-center gap-3 p-4 rounded-xl">
      <div class="flex -space-x-2">
        <div
          class="w-8 h-8 rounded-full bg-linear-to-br from-blue-400 to-blue-600 border-2 border-white"
        ></div>
        <div
          class="w-8 h-8 rounded-full bg-linear-to-br from-green-400 to-green-600 border-2 border-white"
        ></div>
        <div
          class="w-8 h-8 rounded-full bg-linear-to-br from-purple-400 to-purple-600 border-2 border-white"
        ></div>
      </div>
      <div>
        <p class="text-sm font-semibold">
          {$t("text.login.users.count")}
        </p>
        <p class="text-xs">{$t("text.login.users.worldwide")}</p>
      </div>
    </div>
  </div>
</div>
