<script lang="ts">
  import Button, {
    type ButtonProps,
  } from "$lib/components/ui/button/button.svelte";
  import { t } from "$lib/i18n";
  import IconRender from "../image/IconRender.svelte";

  let { isLoading, ...restProps }: ButtonProps = $props();
</script>

<Button
  class="w-full flex items-center gap-2"
  {...restProps}
  disabled={isLoading}
>
  <IconRender icon="Login02Icon" class="size-4 text-white" />
  {$t("label.login")}
</Button>
