<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import type { ComponentProps } from "svelte";

  import type { NavUserSidebarItem } from "../nav/data/nav-user-sidebar";
  import type {
    NavMenuItem,
    NavMenuSidebar,
  } from "../nav/data/nav-menu-sidebar";
  import type { Snippet } from "svelte";
  import NavUserSidebar from "../nav/ui/nav-user-sidebar.svelte";
  import NavMenuBar from "../nav/ui/nav-menu-bar.svelte";
  import NavMenuBottomBar from "../nav/ui/nav-menu-bottom-bar.svelte";

  type Props = {
    menusButtons?: NavMenuSidebar[];
    menus: NavMenuItem[];
    user: NavUserSidebarItem;
    header?: Snippet;
  };

  let {
    ref = $bindable(null),
    collapsible = "icon",
    menusButtons = [],
    menus,
    user,
    header,
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> & Props = $props();
</script>

<Sidebar.Root bind:ref {collapsible} {...restProps}>
  <Sidebar.Header>
    {@render header?.()}
  </Sidebar.Header>
  <Sidebar.Content>
    <NavMenuBar items={menus} />
  </Sidebar.Content>
  <Sidebar.Footer>
    {#if menusButtons.length > 0}
      <NavMenuBottomBar items={menusButtons} class="mt-auto mb-3" />
    {/if}
    <NavUserSidebar {user} />
  </Sidebar.Footer>
  <Sidebar.Rail />
</Sidebar.Root>
