<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
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
   * Card component with minimalist flight presentation, route, schedule and popover details.
   * @component
   */

  let {
    id,
    tags,
    logo,
    title,
    origin,
    destination,
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
  class="group relative rounded-xl border border-border/70 bg-card p-3 sm:p-3.5 shadow-xs transition-all duration-200 hover:shadow-sm hover:border-primary/30 flex flex-col justify-between {className}"
>
  <!-- Header: Airline Logo + Title + Description Popover + Favorite -->
  <aside class="flex items-center justify-between gap-2 mb-2">
    <div class="flex items-center gap-2 min-w-0">
      {#if isLoading}
        <Skeleton class="size-6 rounded-full bg-muted" />
      {:else}
        <div
          class="relative flex items-center justify-center size-6 rounded-full overflow-hidden bg-muted/40 border border-border/50 shrink-0"
        >
          <img
            src={logo || ImgPlaceholderCompany}
            alt={title || "Airline"}
            onerror={(e) =>
              ((e.target as HTMLImageElement).src = ImgPlaceholderCompany)}
            class="size-full object-cover object-center"
          />
        </div>
      {/if}

      <div class="min-w-0 flex-1">
        {#if isLoading}
          <Skeleton class="h-3.5 w-24 rounded" />
        {:else if title}
          <span
            class="font-semibold text-[11px] sm:text-xs text-foreground tracking-tight line-clamp-1"
          >
            {title}
          </span>
        {/if}
      </div>
    </div>

    <!-- Actions: Popover for Description & Favorite -->
    <div class="flex items-center gap-1 shrink-0">
      <CardFlightPopover {title} {content} {tags} variant="icon" align="end" />
      <CardFavorite
        {id}
        {isFavorite}
        {isLoading}
        onFavoriteClick={onClickFavorite}
      />
    </div>
  </aside>

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

  <!-- Footer Row: Luggage + Description on Left / Price per Person on Right -->
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
</article>
