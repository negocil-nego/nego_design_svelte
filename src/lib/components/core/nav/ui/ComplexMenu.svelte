<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import { useDevice } from "$lib/hooks/responsive.svelte";
  import type {
    ComplexMenuProps,
    NavigationMenuItemProps,
    NavigationMenuItemListProps,
    NavigationMenuItemCardProps,
    NavigationMenuItemGridProps,
    NavigationMenuItemsProps,
  } from "./shared/types";
  import NavigationMenuItemGrid from "./shared/NavigationMenuItemGrid.svelte";
  import NavigationMenuItemCard from "./shared/NavigationMenuItemCard.svelte";
  import NavigationMenuItem from "./shared/NavigationMenuItem.svelte";
  import NavigationMenuItemList from "./shared/NavigationMenuItemList.svelte";
  import NavigationMenuItems from "./shared/NavigationMenuItems.svelte";

  const responsive = useDevice();

  let { menus: links }: ComplexMenuProps = $props();

  type NavMenuItem =
    | NavigationMenuItemCardProps
    | NavigationMenuItemGridProps
    | NavigationMenuItemListProps
    | NavigationMenuItemsProps
    | NavigationMenuItemProps;

  function isCard(item: NavMenuItem): item is NavigationMenuItemCardProps {
    return "header" in item && "cards" in item;
  }

  function isGrid(item: NavMenuItem): item is NavigationMenuItemGridProps {
    return "grids" in item && "label" in item;
  }

  function isList(item: NavMenuItem): item is NavigationMenuItemListProps {
    return "list" in item && "label" in item;
  }

  function isItems(item: NavMenuItem): item is NavigationMenuItemsProps {
    return "items" in item && "label" in item;
  }

  function isItem(item: NavMenuItem): item is NavigationMenuItemProps {
    return "href" in item && "label" in item;
  }
</script>

<NavigationMenu.Root viewport={responsive.isMobile}>
  <NavigationMenu.List class="flex-wrap">
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
