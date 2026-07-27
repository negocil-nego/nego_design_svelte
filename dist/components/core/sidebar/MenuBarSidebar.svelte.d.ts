import * as Sidebar from "../../ui/sidebar/index.js";
import type { ComponentProps } from "svelte";
import type { NavUserSidebarItem } from "../nav/data/nav-user-sidebar";
import type { NavMenuItem, NavMenuSidebar } from "../nav/data/nav-menu-sidebar";
import type { Snippet } from "svelte";
/**
 * Sidebar de navegação com menus, usuário e botões.
 * @property {NavMenuSidebar[]} menusButtons - Botões do footer (ex: logout)
 * @property {NavMenuItem[]} menus - Itens de navegação principal
 * @property {NavUserSidebarItem} user - Dados do usuário logado
 * @property {Snippet} footer - Snippet customizado do footer
 * @property {Snippet} header - Snippet customizado do header
 */
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
