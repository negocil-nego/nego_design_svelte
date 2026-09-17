<script lang="ts" module>
  /**
   * @component RegisterCard02
   * Variant 02 authentication card for registration with welcome header, social login, and form.
   *
   * @example svelte
   * <RegisterCard02 fields={{ isName: true, isEmail: true }} onSubmit={(data) => register(data)} />
   */
</script>

<script lang="ts">
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import { ThemeSwitch } from "$lib/components/ui/theme-switch";
  import { t } from "$lib/i18n";
  import type {
    RegisterFormFields,
    RegisterRequestDto,
    LinkProps,
    SocialLoginItem,
  } from "../../types";
  import SocialLogin from "$lib/components/ui/social-login/social-login.svelte";
  import FormRegister from "../../FormRegister.svelte";

  type Props = {
    fields?: RegisterFormFields;
    onSubmit?: (data: RegisterRequestDto) => void;
    login?: LinkProps;
    privacyPolicy?: LinkProps;
    termsOfService?: LinkProps;
    socialLogins?: SocialLoginItem[];
    isLoading?: boolean;
  };

  let {
    fields,
    onSubmit,
    login,
    privacyPolicy,
    termsOfService,
    socialLogins = [],
    isLoading,
  }: Props = $props();
</script>

<div class="flex-1 flex flex-col justify-between h-full">
  <nav class="flex justify-end p-5">
    <div class="flex gap-2">
      <ThemeSwitch />
      <LanguageSwitcher />
    </div>
  </nav>

  <div class="flex-1 flex flex-col justify-center px-8 md:px-12 pb-8">
    <div class="w-full max-w-sm mx-auto space-y-6">
      <div class="text-center space-y-2">
        <h1 class="text-2xl font-bold text-gray-900">
          {$t("text.register.welcome") ?? $t("text.login.welcome")}
        </h1>
        <p class="text-sm text-gray-500">
          {$t("text.register.continue") ?? $t("text.login.continue")}
        </p>
      </div>

      <FormRegister {fields} {onSubmit} {isLoading} />

      {#if socialLogins.length > 0}
        <SocialLogin items={socialLogins} />
      {/if}

      <p class="text-center text-sm text-gray-600">
        {$t("text.login.has-account")}
        <a
          href={login?.url ?? "/login"}
          onclick={login?.onclick}
          class="font-semibold text-primary hover:underline"
        >
          {$t("text.login.sign-in")}
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
