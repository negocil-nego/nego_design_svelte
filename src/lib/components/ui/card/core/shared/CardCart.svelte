<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import {
    ShoppingCartAdd01Icon,
    ShoppingCartRemove01Icon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";

  type Props = {
    id: string | number;
    isCart: boolean;
    isLoading?: boolean;
    onCartClick?: (id: string | number) => void;
  };

  let { id, isCart, isLoading = false, onCartClick }: Props = $props();
</script>

{#if isLoading}
  <Skeleton class="w-8 h-8 rounded-full" />
{:else if isCart}
  <Button
    class="w-8 h-8 rounded-full bg-[#1d63be]"
    onclick={() => onCartClick!(id)}
  >
    <HugeiconsIcon icon={ShoppingCartRemove01Icon} />
  </Button>
{:else}
  <Button
    class="w-8 h-8 rounded-full bg-[#808080]"
    onclick={() => onCartClick!(id)}
  >
    <HugeiconsIcon icon={ShoppingCartAdd01Icon} />
  </Button>
{/if}
