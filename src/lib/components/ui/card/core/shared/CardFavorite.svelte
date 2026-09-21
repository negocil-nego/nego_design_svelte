<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  type Props = {
    id: string | number;
    isFavorite: boolean;
    isLoading?: boolean;
    onFavoriteClick?: (id: string | number) => void;
  };

  let { id, isFavorite, isLoading = false, onFavoriteClick }: Props = $props();
</script>

{#if isLoading}
  <Skeleton class="w-8 h-8 rounded-full" />
{:else if isFavorite}
  <Button
    class="w-8 h-8 rounded-full bg-[#ce2356]"
    onclick={() => onFavoriteClick!(id)}
  >
    <ImageHugeicons icon="heart-remove" class="dark:text-white" />
  </Button>
{:else}
  <Button
    class="w-8 h-8 rounded-full bg-[#808080]"
    onclick={() => onFavoriteClick!(id)}
  >
    <ImageHugeicons icon="heart-add" class="dark:text-white" />
  </Button>
{/if}
