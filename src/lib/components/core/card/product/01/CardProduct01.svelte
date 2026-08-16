<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { t } from "$lib/i18n";
  import ImgPlaceHolderGallery from "$lib/assets/placeholder-image.png";
  import ImgPlaceholderCompany from "$lib/assets/placeholder-company.png";
  import type { CardProductProps } from "../../types";
  import CardFavorite from "../../shared/CardFavorite.svelte";
  import CardCart from "../../shared/CardCart.svelte";
  import CardDescription from "../../shared/CardDescription.svelte";
  import CardTags from "../../shared/CardTags.svelte";
  import CardTitlePrice from "../../shared/CardTitlePrice.svelte";

  /**
   * Card component with a title and content.
   * @component
   */

  let {
    id,
    tags,
    logo,
    title,
    imageUrl,
    rating = 0,
    isFavorite = false,
    isCart = false,
    isLoading = false,
    content,
    price,
    buttonBuyText,
    buttonBuyClass,
    isDescriptionIcon,
    isDescriptionLabel,
    onClickBuy,
    onClickShop,
    onClickFavorite,
  }: CardProductProps = $props();
</script>

<article class="relative rounded-lg border">
  <aside class="relative w-full p-2">
    <div class="absolute top-2 left-2 z-2 gap-1 p-2">
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

    <div class="absolute top-2 right-2 z-2 flex items-center gap-1 p-2">
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
        class="rounded-lg h-36 md:h-44 w-full object-cover object-center"
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
      <CardTitlePrice {title} {isLoading} {price} />
    </div>

    {#if tags && tags.length > 0}
      <div class="w-full my-1">
        <CardTags {tags} />
      </div>
    {/if}

    <div>
      <CardDescription {content} {isDescriptionIcon} {isDescriptionLabel} />
    </div>

    {#if isLoading}
      <Skeleton class="h-9 w-full rounded-md" />
    {:else}
      <Button
        onclick={() => onClickBuy!(id)}
        class="w-full mb-2 bg-gradient text-white rounded-full {buttonBuyClass}"
      >
        {buttonBuyText || $t("label.buy")}
      </Button>
    {/if}
  </aside>
</article>
