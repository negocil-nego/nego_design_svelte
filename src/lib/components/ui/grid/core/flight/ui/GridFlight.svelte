<script lang="ts">
  import CardFlight from "$lib/components/ui/card/core/flight/CardFlight.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import GridHeader from "../../shared/ui/GridHeader.svelte";
  import GridSlot from "../../shared/ui/GridSlot.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import type { GridFlightProps } from "../types";

  const {
    headerProps,
    gridClass,
    items,
    variant,
    isLoading = false,
    isDescriptionIcon,
    isDescriptionLabel,
    onClickBuy,
    onClickFavorite,
  }: GridFlightProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<GridHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.flights.title")}
      description={$t("empty.flights.description")}
    />
  {:else}
    <GridSlot class={gridClass}>
      {#if isLoading}
        {#each Array.from({ length: responsive.isMobile ? 3 : 6 }, ) as _, i (`loading-${i}`)}
          <CardFlight
            id={i}
            {variant}
            {isLoading}
            {isDescriptionIcon}
            {isDescriptionLabel}
          />
        {/each}
      {:else}
        {#each items as item, i (`flight-${item.id ?? i}`)}
          <CardFlight
            {...item}
            {variant}
            {isDescriptionIcon}
            {isDescriptionLabel}
            onClickBuy={item.onClickBuy ?? onClickBuy}
            onClickFavorite={item.onClickFavorite ?? onClickFavorite}
          />
        {/each}
      {/if}
    </GridSlot>
  {/if}
</GridHeader>