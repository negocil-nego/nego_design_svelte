<script lang="ts">
  import Button from "$lib/components/ui/button/button.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { t } from "$lib/i18n";
  import ImgPlaceHolderGallery from "$lib/assets/placeholder-image.png";
  import ImgPlaceholderCompany from "$lib/assets/placeholder-company.png";
  import type { CardFlightProps } from "../../types";
  import CardFavorite from "../../shared/CardFavorite.svelte";
  import CardDescription from "../../shared/CardDescription.svelte";
  import CardTags from "../../shared/CardTags.svelte";
  import CardFlightRoute from "../../shared/CardFlightRoute.svelte";
  import CardFlightSchedule from "../../shared/CardFlightSchedule.svelte";

  /**
   * Card component with a travel route, schedule and booking button.
   * @component
   */

  let {
    id,
    tags,
    logo,
    title,
    origin,
    destination,
    imageUrl,
    departureTime,
    arrivalTime,
    duration,
    type,
    country,
    price,
    currency,
    isFavorite = false,
    isLoading = false,
    content,
    buttonBuyText,
    buttonBuyClass,
    isDescriptionIcon,
    isDescriptionLabel,
    onClickBuy,
    onClickFavorite,
  }: CardFlightProps = $props();
</script>

<article class="relative rounded-lg border flex flex-col h-full">
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
    </div>

    {#if isLoading}
      <Skeleton
        class="rounded-lg h-30 w-full object-cover object-center bg-black/15"
      />
    {:else if imageUrl}
      <img
        src={imageUrl}
        alt={imageUrl}
        class="rounded-tr-lg rounded-tl-lg h-36 md:h-44 w-full object-cover object-center"
        onerror={(e) =>
          ((e.target as HTMLImageElement).src = ImgPlaceHolderGallery)}
      />
    {:else}
      <img
        src={ImgPlaceHolderGallery}
        alt="Not Found"
        class="rounded-lg h-36 md:h-44 w-full object-cover object-center"
      />
    {/if}
    <div class="absolute inset-0 bg-black/5 rounded-sm h-full w-full"></div>
  </aside>

  <aside
    class="inset-x-0 flex flex-col items-center justify-center gap-2 m-auto max-w-11/12 p-1 rounded-md flex-1"
  >
    <div class="w-full">
      <CardFlightRoute {origin} {destination} {type} {country} {isLoading} />
    </div>

    {#if title}
      {#if isLoading}
        <Skeleton class="h-4 w-30 rounded-lg" />
      {:else}
        <div class="font-semibold line-clamp-1 w-full text-center">
          {title}
        </div>
      {/if}
    {/if}

    <div class="w-full">
      <CardFlightSchedule
        {departureTime}
        {arrivalTime}
        {duration}
        {isLoading}
      />
    </div>

    <div class="w-full">
      <CardDescription {content} {isDescriptionIcon} {isDescriptionLabel} />
    </div>

    {#if tags && tags.length > 0}
      <div class="w-full mb-2">
        <CardTags {tags} />
      </div>
    {/if}

    <div class="w-full flex items-center justify-between gap-2">
      {#if price}
        {#if isLoading}
          <Skeleton class="h-5 w-25 rounded-lg" />
        {:else}
          <div class="flex items-baseline gap-1">
            <span class="text-lg font-semibold text-primary">{price}</span>
            {#if currency}
              <span class="text-sm text-gray-600 dark:text-gray-300">
                {currency}
              </span>
            {/if}
          </div>
        {/if}
      {/if}

      {#if isLoading}
        <Skeleton class="h-9 w-full rounded-md" />
      {:else}
        <Button
          onclick={() => onClickBuy!(id)}
          class="flex-1 bg-gradient text-white rounded-full {buttonBuyClass}"
        >
          {buttonBuyText || $t("label.book")}
        </Button>
      {/if}
    </div>
  </aside>
</article>