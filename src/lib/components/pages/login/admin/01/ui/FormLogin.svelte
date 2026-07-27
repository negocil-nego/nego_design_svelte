<script lang="ts">
  import InputEmail from "$lib/components/core/form/ui/input-email.svelte";
  import InputUsername from "$lib/components/core/form/ui/input-username.svelte";
  import InputPhone from "$lib/components/core/form/ui/input-phone.svelte";
  import InputPassword from "$lib/components/core/form/ui/input-password.svelte";
  import ButtonLogin from "$lib/components/core/button/ButtonLogin.svelte";
  import LinkForgetPassword from "$lib/components/core/link/link-forget-password.svelte";
  import LabelOr from "$lib/components/core/label/LabelOr.svelte";
  import ButtonLoginWith from "$lib/components/core/button/ButtonLoginWith.svelte";
  import { t } from "$lib/i18n";
  import type { Credential, LoginVariant } from "../data/page-props";

  type Props = {
    variant: LoginVariant;
    onSubmit?: (credential: Credential) => void;
  };

  let { variant, onSubmit }: Props = $props();
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
    <LinkForgetPassword />
  </div>

  <div class="flex flex-col gap-1">
    <ButtonLogin type="submit" />
    <LabelOr variant="SEPARATOR" />
    <ButtonLoginWith icon="GOOGLE" />
  </div>
</form>
