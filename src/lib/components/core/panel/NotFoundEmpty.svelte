<script lang="ts">
  import * as Empty from "$lib/components/ui/empty/index.js";
  import { t } from "$lib/i18n";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { Search01Icon } from "@hugeicons/core-free-icons";
  import type { Snippet } from "svelte";
  import type { IconSvgElement } from "@hugeicons/svelte";

  type Props = {
    title?: string;
    description?: string;
    icon?: IconSvgElement;
    className?: string;
    actionHref?: string;
    actionLabel?: string;
    onAction?: () => void;
    showAction?: boolean;
    children?: Snippet;
  };

  let {
    title,
    description,
    icon = Search01Icon,
    className = "",
    actionHref = "#/",
    actionLabel,
    onAction,
    showAction = false,
    children,
  }: Props = $props();

  const resolvedTitle = $derived(title ?? $t("empty.title"));
  const resolvedDescription = $derived(description ?? $t("empty.description"));
</script>

<Empty.Root class="w-full py-8 {className}">
  <Empty.Header>
    {#if icon}
      <Empty.Media variant="icon">
        <HugeiconsIcon {icon} class="size-6 text-muted-foreground" />
      </Empty.Media>
    {/if}
    <Empty.Title class="text-base font-semibold">
      {resolvedTitle}
    </Empty.Title>
    <Empty.Description class="text-sm text-muted-foreground max-w-sm">
      {resolvedDescription}
    </Empty.Description>
  </Empty.Header>

  {#if children}
    <Empty.Content>
      {@render children()}
    </Empty.Content>
  {:else if showAction || onAction}
    <Empty.Content>
      {#if onAction}
        <button
          type="button"
          onclick={onAction}
          class="text-xs font-medium text-primary hover:underline"
        >
          {actionLabel ?? $t("empty.contact_support")}
        </button>
      {:else}
        <Empty.Description class="text-xs">
          {$t("empty.support")}
          <a href={actionHref} class="text-primary hover:underline font-medium ml-1">
            {actionLabel ?? $t("empty.contact_support")}
          </a>
        </Empty.Description>
      {/if}
    </Empty.Content>
  {/if}
</Empty.Root>
