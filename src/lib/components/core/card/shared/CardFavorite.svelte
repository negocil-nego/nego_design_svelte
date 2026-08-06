<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import { HeartAddIcon, HeartRemoveIcon } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";

  type Props = {
    isFavorite: boolean;
    onFavoriteClick?: () => void;
  };

  let { isFavorite, onFavoriteClick }: Props = $props();
</script>

{#if isFavorite}
  <Button
    class="w-8 h-8 rounded-full bg-[#ce2356]"
    onclick={() => onFavoriteClick!()}
  >
    <HugeiconsIcon icon={HeartRemoveIcon} />
  </Button>
{:else}
  <Button
    class="w-8 h-8 rounded-full bg-[#808080]"
    onclick={() => onFavoriteClick!()}
  >
    <HugeiconsIcon icon={HeartAddIcon} />
  </Button>
{/if}
