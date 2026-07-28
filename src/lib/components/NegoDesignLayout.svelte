<script lang="ts">
  /* eslint-disable @typescript-eslint/no-explicit-any */
  import { ModeWatcher } from "mode-watcher";
  import { defineNegodesignConfig } from "../config";
  import type { NegodesignConfig } from "../config";

  let {
    translations,
    children,
  }: {
    translations?: NegodesignConfig["translations"];
    children: any;
  } = $props();

  $effect(() => {
    if (translations) {
      defineNegodesignConfig({ translations });
    }
  });
</script>

<ModeWatcher />
{@render children()}
