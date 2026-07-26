import * as Sidebar from "../../ui/sidebar/index.js";
import type { ComponentProps } from "svelte";
import type { NavUserSidebarItem } from "../nav/data/nav-user-sidebar";
import type { NavMenuItem, NavMenuSidebar } from "../nav/data/nav-menu-sidebar";
import type { Snippet } from "svelte";
type Props = {
    menusButtons?: NavMenuSidebar[];
    menus: NavMenuItem[];
    user: NavUserSidebarItem;
    footer?: Snippet;
    header?: Snippet;
};
type $$ComponentProps = ComponentProps<typeof Sidebar.Root> & Props;
declare const MenuBarSidebar: import("svelte").Component<$$ComponentProps, {}, "ref">;
type MenuBarSidebar = ReturnType<typeof MenuBarSidebar>;
export default MenuBarSidebar;
