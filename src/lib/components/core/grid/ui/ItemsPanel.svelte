<script lang="ts">
  import type { GridProps } from "../data/types";
  import PanelCarousel from "./ItemsPanelCarousel.svelte";
  import PanelGrid from "./ItemsPanelGrid.svelte";

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
  <PanelCarousel {...restProps} {selectedKey} onClick={selectItem} />
{:else}
  <PanelGrid {...restProps} {selectedKey} onClick={selectItem} />
{/if}
