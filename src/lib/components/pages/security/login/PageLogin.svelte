<script lang="ts" module>
  /**
   * @component PageLogin
   * Main login page. Routes to the specified layout variant.
   *
   * @example svelte
   * <PageLogin varient="01" formType="EMAIL_PASSWORD" onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import type { PageLoginProps } from "./types";
  import PageLogin01 from "./01/ui/PageLogin01.svelte";

  type Props = {
    varient?: "01";
  };

  let { ...props }: PageLoginProps & Props = $props();
</script>

<PageLogin01 {...props} />
