<script lang="ts" module>
  /**
   * @component FormOtpVerification
   * OTP verification form with code input and submit button.
   *
   * @example svelte
   * <FormOtpVerification otpLength={6} onSubmit={(req) => verify(req)} />
   */
</script>

<script lang="ts">
  import InputCodeOtp from "$lib/components/core/form/ui/input-code-otp.svelte";
  import ButtonSend from "$lib/components/core/button/ButtonSend.svelte";
  import { t } from "$lib/i18n";
  import type { OtpVerificationRequestDto } from "../../types";

  type Props = {
    otpLength?: number;
    onSubmit?: (request: OtpVerificationRequestDto) => void;
  };

  let { otpLength = 6, onSubmit }: Props = $props();
  let code = $state("");

  function handleSubmit(e: Event) {
    e.preventDefault();
    onSubmit?.({ code });
  }
</script>

<form class="w-full space-y-4" onsubmit={handleSubmit}>
  <p class="text-[13px] py-3">{$t("text.otp-verification")}</p>

  <div class="space-y-1">
    <InputCodeOtp length={otpLength} bind:value={code} />
  </div>

  <ButtonSend type="submit" />
</form>
