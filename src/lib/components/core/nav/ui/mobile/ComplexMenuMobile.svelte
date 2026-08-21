<script lang="ts">
  import type {
    ComplexMenuProps,
    NavigationMenuItemCardProps,
    NavigationMenuItemGridProps,
    NavigationMenuItemListProps,
    NavigationMenuItemsProps,
    NavigationMenuItemProps,
  } from "../../data/types";
  import {
    isCard,
    isGrid,
    isList,
    isItems,
    isItem,
  } from "../../data/complex-menu-utils";
  import CollapsibleNavMenu from "../shared/CollapsibleNavMenu.svelte";
  import NavMenuItem from "../shared/NavMenuItem.svelte";
  import MenuMobile from "./MenuMobile.svelte";

  let { menus: links }: ComplexMenuProps = $props();
</script>

{#snippet headerSnippet(header: NonNullable<NavigationMenuItemCardProps["header"]>)}
  <div class="mt-4 mb-2 text-lg font-medium {header.labelClass}">{header.label}</div>
  <p class="text-sm leading-tight {header.descriptionClass || 'text-muted-foreground'}">{header.description}</p>
{/snippet}

<MenuMobile>
  <div class="flex flex-col gap-1">
    {#each links as link, i (i)}
      {#if isCard(link)}
        {@const card = link as NavigationMenuItemCardProps}
        <CollapsibleNavMenu label={card.label ?? card.header?.label ?? ""}>
          <ul class="grid gap-2 p-2">
            {#if card.header}
              <li class="relative row-span-3" style={card.header.imgUrl ? `background-image: url(${card.header.imgUrl}); background-repeat: no-repeat; background-size: cover; background-position: center; border-radius: 12px;` : ""}>
                <a href={card.header.href ?? "#"} class="flex h-full w-full flex-col justify-end p-4 {card.header.imgUrl ? "no-underline outline-hidden select-none" : "bg-linear-to-b from-muted/50 to-muted rounded-md"}">
                  {@render headerSnippet(card.header)}
                </a>
              </li>
            {/if}
            {#if card.cards}
              {#each card.cards as item, j (j)}
                <NavMenuItem {...item} />
              {/each}
            {/if}
          </ul>
        </CollapsibleNavMenu>

      {:else if isGrid(link)}
        {@const grid = link as NavigationMenuItemGridProps}
        <CollapsibleNavMenu label={grid.label}>
          <ul class="grid grid-cols-2 gap-2 p-2">
            {#each grid.grids ?? [] as item, j (j)}
              <NavMenuItem {...item} />
            {/each}
          </ul>
        </CollapsibleNavMenu>

      {:else if isList(link)}
        {@const list = link as NavigationMenuItemListProps}
        <CollapsibleNavMenu label={list.label}>
          <ul class="grid gap-4 p-2">
            {#each list.list ?? [] as item, j (j)}
              <li>
                <a href={item.href} class="block rounded-md p-2 no-underline hover:bg-accent">
                  <div class="font-medium">{item.title ?? ""}</div>
                  <div class="text-sm text-muted-foreground">{item.content}</div>
                </a>
              </li>
            {/each}
          </ul>
        </CollapsibleNavMenu>

      {:else if isItems(link)}
        {@const items = link as NavigationMenuItemsProps}
        <CollapsibleNavMenu label={items.label}>
          <ul class="grid min-w-50 gap-4 p-2">
            {#each items.items ?? [] as item, j (j)}
              <li>
                <a href={item.href} class="block rounded-md px-3 py-2 text-sm font-medium no-underline hover:bg-accent">
                  {item.title}
                </a>
              </li>
            {/each}
          </ul>
        </CollapsibleNavMenu>

      {:else if isItem(link)}
        {@const item = link as NavigationMenuItemProps}
        <a href={item.href} class="block w-full rounded-xl px-3 py-2 text-sm font-medium no-underline hover:bg-accent focus:bg-accent">
          {item.label}
        </a>
      {/if}
    {/each}
  </div>
</MenuMobile>
