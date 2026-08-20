<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import type { NavigationMenuItemGridProps } from "../../../data/types";
  import DropdownMenuListItem from "./DropdownMenuListItem.svelte";

  let { label, grids: items }: NavigationMenuItemGridProps = $props();

  const cols = (): string => {
    const len = items?.length ?? 0;
    if (len > 10) return "md:grid-cols-3 lg:grid-cols-4";
    if (len > 5) return "md:grid-cols-3";
    if (len % 3 == 0) return "md:grid-cols-3";
    if (len % 2 == 0) return "md:grid-cols-2";
    return "grid-cols-1";
  };
</script>

<DropdownMenu.Sub>
  <DropdownMenu.SubTrigger>{label}</DropdownMenu.SubTrigger>
  {#if items}
    {@const gridCols = cols()}
    <DropdownMenu.SubContent>
      <ul class={`grid w-75 gap-2 p-2 sm:w-100 md:w-125 ${gridCols}`}>
        {#each items as item, i (i)}
          <DropdownMenuListItem {...item} />
        {/each}
      </ul>
    </DropdownMenu.SubContent>
  {/if}
</DropdownMenu.Sub>
