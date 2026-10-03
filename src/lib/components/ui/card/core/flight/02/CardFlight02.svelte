<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import ImgPlaceHolderGallery from "$lib/assets/placeholder-image.png";
  import ImgPlaceholderCompany from "$lib/assets/placeholder-company.png";
  import type { CardFlightProps } from "../../types";
  import CardFavorite from "../../shared/CardFavorite.svelte";
  import {
    CardFlightTimeline,
    CardFlightBaggage,
    CardFlightPopover,
    CardFlightPrice,
  } from "../shared";

  /**
   * Card component with visual cover banner and minimalist flight ticket layout with Popover details.
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
    price,
    currency,
    baggage,
    pricePerPersonLabel,
    isFavorite = false,
    isLoading = false,
    content,
    onClickBuy,
    onClickFavorite,
    className = "",
  }: CardFlightProps = $props();
</script>

<article
  class="group relative rounded-xl border border-border/70 bg-card overflow-hidden shadow-xs transition-all duration-200 hover:shadow-sm hover:border-primary/30 flex flex-col justify-between {className}"
>
  <!-- Top Cover Media / Visual Header -->
  <aside class="relative w-full h-24 sm:h-28 overflow-hidden bg-muted">
    {#if isLoading}
      <Skeleton class="h-full w-full object-cover" />
    {:else}
      <img
        src={imageUrl || ImgPlaceHolderGallery}
        alt={title || "Flight"}
        class="size-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        onerror={(e) =>
          ((e.target as HTMLImageElement).src = ImgPlaceHolderGallery)}
      />
      <!-- Gradient overlay -->
      <div
        class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"
      ></div>
    {/if}

    <!-- Overlay Header: Logo + Title -->
    <div
      class="absolute top-2 left-2 right-2 z-2 flex items-center justify-between gap-1.5"
    >
      <div
        class="flex items-center gap-1 bg-black/50 backdrop-blur-md px-1.5 py-0.5 rounded-full border border-white/10 max-w-[70%]"
      >
        <div
          class="size-4 rounded-full overflow-hidden bg-white/10 border border-white/20 shrink-0 flex items-center justify-center"
        >
          <img
            src={logo || ImgPlaceholderCompany}
            alt={title || "Airline"}
            onerror={(e) =>
              ((e.target as HTMLImageElement).src = ImgPlaceholderCompany)}
            class="size-full object-cover"
          />
        </div>
        {#if title}
          <span
            class="text-[10px] font-medium text-white tracking-tight line-clamp-1"
          >
            {title}
          </span>
        {/if}
      </div>

      <!-- Actions: Popover & Favorite -->
      <div class="flex items-center gap-1 shrink-0">
        <CardFlightPopover
          {title}
          {content}
          {tags}
          variant="overlay-icon"
          align="end"
        />
        <CardFavorite
          {id}
          {isFavorite}
          {isLoading}
          onFavoriteClick={onClickFavorite}
        />
      </div>
    </div>
  </aside>

  <!-- Ticket Body: Minimalist Presentation -->
  <div class="p-3 sm:p-3.5 flex flex-col justify-between flex-1">
    <!-- Flight Timeline (Times & Minimalist Route Track) -->
    <CardFlightTimeline
      {departureTime}
      {arrivalTime}
      {origin}
      {destination}
      {duration}
      {isLoading}
    />

    <!-- Dashed Line Separator -->
    <div class="border-t border-dashed border-border/70 my-2 w-full"></div>

    <!-- Footer Row: Luggage & Description Popover + Price per Person -->
    <footer class="flex items-center justify-between gap-2">
      <div class="flex items-center gap-1.5">
        <CardFlightBaggage {baggage} {tags} {isLoading} />
        <CardFlightPopover
          {title}
          {content}
          {tags}
          variant="text"
          align="start"
        />
      </div>

      <CardFlightPrice
        {id}
        {price}
        {currency}
        {pricePerPersonLabel}
        {isLoading}
        {onClickBuy}
      />
    </footer>
  </div>
</article>