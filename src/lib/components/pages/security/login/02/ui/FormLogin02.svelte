<script lang="ts" module>
  /**
   * @component FormLogin02
   * Variant 02 login form with input variants (EMAIL, USERNAME, PHONE).
   *
   * @example svelte
   * <FormLogin02 variant="EMAIL" onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import InputEmail from "$lib/components/ui/form/ui/input-email.svelte";
  import InputUsername from "$lib/components/ui/form/ui/input-username.svelte";
  import InputUsernameOrEmail from "$lib/components/ui/form/ui/input-username-or-email.svelte";
  import InputPhone from "$lib/components/ui/form/ui/input-phone.svelte";
  import InputPassword from "$lib/components/ui/form/ui/input-password.svelte";
  import SocialLogin from "$lib/components/ui/social-login/social-login.svelte";
  import { t } from "$lib/i18n";
  import type { LoginRequestDto, LoginVariant, LinkProps, SocialLoginItem } from "../../types";

  type Props = {
    variant: LoginVariant;
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
    socialLogins?: SocialLoginItem[];
    inputLabelClass?: string;
    inputClass?: string;
    isLoading?: boolean;
  };

  let {
    variant,
    onSubmit,
    forgetPassword,
    socialLogins = [],
    inputLabelClass,
    inputClass,
    isLoading = false,
  }: Props = $props();
  let data = $state("");
  let password = $state("");

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
    {:else if variant === "USERNAME_OR_EMAIL"}
      <InputUsernameOrEmail labelClass={inputLabelClass} inputClass={inputClass} bind:value={data} />
    {:else if variant === "PHONE"}
      <InputPhone labelClass={inputLabelClass} inputClass={inputClass} bind:value={data} />
    {/if}
  </div>

  <div class="space-y-1">
    <InputPassword labelClass={inputLabelClass} inputClass={inputClass} bind:value={password} />
  </div>

  <div class="flex justify-end">
    <a
      href={forgetPassword?.url ?? "/forget-password"}
      onclick={forgetPassword?.onclick}
      class="text-sm font-medium text-primary hover:underline"
    >
      {$t("link.forget.password")}?
    </a>
  </div>

  <button
    type="submit"
    disabled={isLoading}
    class="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold transition-colors disabled:pointer-events-none disabled:opacity-50"
  >
    {$t("label.login")}
  </button>

  <SocialLogin items={socialLogins} />
</form>
