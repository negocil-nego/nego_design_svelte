<script lang="ts">
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

  let { menus, textClass, subTextClass, hoverClass }: ComplexMenuProps =
    $props();
</script>

<ul
  class="flex list-none flex-1 flex-wrap items-center justify-center {textClass}"
>
  {#each menus as link, i (i)}
    {#if isCard(link)}
      <NavigationMenuItemCard
        {...link}
        {textClass}
        {subTextClass}
        {hoverClass}
      />
    {:else if isGrid(link)}
      <NavigationMenuItemGrid
        {...link}
        {textClass}
        {subTextClass}
        {hoverClass}
      />
    {:else if isList(link)}
      <NavigationMenuItemList
        {...link}
        {textClass}
        {subTextClass}
        {hoverClass}
      />
    {:else if isItems(link)}
      <NavigationMenuItems {...link} {textClass} {hoverClass} />
    {:else if isItem(link)}
      <NavigationMenuItem {...link} {textClass} {hoverClass} />
    {/if}
  {/each}
</ul>
