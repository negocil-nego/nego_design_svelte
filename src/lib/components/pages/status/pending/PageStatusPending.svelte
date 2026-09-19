<script lang="ts">
  import { t } from "$lib/i18n";
  import PageStatus from "../PageStatus.svelte";
  import type { PageStatusProps } from "../types";
  import LottiePending from "$lib/assets/lottie/pending.lottie";

  let {
    onAction,
    actionHref,
    className = "",
    icon,
    titleColor = "text-amber-500",
    bgColor = "bg-amber-500/10",
    iconBg = "bg-amber-500",
    iconColor = "text-white",
    buttonBg = "bg-primary",
    buttonTextColor = "text-primary-foreground",
    ...restProps
  }: PageStatusProps = $props();
</script>

<PageStatus
  title={$t("status.pending.title")}
  subtitle={$t("status.pending.subtitle")}
  description={$t("status.pending.description")}
  buttonText={$t("status.pending.button")}
  imageUrl={LottiePending}
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
