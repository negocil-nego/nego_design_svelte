<script lang="ts">
  import { t } from "$lib/i18n";
  import PageStatus from "../PageStatus.svelte";
  import type { PageStatusProps } from "../types";
  import LoadIcon from "$lib/assets/load.png";

  let {
    onAction,
    actionHref,
    className = "",
    titleColor = "text-amber-500",
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
  {onAction}
  {actionHref}
  {className}
  {titleColor}
  {buttonBg}
  {buttonTextColor}
  {...restProps}
>
  {#snippet imgSlot()}
    <img src={LoadIcon} alt="" class="size-16 text-foreground sm:size-32" />
  {/snippet}
</PageStatus>
