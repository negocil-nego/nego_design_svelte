<script lang="ts">
  import IconRender from "$lib/components/ui/image/IconRender.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { cn } from "$lib/utils.js";

  let {
    icon,
    iconClass,
    isLoading,
  }: {
    icon: string;
    iconClass?: string;
    isLoading?: boolean;
  } = $props();
</script>

{#if isLoading}
  <Skeleton class="min-w-17.5 md:min-w-25 h-2.5 bg-gray-400" />
{:else}
  <IconRender {icon} class={cn("size-[30px]", iconClass)} />
{/if}
