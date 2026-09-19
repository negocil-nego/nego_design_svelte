<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import Button, {
    type ButtonProps,
  } from "$lib/components/ui/button/button.svelte";
  import { t } from "$lib/i18n";
    
  let { ...restProps }: ButtonProps = $props();
</script>

<Button class="w-full flex items-center gap-2" {...restProps}>
  <ImageHugeicons icon="login-02" width={16} height={16} />
  {$t("label.send")}
</Button>
