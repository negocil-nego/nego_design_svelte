<script lang="ts">
  import { t } from "$lib/i18n";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  type Props = HTMLAnchorAttributes;

  let { ...restProps }: Props = $props();
</script>

<a {...restProps} class="text-xs text-slate-500 hover:text-slate-800 z-10">
  {$t("link.forget.password")}!
</a>
