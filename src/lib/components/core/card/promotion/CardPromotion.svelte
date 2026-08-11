<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { t } from "$lib/i18n";
  import CardCart from "../shared/CardCart.svelte";
  import CardDescription from "../shared/CardDescription.svelte";
  import CardFavorite from "../shared/CardFavorite.svelte";
  import CardStartPrice from "../shared/CardStartPrice.svelte";
  import CardTags from "../shared/CardTags.svelte";
  import ImgPlaceHolderGallery from "$lib/assets/placeholder-image.png";
  import ImgPlaceholderCompany from "$lib/assets/placeholder-company.png";

  /**
   * Card component with a title and content.
   * @component
   */
  import type { CardPromotionProps } from "../types";

  let {
    id,
    tags,
    logo,
    title,
    imageUrl,
    isFavorite = false,
    isCart = false,
    isLoading = false,
    newPrice,
    oldPrice,
    content,
    buttonBuyText,
    buttonBuyClass,
    isDescriptionIcon,
    isDescriptionLabel,
    onClickBuy,
    onClickShop,
    onClickFavorite,
  }: CardPromotionProps = $props();
</script>

<article class="relative rounded-lg border">
  <aside class="relative w-full">
    <div class="absolute top-1 left-1 z-2 gap-1 p-2">
      {#if isLoading}
        <Skeleton class="h-5 w-20 rounded-full bg-black/20" />
      {:else if logo}
        <img
          src={logo}
          width={30}
          height={30}
          alt={title}
          onerror={(e) =>
            ((e.target as HTMLImageElement).src = ImgPlaceholderCompany)}
          class="rounded-lg"
        />
      {:else}
        <img
          src={ImgPlaceholderCompany}
          width={30}
          height={30}
          alt={title}
          class="rounded-lg"
        />
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
        class="rounded-lg h-30 w-full object-cover object-center bg-black/15"
      />
    {:else if imageUrl}
      <img
        src={imageUrl}
        alt={imageUrl}
        class="rounded-tr-lg rounded-tl-lg h-36 w-full object-cover object-center"
        onerror={(e) =>
          ((e.target as HTMLImageElement).src = ImgPlaceHolderGallery)}
      />
    {/if}
    <div class="absolute inset-0 bg-black/5 rounded-sm h-full w-full"></div>
  </aside>

  <aside
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

    <div>
      <CardDescription {content} {isDescriptionIcon} {isDescriptionLabel} />
    </div>

    {#if tags && tags.length > 0}
      <div class="w-full mb-2">
        <CardTags {tags} />
      </div>
    {/if}

    <div class="flex justify-start gap-2 w-full">
      {#if isLoading}
        <Skeleton class="h-5 bg-black/10 w-25 my-2 mr-2" />
      {:else if newPrice || oldPrice}
        <div>
          <CardStartPrice {newPrice} {oldPrice} />
        </div>
      {/if}
    </div>

    {#if isLoading}
      <Skeleton class="h-9 w-full rounded-md" />
    {:else}
      <Button
        onclick={() => onClickBuy!(id)}
        class="w-full bottom-0 bg-gradient {buttonBuyClass}"
      >
        {buttonBuyText || $t("label.buy")}
      </Button>
    {/if}
  </aside>
</article>
