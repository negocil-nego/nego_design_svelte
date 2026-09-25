<script lang="ts">
  import IconRender from "$lib/components/ui/image/IconRender.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  let {
    icon,
    iconClass,
    isLoading,
    width = 30,
    height = 30,
  }: {
    icon: string;
    iconClass?: string;
    isLoading?: boolean;
    width?: number;
    height?: number;
  } = $props();
</script>

{#if isLoading}
  <Skeleton class="min-w-17.5 md:min-w-25 h-2.5 bg-gray-400" />
{:else}
  <IconRender {icon} {width} {height} class={iconClass} />
{/if}
