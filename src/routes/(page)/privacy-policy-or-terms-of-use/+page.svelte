<script lang="ts">
  import PrivacyPolicyOrTermsOfUse from "$lib/components/pages/privacy-policy-or-terms-of-use/PrivacyPolicyOrTermsOfUse.svelte";
  import { privacyPolicyData } from "$lib/components/pages/privacy-policy-or-terms-of-use/data";

  let variant = $state<1 | 2>(1);
</script>

<svelte:head>
  <title>{privacyPolicyData.title} | Negoturismo</title>
</svelte:head>

<!-- Selector de variante para demonstração -->
<div
  class="sticky top-0 z-50 flex items-center justify-between border-b bg-background/80 px-6 py-3 backdrop-blur-md"
>
  <div class="flex items-center gap-2">
    <span
      class="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
      >Layout Variant:</span
    >
    <button
      type="button"
      class="rounded-md px-3 py-1 text-xs font-medium transition-colors {variant ===
      1
        ? 'bg-primary text-primary-foreground shadow-sm'
        : 'bg-muted hover:bg-muted/80 text-muted-foreground'}"
      onclick={() => (variant = 1)}
    >
      Variante 1 (Docs com Sidebar & TOC)
    </button>
    <button
      type="button"
      class="rounded-md px-3 py-1 text-xs font-medium transition-colors {variant ===
      2
        ? 'bg-primary text-primary-foreground shadow-sm'
        : 'bg-muted hover:bg-muted/80 text-muted-foreground'}"
      onclick={() => (variant = 2)}
    >
      Variante 2 (Hero Banner)
    </button>
  </div>

  <span class="text-xs text-muted-foreground hidden sm:inline-block">
    Mostrando variante {variant}
  </span>
</div>

<PrivacyPolicyOrTermsOfUse {variant} {...privacyPolicyData} />
