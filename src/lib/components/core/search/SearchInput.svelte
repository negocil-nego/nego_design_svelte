<script lang="ts" module>
  /**
   * Main Privacy Policy / Terms of Use component.
   * Allows choosing between two layout variants:
   * - **1**: Three-column layout with sidebar, content, and TOC (scroll-spy).
   * - **2**: Simple layout with colored hero and centered content.
   *
   * @component
   * @example
   * ```svelte
    * <!-- Variant 1 (default) — docs layout with sidebar -->
   * <PrivacyPolicyOrTermsOfUse variant={1} data={pageData} />
   *
    * <!-- Variant 2 — layout with hero -->
   * <PrivacyPolicyOrTermsOfUse variant={2} data={pageData} />
   * ```
   */
</script>

<script lang="ts">
    import Search01 from "./01/Search01.svelte";
    import Search02 from "./02/Search02.svelte";
    import type { SearchInputProps } from "./types";

  let { variant = 1, ...restProps }: SearchInputProps = $props();
</script>

{#if variant === 2}
  <Search02 {...restProps} />
{:else}
  <Search01 {...restProps} />
{/if}
