<script lang="ts" module>
  /**
   * @component FormLogin
   * Reusable login form with input variants (EMAIL, USERNAME, PHONE).
   *
   * @example svelte
   * <FormLogin variant="EMAIL" onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import InputEmail from "$lib/components/ui/form/ui/input-email.svelte";
  import InputUsername from "$lib/components/ui/form/ui/input-username.svelte";
  import InputPhone from "$lib/components/ui/form/ui/input-phone.svelte";
  import InputPassword from "$lib/components/ui/form/ui/input-password.svelte";
  import ButtonLogin from "$lib/components/ui/button/ButtonLogin.svelte";
  import LinkForgetPassword from "$lib/components/ui/link/link-forget-password.svelte";
  import SocialLogin from "$lib/components/ui/social-login/social-login.svelte";
  import { t } from "$lib/i18n";
  import type { LoginRequestDto, LoginVariant, LinkProps, SocialLoginItem } from "../../types";

  type Props = {
    variant: LoginVariant;
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
    socialLogins?: SocialLoginItem[];
  };

  let { variant, onSubmit, forgetPassword, socialLogins = [] }: Props = $props();
  let data = $state("");
  let password = $state("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    onSubmit?.({ data, password });
  }
</script>

<form class="w-full space-y-4" onsubmit={handleSubmit}>
  <p class="text-[13px] py-3">{$t("text.login")}</p>

  <div class="space-y-1">
    {#if variant === "EMAIL"}
      <InputEmail bind:value={data} />
    {:else if variant === "USERNAME"}
      <InputUsername bind:value={data} />
    {:else if variant === "PHONE"}
      <InputPhone bind:value={data} />
    {/if}
  </div>

  <div class="space-y-1 relative">
    <InputPassword bind:value={password} />
    <LinkForgetPassword href={forgetPassword?.url} onclick={forgetPassword?.onclick} />
  </div>

  <div class="flex flex-col gap-1">
    <ButtonLogin type="submit" />
    <SocialLogin items={socialLogins} />
  </div>
</form>
