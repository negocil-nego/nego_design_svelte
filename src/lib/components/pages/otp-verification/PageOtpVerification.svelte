<script lang="ts">
  import type { PageOtpVerificationProps } from "./types";
  import PageOtpVerification01 from "./01/ui/PageOtpVerification01.svelte";

  /**
   * Página de verificação OTP.
   * @property {"01"} varient - Variante do layout
   */
  type Props = {
    varient?: "01";
  };

  let { ...props }: PageOtpVerificationProps & Props = $props();
</script>

<PageOtpVerification01 {...props} />
