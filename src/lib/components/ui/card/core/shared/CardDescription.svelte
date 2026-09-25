<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import TruncatableText from "./TruncatableText.svelte";
  import { t } from "$lib/i18n";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  type CardDescriptionProps = {
    lines?: number;
    content?: string;
    isLoading?: boolean;
    isDescriptionIcon?: boolean;
    isDescriptionLabel?: boolean;
  };

  let {
    lines = 2,
    content,
    isLoading = false,
    isDescriptionIcon = false,
    isDescriptionLabel = true,
  }: CardDescriptionProps = $props();
</script>

{#if isLoading}
  <Skeleton class="w-full h-full bg-gray-500/89" />
{:else if content}
  {#if isDescriptionLabel}
    <div class="mb-1 text-[14px] md:text-[15px] flex items-center gap-1">
      {#if isDescriptionIcon}
        <ImageHugeicons icon="message-01" class="h-4 w-4" />
      {/if}
      <div>{$t("label.description")}</div>
    </div>
  {/if}
  <TruncatableText
    text={content}
    {lines}
    class="text-justify text-[13px] md:text-[14px] text-gray-800  dark:text-gray-50  my-2 h-[65px] mb-1"
  />
{/if}
