<script lang="ts" module>
  /**
   * @component PageOtpVerification
   * OTP verification page. Routes to the specified layout variant.
   *
   * @example svelte
   * <PageOtpVerification varient="01" otpLength={6} onSubmit={(req) => verify(req)} />
   */
</script>

<script lang="ts">
  import type { PageOtpVerificationProps } from "./types";
  import PageOtpVerification01 from "./01/ui/PageOtpVerification01.svelte";

  type Props = {
    varient?: "01";
  };

  let { ...props }: PageOtpVerificationProps & Props = $props();
</script>

<PageOtpVerification01 {...props} />
