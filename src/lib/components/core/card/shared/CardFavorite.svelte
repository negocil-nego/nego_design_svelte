<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { HeartAddIcon, HeartRemoveIcon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";

  type Props = {
    id: string | number;
    isFavorite: boolean;
    onFavoriteClick?: (id: string | number) => void;
  };

  let { id, isFavorite, onFavoriteClick }: Props = $props();
</script>

{#if isFavorite}
  <Button
    class="w-8 h-8 rounded-full bg-[#ce2356]"
    onclick={() => onFavoriteClick!(id)}
  >
    <HugeiconsIcon icon={HeartRemoveIcon} />
  </Button>
{:else}
  <Button
    class="w-8 h-8 rounded-full bg-[#808080]"
    onclick={() => onFavoriteClick!(id)}
  >
    <HugeiconsIcon icon={HeartAddIcon} />
  </Button>
{/if}
