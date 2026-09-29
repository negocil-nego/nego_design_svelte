<script lang="ts">
  import { icons } from "$lib/components/ui/image/icons";
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import type { HugeiconsIconName } from "$lib/components/ui/image/icons";
  import { cn } from "$lib/utils.js";

  let {
    icon,
    class: className = "",
  }: {
    icon: string | HugeiconsIconName;
    class?: string;
  } = $props();

  const isHugeiconsIcon = $derived(icon in icons);
</script>

{#if isHugeiconsIcon}
  <ImageHugeicons icon={icon as HugeiconsIconName} class={className} />
{:else}
  <i class={cn("hgi", icon, className)}></i>
{/if}
