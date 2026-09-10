<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import type { ComponentProps } from "svelte";

  import type { NavUserSidebarProps } from "./data/nav-user-sidebar";
  import type {
    NavMenuItem,
    NavMenuSidebarProps,
  } from "./data/nav-menu-sidebar";
  import type { Snippet } from "svelte";
  import NavMenuTopBarSidebar from "./ui/navbar/NavMenuTopBarSidebar.svelte";
  import NavMenuBottomSidebar from "./ui/navbar/NavMenuBottomSidebar.svelte";
  import NavMenuBarSidebar from "./ui/navbar/NavMenuBarSidebar.svelte";
  import NavUserSidebar from "./ui/navbar/NavUserSidebar.svelte";
  import { t } from "$lib/i18n";

  /**
   * Navigation sidebar with menus, user, and buttons.
   * @property {NavMenuSidebar[]} menusButtons - Footer buttons (e.g., logout)
   * @property {NavMenuItem[]} menus - Main navigation items
   * @property {NavUserSidebarItem} user - Logged-in user data
   * @property {Snippet} footer - Snippet customizado do footer
   * @property {Snippet} header - Snippet customizado do header
   */
  type Props = {
    menusButtons?: NavMenuSidebarProps[];
    menus: NavMenuItem[];
    user: NavUserSidebarProps;
    footer?: Snippet;
    header?: Snippet;
  };

  let {
    ref = $bindable(null),
    collapsible = "icon",
    menusButtons,
    menus,
    user,
    footer,
    header,
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> & Props = $props();
</script>

<Sidebar.Root bind:ref {collapsible} {...restProps}>
  <Sidebar.Header>
    {#if header}
      {@render header?.()}
    {:else}
      <NavMenuTopBarSidebar
        content={{
          title: $t("label.panel"),
          subtitle: $t("label.administrative"),
        }}
      />
    {/if}
  </Sidebar.Header>
  <Sidebar.Content>
    <NavMenuBarSidebar items={menus} />
  </Sidebar.Content>
  <Sidebar.Footer>
    {#if footer}
      {@render footer?.()}
    {:else if menusButtons && menusButtons.length > 0}
      <NavMenuBottomSidebar items={menusButtons} class="mt-auto" />
    {/if}
    <NavUserSidebar {user} />
  </Sidebar.Footer>
  <Sidebar.Rail />
</Sidebar.Root>
