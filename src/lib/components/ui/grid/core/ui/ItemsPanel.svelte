<script lang="ts">
  import type { GridProps } from "../data/types";
  import ItemsPanelCarousel from "./ItemsPanelCarousel.svelte";
  import ItemsPanelGrid from "./ItemsPanelGrid.svelte";

  let {
    style = "grid",
    isScrollbar = false,
    onClick,
    isShowDescription = true,
    ...restProps
  }: GridProps & {
    style?: "inline" | "grid";
    isScrollbar?: boolean;
  } = $props();

  let selectedKey = $state<string | number | undefined>("");

  function selectItem(id: string | number) {
    selectedKey = `${id}`;
    onClick?.(id);
  }
</script>

{#if style == "inline"}
  <ItemsPanelCarousel
    {...restProps}
    {selectedKey}
    onClick={selectItem}
    {isScrollbar}
    {isShowDescription}
  />
{:else}
  <ItemsPanelGrid
    {...restProps}
    {selectedKey}
    {isShowDescription}
    onClick={selectItem}
  />
{/if}
