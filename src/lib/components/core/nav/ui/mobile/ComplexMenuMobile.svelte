<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import type { ComplexMenuProps } from "../../data/types";
  import {
    isCard,
    isGrid,
    isList,
    isItems,
    isItem,
  } from "../../data/complex-menu-utils";
  import DropdownNavigationMenuItemGrid from "../shared/dropdown/DropdownNavigationMenuItemGrid.svelte";
  import DropdownNavigationMenuItemCard from "../shared/dropdown/DropdownNavigationMenuItemCard.svelte";
  import DropdownNavigationMenuItem from "../shared/dropdown/DropdownNavigationMenuItem.svelte";
  import DropdownNavigationMenuItemList from "../shared/dropdown/DropdownNavigationMenuItemList.svelte";
  import DropdownNavigationMenuItems from "../shared/dropdown/DropdownNavigationMenuItems.svelte";
  import MenuMobile from "./MenuMobile.svelte";

  let { menus: links }: ComplexMenuProps = $props();
</script>

<MenuMobile>
  <DropdownMenu.Root>
    <DropdownMenu.Content class="w-full min-w-0">
      {#each links as link, i (i)}
        {#if isCard(link)}
          <DropdownNavigationMenuItemCard {...link} />
        {:else if isGrid(link)}
          <DropdownNavigationMenuItemGrid {...link} />
        {:else if isList(link)}
          <DropdownNavigationMenuItemList {...link} />
        {:else if isItems(link)}
          <DropdownNavigationMenuItems {...link} />
        {:else if isItem(link)}
          <DropdownNavigationMenuItem {...link} />
        {/if}
      {/each}
    </DropdownMenu.Content>
  </DropdownMenu.Root>
</MenuMobile>
