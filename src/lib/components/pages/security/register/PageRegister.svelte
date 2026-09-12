<script lang="ts" module>
  /**
   * @component PageRegister
   * Main register page. Routes to the specified layout variant.
   *
   * @example svelte
   * <PageRegister variant={1} fields={{ isName: true, isEmail: true }} onSubmit={(data) => register(data)} />
   */
</script>

<script lang="ts">
  import type { PageRegisterProps } from "./types";
  import PageRegister01 from "./01/ui/PageRegister01.svelte";
  import PageRegister02 from "./02/ui/PageRegister02.svelte";
  import PageRegister03 from "./03/ui/PageRegister03.svelte";

  type Props = {
    variant?: 1 | 2 | 3;
  };

  let { variant = 1, ...props }: PageRegisterProps & Props = $props();
</script>

{#if variant === 3}
  <PageRegister03 {...props} />
{:else if variant === 2}
  <PageRegister02 {...props} />
{:else}
  <PageRegister01 {...props} />
{/if}
