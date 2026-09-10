<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import { ArrowLeft01Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { t } from "$lib/i18n";
  import type { ButtonProps } from "$lib/components/ui/button";

  let { ...restProps }: ButtonProps = $props();
</script>

<Button
  variant="outline"
  class="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900 transition-colors rounded-full bg-input"
  {...restProps}
>
  <HugeiconsIcon icon={ArrowLeft01Icon} size={16} />
  <span class="sr-only">{$t("label.back")}</span>
</Button>
