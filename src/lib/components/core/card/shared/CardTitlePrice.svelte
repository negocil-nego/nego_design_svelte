<script>
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  let { title, isLoading, price } = $props();
</script>

<div class="flex justify-between w-full items-center">
  {#if title}
    {#if isLoading}
      <Skeleton class="h-4 w-30 rounded-lg" />
    {:else}
      <div class="font-semibold line-clamp-1 flex-nowrap">
        {title}
      </div>
    {/if}
  {/if}
  <div class="flex justify-start gap-2">
    {#if isLoading}
      <Skeleton class="h-5 bg-black/10 w-25 my-2 mr-2" />
    {:else if price}
      <div class="text-lg font-semibold text-primary">{price}</div>
    {/if}
  </div>
</div>
