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
  import type { PrivacyPolicyOrTermsOfUseProps } from "./types";
  import PrivacyPolicyOrTermsOfUse01 from "./01/PrivacyPolicyOrTermsOfUse01.svelte";
  import PrivacyPolicyOrTermsOfUse02 from "./02/PrivacyPolicyOrTermsOfUse02.svelte";

  let { variant = 1, data }: PrivacyPolicyOrTermsOfUseProps = $props();
</script>

{#if variant === 2}
  <PrivacyPolicyOrTermsOfUse02 {data} />
{:else}
  <PrivacyPolicyOrTermsOfUse01 {data} />
{/if}
