import type { Snippet } from "svelte";
import type { NavUserSidebarProps } from "../nav/data/nav-user-sidebar";
import type {
    NavMenuItem,
    NavMenuSidebarProps,
} from "../nav/data/nav-menu-sidebar";

/**
 * Props do componente MenuBarSidebar — sidebar de navegação admin
 * com menus, usuário logado e botões de ação (ex: logout).
 */
export interface MenuBarSidebarProps {
    /** Botões do rodapé da sidebar (ex: logout) */
    menusButtons?: NavMenuSidebarProps[];
    /** Itens de navegação principal */
    menus: NavMenuItem[];
    /** Dados do usuário logado */
    user: NavUserSidebarProps;
    /** Snippet customizado para o footer da sidebar */
    footer?: Snippet;
    /** Snippet customizado para o header da sidebar */
    header?: Snippet;
}
