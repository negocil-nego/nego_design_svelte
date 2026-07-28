<script lang="ts">
  import Button, {
    type ButtonProps,
  } from "$lib/components/ui/button/button.svelte";
  import { t } from "$lib/i18n";
  import { Login02Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";

  let { ...restProps }: ButtonProps = $props();
</script>

<Button class="w-full flex items-center gap-2" {...restProps}>
  <HugeiconsIcon icon={Login02Icon} size={16} />
  {$t("button.send")}
</Button>
