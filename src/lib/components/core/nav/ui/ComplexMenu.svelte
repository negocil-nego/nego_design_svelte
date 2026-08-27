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

  let { menus: links, textClass, subTextClass }: ComplexMenuProps = $props();
</script>

<ul
  class="flex list-none flex-1 flex-wrap items-center justify-center {textClass}"
>
  {#each links as link, i (i)}
    {#if isCard(link)}
      <NavigationMenuItemCard {...link} {textClass} {subTextClass} />
    {:else if isGrid(link)}
      <NavigationMenuItemGrid {...link} {textClass} {subTextClass} />
    {:else if isList(link)}
      <NavigationMenuItemList {...link} {textClass} {subTextClass} />
    {:else if isItems(link)}
      <NavigationMenuItems {...link} {textClass} />
    {:else if isItem(link)}
      <NavigationMenuItem {...link} {textClass} />
    {/if}
  {/each}
</ul>
