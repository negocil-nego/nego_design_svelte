<script lang="ts">
  import type { GridProps } from "../data/types";
  import ItemsPanelCarousel from "./ItemsPanelCarousel.svelte";
  import ItemsPanelGrid from "./ItemsPanelGrid.svelte";

  let {
    style = "grid",
    onClick,
    ...restProps
  }: GridProps & {
    style?: "inline" | "grid";
  } = $props();

  let selectedKey = $state<string | number | undefined>("");

  function selectItem(id: string | number) {
    selectedKey = `${id}`;
    onClick?.(id);
  }
</script>

{#if style == "inline"}
  <ItemsPanelCarousel {...restProps} {selectedKey} onClick={selectItem} />
{:else}
  <ItemsPanelGrid {...restProps} {selectedKey} onClick={selectItem} />
{/if}
