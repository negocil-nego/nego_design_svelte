<script lang="ts" module>
  /**
   * Ações do produto: botões de compra, favorito e carrinho.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProductDetailActions id={data.id} {onBuy} {onFavorite} {onCart} buttonBuyText="Comprar" />
   * ```
   */
</script>

<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import {
    HeartAddIcon,
    HeartRemoveIcon,
    ShoppingCartAdd01Icon,
  } from "@hugeicons/core-free-icons";
  import { HugeiconsIcon } from "@hugeicons/svelte";

  let {
    id,
    buttonBuyText = "Comprar",
    isFavorite = $bindable(false),
    isCart = $bindable(false),
    isLoading = false,
    onBuy,
    onFavorite,
    onCart,
  }: {
    id: string | number;
    buttonBuyText?: string;
    isFavorite?: boolean;
    isCart?: boolean;
    isLoading?: boolean;
    onBuy?: (id: string | number) => void;
    onFavorite?: (id: string | number) => void;
    onCart?: (id: string | number) => void;
  } = $props();
</script>

{#if isLoading}
  <div class="flex items-center gap-2">
    <Skeleton class="h-9 min-w-40 flex-1 rounded-md" />
    <Skeleton class="size-9 rounded-full" />
    <Skeleton class="size-9 rounded-full" />
  </div>
{:else}
  <div class="flex flex-wrap items-center gap-2">
    <Button class="flex-1 min-w-40 bg-gradient" onclick={() => onBuy?.(id)}>
      {buttonBuyText}
    </Button>

    <Button
      size="icon"
      class="rounded-full"
      variant="outline"
      aria-label={isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      onclick={() => {
        isFavorite = !isFavorite;
        onFavorite?.(id);
      }}
    >
      <HugeiconsIcon icon={isFavorite ? HeartRemoveIcon : HeartAddIcon} />
    </Button>

    <Button
      size="icon"
      class="rounded-full"
      variant="outline"
      aria-label="Adicionar ao carrinho"
      onclick={() => {
        isCart = !isCart;
        onCart?.(id);
      }}
    >
      <HugeiconsIcon icon={ShoppingCartAdd01Icon} />
    </Button>
  </div>
{/if}
