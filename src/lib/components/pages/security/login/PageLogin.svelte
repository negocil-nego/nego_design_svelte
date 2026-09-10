<script lang="ts" module>
  /**
   * @component PageLogin
   * Main login page. Routes to the specified layout variant.
   *
   * @example svelte
   * <PageLogin variant={2} formType="EMAIL_PASSWORD" onSubmit={(cred) => login(cred)} />
   */
</script>

<script lang="ts">
  import type { PageLoginProps } from "./types";
  import PageLogin01 from "./01/ui/PageLogin01.svelte";
  import PageLogin02 from "./02/ui/PageLogin02.svelte";

  type Props = {
    variant?: 1 | 2;
  };

  let { variant = 1, ...props }: PageLoginProps & Props = $props();
</script>

{#if variant === 2}
  <PageLogin02 {...props} />
{:else}
  <PageLogin01 {...props} />
{/if}
