<script lang="ts">
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import ButtonBack from "$lib/components/core/button/ButtonBack.svelte";
  import type { Snippet } from "svelte";
  import { LightSwitch } from "$lib/components/ui/light-switch";
  import { t } from "$lib/i18n";
  import type { OtpVerificationRequestDto } from "../../types";
  import FormOtpVerification from "./FormOtpVerification.svelte";
  import TabUnderline from "$lib/components/core/tabs/ui/tab-underline.svelte";

  /**
   * Card de verificação OTP.
   * @property {number} otpLength - Quantidade de caixas do código OTP
   * @property {(req: OtpVerificationRequestDto) => void} onSubmit - Callback ao submeter
   */
  type Props = {
    otpLength?: number;
    onSubmit?: (request: OtpVerificationRequestDto) => void;
    children?: Snippet;
  };

  let { otpLength, onSubmit, children }: Props = $props();
</script>

<div class="flex-1 flex flex-col justify-between h-screen bg-gradient-right">
  <nav class="flex justify-between p-5 md:bg-transparent">
    <div>
      <ButtonBack />
    </div>
    <div class="flex gap-2">
      <LightSwitch />
      <LanguageSwitcher />
    </div>
  </nav>

  <div
    class="p-5 h-full border-t-2 bg-background md:border-none rounded-tl-[35px] rounded-tr-[35px]"
  >
    <TabUnderline
      items={[
        {
          item: {
            label: $t("label.otp-verification"),
            value: "otp-verification",
          },
        },
      ]}
    />

    {#if children}
      {@render children()}
    {:else}
      <FormOtpVerification {otpLength} {onSubmit} />
    {/if}
  </div>
</div>
