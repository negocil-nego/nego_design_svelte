<script lang="ts" module>
  /**
   * Componente principal de Política de Privacidade / Termos de Uso.
   * Permite escolher entre duas variantes de layout:
   * - **1**: Layout de três colunas com sidebar, conteúdo e TOC (scroll-spy).
   * - **2**: Layout simples com hero colorido e conteúdo centralizado.
   *
   * @component
   * @example
   * ```svelte
   * <!-- Variante 1 (padrão) — layout de docs com sidebar -->
   * <PrivacyPolicyOrTermsOfUse variant={1} data={pageData} />
   *
   * <!-- Variante 2 — layout com hero -->
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
