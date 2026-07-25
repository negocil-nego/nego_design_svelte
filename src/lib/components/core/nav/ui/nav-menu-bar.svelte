<script lang="ts">
  /* eslint-disable @typescript-eslint/no-explicit-any */
  import * as Collapsible from "$lib/components/ui/collapsible/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import ChevronRightIcon from "@lucide/svelte/icons/chevron-right";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { resolve } from "$app/paths";
  import type {
    NavMenuAndSubmenuSidebar,
    NavMenuItem,
    NavMenuSidebar,
  } from "$lib/components/core/nav/data/nav-menu-sidebar";

  let {
    items,
  }: {
    items: NavMenuItem[];
  } = $props();

  function hasSubmenus(
    item: NavMenuSidebar | NavMenuAndSubmenuSidebar,
  ): item is NavMenuAndSubmenuSidebar {
    return "submenus" in item && Array.isArray(item.submenus);
  }
</script>

<Sidebar.Group>
  <Sidebar.GroupLabel>Platform</Sidebar.GroupLabel>
  <Sidebar.Menu>
    {#each items as item (item.title)}
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
    {/each}
  </Sidebar.Menu>
</Sidebar.Group>
