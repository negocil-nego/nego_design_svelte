<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/svelte";

  type CardButtonProps = {
    id: string | number;
    icon: IconSvgElement;
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
  <Skeleton class="w-full h-7.5 rounded-lg bg-gray-500 dark:bg-gray-500/30" />
{:else}
  <Button
    class="{isFlex ? 'flex-1' : ''} {className}"
    onclick={() => onClick(id)}
  >
    <HugeiconsIcon {icon} />
    <span>{text}</span>
  </Button>
{/if}
