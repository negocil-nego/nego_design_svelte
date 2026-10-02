<script lang="ts">
  import CardMedia from "$lib/components/ui/card/core/media/CardMedia.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import GridHeader from "../../shared/ui/GridHeader.svelte";
  import GridSlot from "../../shared/ui/GridSlot.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import type { GridMediaProps } from "../types";

  const {
    headerProps,
    gridClass,
    items,
    variant,
    isLoading = false,
    isDescriptionIcon,
    isDescriptionLabel,
    isVideoButtonMaximized = false,
    isImageButtonMaximized = false,
    onFavoriteClick,
    onButtonProfile,
    onButtonDetails,
  }: GridMediaProps = $props();

  const responsive = useDevice();
  const isEmpty = $derived(!isLoading && (!items || items.length === 0));
</script>

<GridHeader {...headerProps}>
  {#if isEmpty}
    <NotFoundEmpty
      title={$t("empty.media.title")}
      description={$t("empty.media.description")}
    />
  {:else}
    <GridSlot class={gridClass}>
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 3 : 6 }, ) as _, i (`loading-${i}`)}
          <CardMedia id={i} {variant} {isDescriptionIcon} {isDescriptionLabel} isLoading />
        {/each}
      {:else}
        {#each items as item, i (`media-${item.id ?? i}`)}
          <CardMedia
            {...item}
            {variant}
            {isDescriptionIcon}
            {isDescriptionLabel}
            {isVideoButtonMaximized}
            {isImageButtonMaximized}
            {onFavoriteClick}
            {onButtonProfile}
            {onButtonDetails}
          />
        {/each}
      {/if}
    </GridSlot>
  {/if}
</GridHeader>
