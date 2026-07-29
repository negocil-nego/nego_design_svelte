<script lang="ts" module>
  /**
   * Variante 02 da página de Política de Privacidade / Termos de Uso.
   * Layout simples com hero colorido e conteúdo centralizado em coluna única.
   * @component
   * @example
   * ```svelte
   * <PrivacyPolicyOrTermsOfUse02 data={pageData} />
   * ```
   */
</script>

<script lang="ts">
  import type { DocPageData } from "../types";
  import DocsPageHero from "./DocsPageHero.svelte";

  let { data }: { data: DocPageData } = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<DocsPageHero data={data} />
