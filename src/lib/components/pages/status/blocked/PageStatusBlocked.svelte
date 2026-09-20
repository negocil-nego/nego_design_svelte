<script lang="ts">
  import { t } from "$lib/i18n";
  import PageStatus from "../PageStatus.svelte";
  import type { PageStatusProps } from "../types";
  import BlockedIcon from "$lib/assets/hand.png";

  let {
    onAction,
    actionHref,
    className = "",
    titleColor = "text-red-500",
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
  {titleColor}
  {buttonBg}
  {buttonTextColor}
  {...restProps}
>
  {#snippet imgSlot()}
    <img src={BlockedIcon} alt="" class="size-16 text-foreground sm:size-32" />
  {/snippet}
</PageStatus>
