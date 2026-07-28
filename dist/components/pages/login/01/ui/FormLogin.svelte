<script lang="ts">
  import InputEmail from "../../../../core/form/ui/input-email.svelte";
  import InputUsername from "../../../../core/form/ui/input-username.svelte";
  import InputPhone from "../../../../core/form/ui/input-phone.svelte";
  import InputPassword from "../../../../core/form/ui/input-password.svelte";
  import ButtonLogin from "../../../../core/button/ButtonLogin.svelte";
  import LinkForgetPassword from "../../../../core/link/link-forget-password.svelte";
  import LabelOr from "../../../../core/label/LabelOr.svelte";
  import ButtonLoginWith from "../../../../core/button/ButtonLoginWith.svelte";
  import { t } from "../../../../../i18n";
  import type { LoginRequestDto, LoginVariant } from "../../types";

  /**
   * Formulário de login reutilizável.
   * @property {LoginVariant} variant - Tipo do input de dados (EMAIL, USERNAME, PHONE)
   * @property {(cred: Credential) => void} onSubmit - Callback ao submeter { data, password }
   */
  type Props = {
    variant: LoginVariant;
    onSubmit?: (credential: LoginRequestDto) => void;
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
