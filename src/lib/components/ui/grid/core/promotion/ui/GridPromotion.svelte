<script lang="ts">
  import CardPromotion from "$lib/components/ui/card/core/promotion/CardPromotion.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import GridHeader from "../../shared/ui/GridHeader.svelte";
  import GridSlot from "../../shared/ui/GridSlot.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import type { GridPromotionProps } from "../types";

  const {
    headerProps,
    gridClass,
    items,
    isLoading = false,
    isDescriptionIcon,
    isDescriptionLabel,
    onClickBuy,
    onClickShop,
    onClickFavorite,
  }: GridPromotionProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<GridHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.promotions.title")}
      description={$t("empty.promotions.description")}
    />
  {:else}
    <GridSlot class={gridClass}>
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 3 : 6 }, ) as _, i (`loading-${i}`)}
          <CardPromotion
            id={i}
            {isLoading}
            {isDescriptionIcon}
            {isDescriptionLabel}
          />
        {/each}
      {:else}
        {#each items as item, i (`promotion-${item.id ?? i}`)}
          <CardPromotion
            {...item}
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
