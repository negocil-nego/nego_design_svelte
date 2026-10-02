<script lang="ts">
  import GridHeader from "../shared/ui/GridHeader.svelte";
  import GridSlot from "../shared/ui/GridSlot.svelte";
  import GridCard from "../shared/ui/shared/GridCard.svelte";
  import NotFoundEmpty from "$lib/components/ui/panel/NotFoundEmpty.svelte";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import { t } from "$lib/i18n";
  import { cn } from "$lib/utils.js";
  import type { GridItemsPanelProps } from "./types";

  let {
    headerProps,
    gridClass,
    className,
    items = [],
    variant = 1,
    isLoading = false,
    isShowDescription = true,
    itemClassName,
    width,
    height,
    itemWidth,
    itemHeight,
    onClick,
  }: GridItemsPanelProps = $props();

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
    <GridSlot class={cn(gridClass, className)}>
      {#if isLoading}
        {#each Array.from( { length: responsive.isMobile ? 3 : 6 }, ) as _, i (`loading-${i}`)}
          <GridCard
            id={i}
            title={`${i}`}
            description=""
            icon=""
            {variant}
            {isLoading}
            {isShowDescription}
            {itemClassName}
            {width}
            {height}
            {itemWidth}
            {itemHeight}
          />
        {/each}
      {:else}
        {#each items as item, i (`item-${item.id ?? i}`)}
          <GridCard
            {...item}
            {variant}
            {onClick}
            {itemClassName}
            width={item.width ?? width}
            height={item.height ?? height}
            itemWidth={item.itemWidth ?? itemWidth}
            itemHeight={item.itemHeight ?? itemHeight}
            isShowDescription={item.isShowDescription ?? isShowDescription}
          />
        {/each}
      {/if}
    </GridSlot>
  {/if}
</GridHeader>
