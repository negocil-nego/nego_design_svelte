<script lang="ts">
  import CardHighlight from "$lib/components/ui/card/core/highlight/CardHighlight.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import GridHeader from "../../shared/ui/GridHeader.svelte";
  import GridSlot from "../../shared/ui/GridSlot.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import type { GridHighlightsProps } from "../types";

  const {
    headerProps,
    gridClass,
    items,
    isLoading = false,
    varient = 1,
    isDescriptionIcon,
    isDescriptionLabel,
    onClickBtn,
    onClickFavorite,
  }: GridHighlightsProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<GridHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.highlights.title")}
      description={$t("empty.highlights.description")}
    />
  {:else}
    <GridSlot class={gridClass}>
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 3 : 6 }, ) as _, i (`loading-${i}`)}
          <CardHighlight id={i} {isLoading} {varient} />
        {/each}
      {:else}
        {#each items as item, i (`highlight-${item.id ?? i}`)}
          <CardHighlight
            {...item}
            {varient}
            {isDescriptionIcon}
            {isDescriptionLabel}
            onClickBtn={(id: string | number) => {
              item.onClickBtn?.(id);
              onClickBtn?.(id);
            }}
            onClickFavorite={(id: string | number) => {
              item.onClickFavorite?.(id);
              onClickFavorite?.(id);
            }}
          />
        {/each}
      {/if}
    </GridSlot>
  {/if}
</GridHeader>
