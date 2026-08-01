<script lang="ts" module>
  /**
   * @component PageForgetPassword
   * Password recovery page. Routes to the specified layout variant.
   *
   * @example svelte
   * <PageForgetPassword varient="01" onSubmit={(req) => handleForget(req)} />
   */
</script>

<script lang="ts">
  import type { PageForgetPasswordProps } from "./types";
  import PageForgetPassword01 from "./01/ui/PageForgetPassword01.svelte";

  type Props = {
    varient?: "01";
  };

  let { ...props }: PageForgetPasswordProps & Props = $props();
</script>

<PageForgetPassword01 {...props} />
