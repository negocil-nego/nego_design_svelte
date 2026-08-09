<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { t } from "$lib/i18n";
  import CardCart from "../shared/CardCart.svelte";
  import CardFavorite from "../shared/CardFavorite.svelte";
  /**
   * Card component with a title and content.
   * @component
   */
  import type { CardPromotionProps } from "../types";

  let {
    id,
    logo,
    imageUrl,
    title,
    isFavorite = false,
    isCart = false,
    isLoading = false,
    newPrice,
    oldPrice,
    buttonBuyText,
    onClickBuy,
    onClickShop,
    onClickFavorite,
  }: CardPromotionProps = $props();
</script>

<article class="relative rounded-lg border">
  <div class="relative w-full p-2">
    <div class="absolute top-1 left-1 z-2 gap-1 p-2">
      {#if isLoading}
        <Skeleton class="h-5 w-20 rounded-full bg-black/20" />
      {:else if logo}
        <img src={logo} width={30} height={30} alt={title} class="rounded-lg" />
      {/if}
    </div>

    <div class="absolute top-1 right-1 z-2 flex items-center gap-1 p-2">
      <CardFavorite
        {id}
        {isFavorite}
        {isLoading}
        onFavoriteClick={onClickFavorite}
      />
      <CardCart {id} {isCart} {isLoading} onCartClick={onClickShop} />
    </div>

    {#if isLoading}
      <Skeleton
        class="rounded-lg md:h-25 md:w-25 lg:h-45 lg:w-45 object-cover object-center bg-black/15"
      />
    {:else if imageUrl}
      <img
        src={imageUrl}
        alt={imageUrl}
        class="rounded-lg md:h-25 md:w-25 lg:h-45 lg:w-45 object-cover object-center"
      />
    {/if}
    <div class="absolute inset-0 bg-black/5 rounded-sm h-full w-full"></div>

    <div class="absolute bottom-2 right-3 z-2 flex items-center gap-2 mb-1">
      {#if isLoading}
        <Skeleton class="h-5 bg-black/10 w-25 my-2 mr-2" />
      {:else if newPrice || oldPrice}
        {#if oldPrice}
          <div
            class="text-[10px] md:text-sm line-through bg-red-[180px]0 text-white p-1 rounded-sm"
          >
            {oldPrice}
          </div>
        {/if}
        {#if newPrice}
          <div class="font-bold text-lg md:text-xl lg:text-2xl relative">
            {newPrice}
          </div>
        {/if}
      {/if}
    </div>
  </div>
  <div
    class="bottom-1 inset-x-0 flex flex-col items-center justify-center gap-0.5 m-auto max-w-11/12 p-1 rounded-md"
  >
    <div class="flex justify-between w-full items-center mb-1">
      {#if title}
        {#if isLoading}
          <Skeleton class="h-4 w-30 rounded-lg" />
        {:else}
          <div class="font-semibold line-clamp-1 flex-nowrap">
            {title}
          </div>
        {/if}
      {/if}
    </div>
    {#if isLoading}
      <Skeleton class="h-9 w-full rounded-md" />
    {:else}
      <Button onclick={() => onClickBuy!(id)} class="w-full">
        {buttonBuyText || $t("label.buy")}
      </Button>
    {/if}
  </div>
</article>
