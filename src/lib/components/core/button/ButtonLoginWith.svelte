<script lang="ts">
  import Button, {
    type ButtonProps,
  } from "$lib/components/ui/button/button.svelte";
  import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/svelte";
  import { t } from "$lib/i18n";
  import {
    GoogleIcon,
    Facebook01Icon as Facebook,
    Linkedin01Icon as Linkedin,
  } from "@hugeicons/core-free-icons";
  import type { Snippet } from "svelte";

  type IconDefault = "GOOGLE" | "FACEBOOK" | "LINKEDLN";

  type Props = {
    icon?: IconSvgElement | IconDefault | Snippet;
    label?: string;
  };

  let { icon, label, ...restProps }: Props & ButtonProps = $props();

  const defaultIconMap: Record<IconDefault, IconSvgElement> = {
    GOOGLE: GoogleIcon,
    FACEBOOK: Facebook,
    LINKEDLN: Linkedin,
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
      <HugeiconsIcon icon={resolvedIcon} size={16} />
    {/if}
  {/if}
  {$t("button.login.with", { name: resolvedLabel })}
</Button>
