<script lang="ts">
  import { t } from "$lib/i18n";
  import type { HTMLAnchorAttributes } from "svelte/elements";

  type Props = HTMLAnchorAttributes;

  let { class: className, ...restProps }: Props = $props();
</script>

<a {...restProps} class="text-xs z-10 {className}">
  {$t("link.terms-of-service.label")}
</a>
