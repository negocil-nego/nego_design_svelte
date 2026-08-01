<script lang="ts" module>
  /**
   * @component PageResetPassword
   * Password reset page. Routes to the specified layout variant.
   *
   * @example svelte
   * <PageResetPassword varient="01" otpLength={6} onSubmit={(req) => reset(req)} />
   */
</script>

<script lang="ts">
  import type { PageResetPasswordProps } from "./types";
  import PageResetPassword01 from "./01/ui/PageResetPassword01.svelte";

  type Props = {
    varient?: "01";
  };

  let { ...props }: PageResetPasswordProps & Props = $props();
</script>

<PageResetPassword01 {...props} />
