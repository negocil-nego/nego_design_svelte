<script lang="ts">
  /* eslint-disable @typescript-eslint/no-explicit-any */
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import type {
    NavMenuAndSubmenuSidebarProps,
    NavMenuItem,
    NavMenuSidebarProps,
  } from "$lib/components/core/sidebar/data/nav-menu-sidebar";

  let {
    items,
  }: {
    items: NavMenuItem[];
  } = $props();

  // Internal key for items without a group; never collides with a real name
  // because it's not a string accessible to whoever defines the items.
  const UNGROUPED = Symbol("ungrouped");

  function hasSubmenus(
    item: NavMenuSidebarProps | NavMenuAndSubmenuSidebarProps,
  ): item is NavMenuAndSubmenuSidebarProps {
    return "submenus" in item && Array.isArray(item.submenus);
  }

  let groupedItems = $derived(
    Map.groupBy(items, (item) => item.group?.name ?? UNGROUPED),
  );
</script>

{#snippet menuItem(item: NavMenuItem)}
  {#if hasSubmenus(item)}
    <Collapsible.Root open={item.isActive} class="group/collapsible">
      {#snippet child({ props })}
        <Sidebar.MenuItem {...props}>
          <Collapsible.Trigger>
            {#snippet child({ props })}
              <Sidebar.MenuButton {...props} tooltipContent={item.title}>
                {#if item.icon}
                  <HugeiconsIcon icon={item.icon} />
                {/if}
                <span>{item.title}</span>
                <ChevronRightIcon
                  class="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90"
                />
              </Sidebar.MenuButton>
            {/snippet}
          </Collapsible.Trigger>
          <Collapsible.Content>
            <Sidebar.MenuSub>
              {#each item.submenus ?? [] as subItem (subItem.title)}
                <Sidebar.MenuSubItem>
                  <Sidebar.MenuSubButton>
                    {#snippet child({ props })}
                      <a href={subItem.url} {...props}>
                        <span>{subItem.title}</span>
                      </a>
                    {/snippet}
                  </Sidebar.MenuSubButton>
                </Sidebar.MenuSubItem>
              {/each}
            </Sidebar.MenuSub>
          </Collapsible.Content>
        </Sidebar.MenuItem>
      {/snippet}
    </Collapsible.Root>
  {:else}
    <Sidebar.MenuItem>
      <Sidebar.MenuButton>
        {#snippet child({ props })}
          <a href={item.url} {...props}>
            {#if item.icon}
              <HugeiconsIcon icon={item.icon} />
            {/if}
            <span>{item.title}</span>
          </a>
        {/snippet}
      </Sidebar.MenuButton>
    </Sidebar.MenuItem>
  {/if}
{/snippet}

{#each groupedItems as [groupLabel, groupItems] (typeof groupLabel === "string" ? groupLabel : "ungrouped")}
  <Sidebar.Group>
    {#if typeof groupLabel === "string"}
      <Sidebar.GroupLabel>{groupLabel}</Sidebar.GroupLabel>
    {/if}
    <Sidebar.Menu>
      {#each groupItems as item (item.title)}
        {@render menuItem(item)}
      {/each}
    </Sidebar.Menu>
  </Sidebar.Group>
{/each}
