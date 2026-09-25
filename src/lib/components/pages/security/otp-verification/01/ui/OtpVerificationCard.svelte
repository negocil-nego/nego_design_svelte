<script lang="ts" module>
  /**
   * @component OtpVerificationCard
   * OTP verification card with tabs, back button, and light switch.
   *
   * @example svelte
   * <OtpVerificationCard otpLength={6} onSubmit={(req) => verify(req)} />
   */
</script>

<script lang="ts">
  import LanguageSwitcher from "$lib/components/ui/language-switcher/language-switcher.svelte";
  import ButtonBack from "$lib/components/ui/button/ButtonBack.svelte";
  import type { Snippet } from "svelte";
  import { ThemeSwitch } from "$lib/components/ui/theme-switch";
  import { t } from "$lib/i18n";
  import type { OtpVerificationRequestDto } from "../../types";
  import FormOtpVerification from "./FormOtpVerification.svelte";
  import TabUnderline from "$lib/components/ui/tabs/ui/tab-underline.svelte";

  type Props = {
    otpLength?: number;
    onButtonBack?: () => void;
    onButtonOtp?: () => void;
    onSubmit?: (request: OtpVerificationRequestDto) => void;
    children?: Snippet;
  };

  let { otpLength, onSubmit, onButtonBack, onButtonOtp, children }: Props =
    $props();
</script>

<div class="flex-1 flex flex-col justify-between h-screen bg-gradient-right">
  <nav
    class="flex {onButtonBack ? 'justify-between' : 'justify-end'} p-5 md:bg-transparent"
  >
    {#if onButtonBack}
      <div>
        <ButtonBack onclick={onButtonBack} />
      </div>
    {/if}
    <div class="flex gap-2">
      <ThemeSwitch />
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

    {#if onButtonOtp}
      <button
        type="button"
        onclick={onButtonOtp}
        class="mt-4 w-full text-center text-sm font-medium text-primary hover:underline cursor-pointer"
      >
        {$t("label.request.new.otp")}
      </button>
    {/if}
  </div>
</div>
