<script lang="ts">
  import type { NavigationMenuItemGridProps } from "../../../data/types";
  import MenuListItem from "../MenuListItem.svelte";
  import NavDropdown from "./NavDropdown.svelte";

  let {
    label,
    grids: items,
    textClass,
    subTextClass,
    hoverClass,
  }: NavigationMenuItemGridProps = $props();

  const cols = (): string => {
    const len = items?.length ?? 0;
    if (len > 5) return "grid-cols-1 md:grid-cols-3";
    if (len % 3 == 0) return "grid-cols-1 md:grid-cols-3";
    if (len % 2 == 0) return "grid-cols-1 md:grid-cols-2";
    return "grid-cols-1";
  };

  const gridCols = $derived(cols());
</script>

<NavDropdown {label} {hoverClass}>
  {#if items}
    <ul
      class={`grid w-75 gap-2 p-2 sm:w-100 md:w-125 lg:min-w-150 max-h-75 overflow-y-auto ${gridCols}`}
    >
      {#each items as item, i (i)}
        <MenuListItem {...item} {textClass} {subTextClass} />
      {/each}
    </ul>
  {/if}
</NavDropdown>
