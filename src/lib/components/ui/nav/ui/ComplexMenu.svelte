<script lang="ts">
  import { isLoggedIn } from "$lib/stores";
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
  import AdminUserSection from "$lib/components/pages/admin/shared/section/AdminUserSection.svelte";

  let {
    menus,
    textClass,
    subTextClass,
    hoverClass,
    isLoading = false,
    showUserSection = true,
  }: ComplexMenuProps = $props();

  const isLogged = $derived(isLoggedIn());
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
        {isLoading}
      />
    {:else if isGrid(link)}
      <NavigationMenuItemGrid
        {...link}
        {textClass}
        {subTextClass}
        {hoverClass}
        {isLoading}
      />
    {:else if isList(link)}
      <NavigationMenuItemList
        {...link}
        {textClass}
        {subTextClass}
        {hoverClass}
        {isLoading}
      />
    {:else if isItems(link)}
      <NavigationMenuItems {...link} {textClass} {hoverClass} {isLoading} />
    {:else if isItem(link)}
      <NavigationMenuItem {...link} {textClass} {hoverClass} {isLoading} />
    {/if}
  {/each}
</ul>

{#if showUserSection && isLogged}
  <AdminUserSection className="ms-auto" />
{/if}
