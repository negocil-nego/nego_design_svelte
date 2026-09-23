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
  <IconRender icon="login-02" width={16} height={16} class="text-white" />
  {$t("label.login")}
</Button>
