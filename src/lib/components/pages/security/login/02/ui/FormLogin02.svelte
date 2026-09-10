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
  import InputEmail from "$lib/components/core/form/ui/input-email.svelte";
  import InputUsername from "$lib/components/core/form/ui/input-username.svelte";
  import InputPhone from "$lib/components/core/form/ui/input-phone.svelte";
  import InputPassword from "$lib/components/core/form/ui/input-password.svelte";
  import { t } from "$lib/i18n";
  import type { LoginRequestDto, LoginVariant, LinkProps } from "../../types";

  type Props = {
    variant: LoginVariant;
    onSubmit?: (credential: LoginRequestDto) => void;
    forgetPassword?: LinkProps;
  };

  let { variant, onSubmit, forgetPassword }: Props = $props();
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
      <InputEmail bind:value={data} />
    {:else if variant === "USERNAME"}
      <InputUsername bind:value={data} />
    {:else if variant === "PHONE"}
      <InputPhone bind:value={data} />
    {/if}
  </div>

  <div class="space-y-1">
    <InputPassword bind:value={password} />
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
    class="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-primary text-white rounded-lg text-sm font-semibold transition-colors"
  >
    {$t("label.login")}
  </button>
</form>
