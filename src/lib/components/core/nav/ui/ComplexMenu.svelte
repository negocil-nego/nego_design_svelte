<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import type { ComplexMenuProps } from "../data/types";
  import {
    isCard,
    isGrid,
    isList,
    isItems,
    isItem,
  } from "../data/complex-menu-utils";
  import NavigationMenuItemGrid from "./shared/navigation/NavigationMenuItemGrid.svelte";
  import NavigationMenuItemCard from "./shared/navigation/NavigationMenuItemCard.svelte";
  import NavigationMenuItem from "./shared/navigation/NavigationMenuItem.svelte";
  import NavigationMenuItemList from "./shared/navigation/NavigationMenuItemList.svelte";
  import NavigationMenuItems from "./shared/navigation/NavigationMenuItems.svelte";

  let { menus: links, textClass }: ComplexMenuProps = $props();
</script>

<NavigationMenu.Root viewport={true}>
  <NavigationMenu.List class="flex-wrap {textClass}">
    {#each links as link, i (i)}
      {#if isCard(link)}
        <NavigationMenuItemCard {...link} />
      {:else if isGrid(link)}
        <NavigationMenuItemGrid {...link} />
      {:else if isList(link)}
        <NavigationMenuItemList {...link} />
      {:else if isItems(link)}
        <NavigationMenuItems {...link} />
      {:else if isItem(link)}
        <NavigationMenuItem {...link} />
      {/if}
    {/each}
  </NavigationMenu.List>
</NavigationMenu.Root>
