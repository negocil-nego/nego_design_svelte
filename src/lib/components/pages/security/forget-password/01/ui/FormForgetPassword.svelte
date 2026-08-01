<script lang="ts" module>
  /**
   * @component FormForgetPassword
   * Password recovery form with email, phone, or both input.
   *
   * @example svelte
   * <FormForgetPassword variant="EMAIL" onSubmit={(req) => console.log(req)} />
   */
</script>

<script lang="ts">
  import InputEmail from "$lib/components/core/form/ui/input-email.svelte";
  import InputPhone from "$lib/components/core/form/ui/input-phone.svelte";
  import InputEmailOrPhone from "$lib/components/core/form/ui/input-email-or-phone.svelte";
  import { t } from "$lib/i18n";
  import type { ForgetPasswordRequestDto, ForgetPasswordVariant } from "../../types";
  import ButtonSend from "$lib/components/core/button/ButtonSend.svelte";

  type Props = {
    variant?: ForgetPasswordVariant;
    onSubmit?: (request: ForgetPasswordRequestDto) => void;
  };

  let { variant = "EMAIL", onSubmit }: Props = $props();
  let data = $state("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    onSubmit?.({ data, variant });
  }
</script>

<form class="w-full space-y-4" onsubmit={handleSubmit}>
  <p class="text-[13px] py-3">{$t("text.forget-password")}</p>

  <div class="space-y-1">
    {#if variant === "EMAIL"}
      <InputEmail bind:value={data} />
    {:else if variant === "PHONE"}
      <InputPhone bind:value={data} />
    {:else if variant === "PHONE_EMAIL"}
      <InputEmailOrPhone bind:value={data} />
    {/if}
  </div>

  <ButtonSend type="submit" />
</form>
