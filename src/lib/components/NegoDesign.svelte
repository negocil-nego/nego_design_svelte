<script lang="ts">
  import { ModeWatcher } from "mode-watcher";
  import { setUserTranslations } from "../i18n/config";
  import type { NegoDesignProps } from "$lib/types";

  let { translations, children }: NegoDesignProps = $props();

  $effect(() => {
    if (translations) {
      setUserTranslations(translations);
    }
  });
</script>

<ModeWatcher />
{@render children()}
