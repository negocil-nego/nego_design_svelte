<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  type Props = {
    title?: string;
    isLoading?: boolean;
    class?: string;
  };

  let { title, isLoading = false, class: className }: Props = $props();
</script>

{#if title}
  <div class="font-bold line-clamp-1 {className}">{title}</div>
{:else if isLoading}
  <Skeleton class="w-40 h-5 rounded-lg bg-gray-400 mb-0.5 {className}" />
{/if}
