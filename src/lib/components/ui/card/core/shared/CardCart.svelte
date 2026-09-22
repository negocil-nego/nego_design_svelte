<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import IconRender from "$lib/components/ui/image/IconRender.svelte";

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
    class="w-8 h-8 rounded-full bg-gradient"
    onclick={() => onCartClick!(id)}
  >
    <IconRender icon="shopping-cart-remove-01" class="text-white" />
  </Button>
{:else}
  <Button
    class="w-8 h-8 rounded-full bg-[#808080]"
    onclick={() => onCartClick!(id)}
  >
    <IconRender icon="shopping-cart-add-01" class="text-white" />
  </Button>
{/if}
