<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
import type { HugeiconsIconName } from "$lib/components/ui/image/hugeicons";
  import { Button } from "$lib/components/ui/button/index.js";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  
  type CardButtonProps = {
    id: string | number;
    icon?: HugeiconsIconName;
    isFlex?: boolean;
    className?: string;
    text: string;
    isLoading?: boolean;
    onClick: (id: string | number) => void;
  };

  let {
    id,
    icon,
    isFlex,
    className,
    text,
    isLoading,
    onClick,
  }: CardButtonProps = $props();
</script>

{#if isLoading}
  <Skeleton
    class="w-full h-7.5 rounded-lg bg-gray-500/80 dark:bg-gray-500/30"
  />
{:else}
  <Button class="bg-gradient flex-1 {className}" onclick={() => onClick(id)}>
    {#if icon}
        <ImageHugeicons icon={icon} />
      {/if}
    <span>{text}</span>
  </Button>
{/if}
