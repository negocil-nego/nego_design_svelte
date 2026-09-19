<script lang="ts">
  import { t } from "$lib/i18n";
  import PageStatus from "../PageStatus.svelte";
  import type { PageStatusProps } from "../types";

  let {
    onAction,
    actionHref,
    className = "",
    icon,
    titleColor = "text-red-500",
    bgColor = "bg-red-500/10",
    iconBg = "bg-red-500",
    iconColor = "text-white",
    buttonBg = "bg-primary",
    buttonTextColor = "text-primary-foreground",
    ...restProps
  }: PageStatusProps = $props();
</script>

<PageStatus
  title={$t("status.blocked.title")}
  subtitle={$t("status.blocked.subtitle")}
  description={$t("status.blocked.description")}
  buttonText={$t("status.blocked.button")}
  {onAction}
  {actionHref}
  {className}
  {icon}
  {titleColor}
  {bgColor}
  {iconBg}
  {iconColor}
  {buttonBg}
  {buttonTextColor}
  {...restProps}
/>
