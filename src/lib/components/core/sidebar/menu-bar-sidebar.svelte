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
  import NavMenuTopBar from "../nav/ui/nav-menu-top-bar.svelte";
  import {
    HelpCircleFreeIcons,
    Setting06FreeIcons,
  } from "@hugeicons/core-free-icons";
  import { t } from "$lib/i18n";

  type Props = {
    menusButtons?: NavMenuSidebar[];
    menus: NavMenuItem[];
    user: NavUserSidebarItem;
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
      <NavMenuTopBar
        content={{
          title: $t("label.panel"),
          subtitle: $t("label.administrative"),
        }}
      />
    {/if}
  </Sidebar.Header>
  <Sidebar.Content>
    <NavMenuBar items={menus} />
  </Sidebar.Content>
  <Sidebar.Footer>
    {#if footer}
      {@render footer?.()}
    {:else if menusButtons}
      {#if menusButtons.length == 0}
        <NavMenuBottomBar
          items={[
            { icon: HelpCircleFreeIcons, title: $t("label.help") },
            { icon: Setting06FreeIcons, title: $t("label.settings") },
          ]}
          class="mt-auto"
        />
      {:else if menusButtons.length > 0}
        <NavMenuBottomBar items={menusButtons} class="mt-auto" />
      {/if}
    {/if}
    <NavUserSidebar {user} />
  </Sidebar.Footer>
  <Sidebar.Rail />
</Sidebar.Root>
