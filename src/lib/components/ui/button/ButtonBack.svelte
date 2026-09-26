<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { t } from "$lib/i18n";
  import type { ButtonProps } from "$lib/components/ui/button";

  let {
    isLabel = false,
    ...restProps
  }: ButtonProps & {
    isLabel?: boolean;
  } = $props();
</script>

<Button
  variant="outline"
  class="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 transition-colors rounded-full bg-input dark:bg-white"
  {...restProps}
>
  <ImageHugeicons icon="arrow-left-01" width={16} height={16} />
  {#if isLabel}
    <span>{$t("label.back")}</span>
  {:else}
    <span class="sr-only">{$t("label.back")}</span>
  {/if}
</Button>
