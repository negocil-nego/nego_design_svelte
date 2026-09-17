<script lang="ts" module>
  /**
   * @component RegisterCard
   * Authentication card for registration with back button, light switch, and link footer.
   *
   * @example svelte
   * <RegisterCard fields={{ isName: true, isEmail: true, isPassword: true }} onSubmit={(data) => register(data)} />
   */
</script>

<script lang="ts">
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import LinkTermsOfService from "$lib/components/ui/link/link-terms-of-service.svelte";
  import LinkPrivacyPolity from "$lib/components/ui/link/link-privacy-polity.svelte";
  import ButtonBack from "$lib/components/ui/button/ButtonBack.svelte";
  import LabelOr from "$lib/components/ui/label/core/LabelOr.svelte";
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

<div class="flex-1 flex flex-col justify-between h-screen">
  <nav class="flex justify-between p-5 md:bg-transparent">
    <div>
      <ButtonBack />
    </div>
    <div class="flex gap-2">
      <ThemeSwitch />
      <LanguageSwitcher />
    </div>
  </nav>

  <div
    class="p-5 h-full border-t-2 md:border-none rounded-tl-[35px] rounded-tr-[35px]"
  >
    <div class="space-y-4">
      <div class="space-y-1">
        <h1 class="text-2xl font-bold text-white">{$t("label.register")}</h1>
        <p class="text-sm text-white/90">{$t("text.register")}</p>
      </div>

      <FormRegister
        {fields}
        {onSubmit}
        {isLoading}
        inputLabelClass="text-white"
        inputClass="text-white/90 placeholder:text-white/50"
        placeholderClass="text-white/50"
      />

      {#if socialLogins.length > 0}
        <SocialLogin items={socialLogins} />
      {/if}

      <p class="text-center text-sm">
        {$t("text.login.has-account")}
        <a
          href={login?.url ?? "/login"}
          onclick={login?.onclick}
          class="font-semibold hover:underline"
        >
          {$t("text.login.sign-in")}
        </a>
      </p>
    </div>

    <!-- Footer Terms -->
    <div class="text-[11px] flex justify-center gap-2 relative my-3 pb-5">
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
</div>
