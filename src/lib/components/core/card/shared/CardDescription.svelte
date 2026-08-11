<script lang="ts">
  import { Message01Icon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import TruncatableText from "./TruncatableText.svelte";
  import { t } from "$lib/i18n";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  type CardDescriptionProps = {
    content?: string;
    isLoading?: boolean;
    isDescriptionIcon?: boolean;
    isDescriptionLabel?: boolean;
  };

  let {
    content,
    isLoading = false,
    isDescriptionIcon = true,
    isDescriptionLabel = true,
  }: CardDescriptionProps = $props();
</script>

{#if isLoading}
  <Skeleton class="w-full h-full bg-gray-500/89" />
{:else if content}
  {#if isDescriptionLabel}
    <div class="mb-1 text-[14px] md:text-[15px] flex items-center gap-1">
      {#if isDescriptionIcon}
        <HugeiconsIcon icon={Message01Icon} class="h-4 w-4" />
      {/if}11
      <div>{$t("label.description")}</div>
    </div>
  {/if}
  <TruncatableText
    text={content}
    class="text-justify text-[13px] md:text-[14px] text-gray-800  dark:text-gray-50 mt-3 my-4"
  />
{/if}
