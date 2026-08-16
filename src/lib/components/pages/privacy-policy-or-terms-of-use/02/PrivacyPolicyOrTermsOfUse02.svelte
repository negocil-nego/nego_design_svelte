<script lang="ts" module>
  /**
   * Variant 02 of the Privacy Policy / Terms of Use page.
   * Simple layout with colored hero and centered content in a single column.
   * @component
   * @example
   * ```svelte
   * <PrivacyPolicyOrTermsOfUse02 data={pageData} />
   * ```
   */
</script>

<script lang="ts">
  import DocsPageHero from "./DocsPageHero.svelte";
  import type { PrivacyPolicyOrTermsOfUseProps } from "../types";

  let { ...data }: PrivacyPolicyOrTermsOfUseProps = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<DocsPageHero {data} />
