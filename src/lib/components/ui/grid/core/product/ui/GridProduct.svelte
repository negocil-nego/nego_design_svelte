<script lang="ts">
  import CardProduct from "$lib/components/ui/card/core/product/CardProduct.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import GridHeader from "../../shared/ui/GridHeader.svelte";
  import GridSlot from "../../shared/ui/GridSlot.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import type { GridProductProps } from "../types";

  const {
    headerProps,
    gridClass,
    items,
    variant,
    isLoading = false,
    isDescriptionIcon,
    isDescriptionLabel,
    onClickBuy,
    onClickShop,
    onClickFavorite,
  }: GridProductProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<GridHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.products.title")}
      description={$t("empty.products.description")}
    />
  {:else}
    <GridSlot class={gridClass}>
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 3 : 6 }, ) as _, i (`loading-${i}`)}
          <CardProduct id={i} {variant} isLoading />
        {/each}
      {:else}
        {#each items as item, i (`product-${item.id ?? i}`)}
          <CardProduct
            {...item}
            {variant}
            {isDescriptionIcon}
            {isDescriptionLabel}
            {onClickBuy}
            {onClickShop}
            {onClickFavorite}
          />
        {/each}
      {/if}
    </GridSlot>
  {/if}
</GridHeader>
