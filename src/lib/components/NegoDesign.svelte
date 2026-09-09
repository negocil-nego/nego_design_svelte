<script lang="ts">
  import { setUserTranslations } from "../i18n/config";
  import type { NegoDesignProps } from "$lib/types";
  import { applyTheme, theme } from "$lib/theme.svelte";

  let { translations, children }: NegoDesignProps = $props();

  $effect(() => {
    if (translations) {
      setUserTranslations(translations);
    }
  });

  $effect(() => {
    if (typeof document !== "undefined") {
      applyTheme(theme.current);
    }
  });
</script>

{@render children()}
