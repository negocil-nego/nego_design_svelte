<script lang="ts" module>
  /**
   * @component FormLogin03
   * Variant 03 login form with input variants (EMAIL, USERNAME, PHONE).
   *
   * @example svelte
   * <FormLogin03 variant="EMAIL" onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import InputEmail from "$lib/components/ui/form/ui/input-email.svelte";
  import InputUsername from "$lib/components/ui/form/ui/input-username.svelte";
  import InputPhone from "$lib/components/ui/form/ui/input-phone.svelte";
  import InputPassword from "$lib/components/ui/form/ui/input-password.svelte";
  import LinkForgetPassword from "$lib/components/ui/link/link-forget-password.svelte";
  import SocialLogin from "$lib/components/ui/social-login/social-login.svelte";
  import { t } from "$lib/i18n";
  import type {
    LoginRequestDto,
    LoginVariant,
    LinkProps,
    SocialLoginItem,
  } from "../../types";

  type Props = {
    variant: LoginVariant;
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
    socialLogins?: SocialLoginItem[];
    inputLabelClass?: string;
    inputClass?: string;
  };

  let {
    variant,
    onSubmit,
    forgetPassword,
    socialLogins = [],
    inputLabelClass,
    inputClass,
  }: Props = $props();
  let data = $state("");
  let password = $state("");
  let rememberMe = $state(false);

  function handleSubmit(e: Event) {
    e.preventDefault();
    onSubmit?.({ data, password });
  }
</script>

<form class="w-full space-y-4" onsubmit={handleSubmit}>
  <div class="space-y-1">
    {#if variant === "EMAIL"}
      <InputEmail labelClass={inputLabelClass} inputClass={inputClass} bind:value={data} />
    {:else if variant === "USERNAME"}
      <InputUsername labelClass={inputLabelClass} inputClass={inputClass} bind:value={data} />
    {:else if variant === "PHONE"}
      <InputPhone labelClass={inputLabelClass} inputClass={inputClass} bind:value={data} />
    {/if}
  </div>

  <div class="space-y-1">
    <InputPassword labelClass={inputLabelClass} inputClass={inputClass} bind:value={password} />
  </div>

  <div class="flex items-center justify-between">
    <label class="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
      <input
        type="checkbox"
        bind:checked={rememberMe}
        class="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary"
      />
      {$t("label.remember.me")}
    </label>
    <LinkForgetPassword
      href={forgetPassword?.url}
      onclick={forgetPassword?.onclick}
    />
  </div>

  <button
    type="submit"
    class="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold transition-colors hover:opacity-90"
  >
    {$t("label.login")}
  </button>

  <SocialLogin items={socialLogins} />
</form>
