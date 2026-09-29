<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
import type { HugeiconsIconName } from "$lib/components/ui/image/icons";
  import Button, {
    type ButtonProps,
  } from "$lib/components/ui/button/button.svelte";
    import { t } from "$lib/i18n";
    import type { Snippet } from "svelte";

  type IconDefault = "GOOGLE" | "FACEBOOK" | "LINKEDLN";

  type Props = {
    icon?: HugeiconsIconName | IconDefault | Snippet;
    label?: string;
  };

  let { icon, label, ...restProps }: Props & ButtonProps = $props();

  const defaultIconMap: Record<IconDefault, HugeiconsIconName> = {
    GOOGLE: "GoogleIcon",
    FACEBOOK: "Facebook01Icon",
    LINKEDLN: "Linkedin01Icon",
  };

  const defaultLabelMap: Record<IconDefault, string> = {
    GOOGLE: "Google",
    FACEBOOK: "Facebook",
    LINKEDLN: "Linkedin",
  };

  function isIconDefault(value: unknown): value is IconDefault {
    return typeof value === "string" && value in defaultLabelMap;
  }

  let resolvedIcon = $derived(
    isIconDefault(icon) ? defaultIconMap[icon] : icon,
  );

  let resolvedLabel = $derived(
    label ?? (isIconDefault(icon) ? defaultLabelMap[icon] : ""),
  );
</script>

<Button variant="outline" class="w-full flex items-center gap-2" {...restProps}>
  {#if resolvedIcon}
    {#if typeof resolvedIcon === "function"}
      {@render resolvedIcon()}
    {:else}
      <ImageHugeicons icon={resolvedIcon} class="size-4" />
    {/if}
  {/if}
  {$t("label.login.with", { name: resolvedLabel })}
</Button>
