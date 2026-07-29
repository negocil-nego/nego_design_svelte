<script lang="ts">
  import InputCodeOtp from "$lib/components/core/form/ui/input-code-otp.svelte";
  import InputPassword from "$lib/components/core/form/ui/input-password.svelte";
  import InputPasswordConfirm from "$lib/components/core/form/ui/input-password-confirm.svelte";
  import ButtonSend from "$lib/components/core/button/ButtonSend.svelte";
  import { t } from "$lib/i18n";
  import type { ResetPasswordRequestDto } from "../../types";

  type Props = {
    otpLength?: number;
    onSubmit?: (request: ResetPasswordRequestDto) => void;
  };

  let { otpLength = 6, onSubmit }: Props = $props();
  let code = $state("");
  let password = $state("");
  let confirmPassword = $state("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    onSubmit?.({ code, password, confirmPassword });
  }
</script>

<form class="w-full space-y-4" onsubmit={handleSubmit}>
  <p class="text-[13px] py-3">{$t("text.reset-password")}</p>

  <div class="space-y-1">
    <InputCodeOtp length={otpLength} bind:value={code} />
  </div>

  <div class="space-y-1">
    <InputPassword bind:value={password} />
  </div>

  <div class="space-y-1">
    <InputPasswordConfirm bind:value={confirmPassword} />
  </div>

  <ButtonSend type="submit" />
</form>
