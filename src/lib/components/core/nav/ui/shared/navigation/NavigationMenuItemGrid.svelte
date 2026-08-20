<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import type { NavigationMenuItemGridProps } from "../../../data/types";
  import MenuListItem from "../MenuListItem.svelte";

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

<NavigationMenu.Item>
  <NavigationMenu.Trigger>{label}</NavigationMenu.Trigger>
  {#if items}
    {@const gridCols = cols()}
    <NavigationMenu.Content>
      <ul
        class={`grid w-75 gap-2 p-2 sm:w-100 md:w-125 ${gridCols} lg:min-w-150`}
      >
        {#each items as item, i (i)}
          <MenuListItem {...item} />
        {/each}
      </ul>
    </NavigationMenu.Content>
  {/if}
</NavigationMenu.Item>
