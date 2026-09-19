<script lang="ts">
  import { t } from "$lib/i18n";
  import PageStatus from "../PageStatus.svelte";
  import type { PageStatusProps } from "../types";

  let {
    onAction,
    actionHref,
    className = "",
    icon,
    titleColor = "text-blue-500",
    bgColor = "bg-blue-500/10",
    iconBg = "bg-blue-500",
    iconColor = "text-white",
    buttonBg = "bg-primary",
    buttonTextColor = "text-primary-foreground",
    ...restProps
  }: PageStatusProps = $props();
</script>

<PageStatus
  title={$t("status.recovering.title")}
  subtitle={$t("status.recovering.subtitle")}
  description={$t("status.recovering.description")}
  buttonText={$t("status.recovering.button")}
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
