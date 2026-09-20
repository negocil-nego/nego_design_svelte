<script lang="ts">
  import { t } from "$lib/i18n";
  import PageStatus from "../PageStatus.svelte";
  import type { PageStatusProps } from "../types";
  import InsuranceIcon from "$lib/assets/insurance.png";

  let {
    onAction,
    actionHref,
    className = "",
    titleColor = "text-blue-500",
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
  {titleColor}
  {buttonBg}
  {buttonTextColor}
  {...restProps}
>
  {#snippet imgSlot()}
    <img
      src={InsuranceIcon}
      alt=""
      class="size-16 text-foreground sm:size-32"
    />
  {/snippet}
</PageStatus>
