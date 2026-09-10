import type { IconSvgElement } from "@hugeicons/svelte";

/**
 * Grupo/categoria de menus na sidebar (ex: "Gestão", "Relatórios").
 */
export interface GroupMenuSidebarProps {
    /** Nome/título do grupo de menus */
    name: string,
}

/**
 * Submenu de um item principal da sidebar.
 */
export interface SubMenuSidebarProps {
    /** Título do submenu */
    title: string,
    /** URL de destino do submenu */
    url: string,
    /** Ícone SVG do submenu */
    icon: IconSvgElement,
    /** Indica se o submenu está ativo/selecionado */
    isActive?: boolean,
}

/**
 * Item de menu principal da sidebar.
 * Pode ser um item simples ou ter submenus.
 */
export interface NavMenuSidebarProps {
    /** Título/nome do item de menu */
    title: string,
    /** URL de destino (se não tiver submenus) */
    url?: string,
    /** Ícone SVG do item de menu */
    icon: IconSvgElement,
    /** Indica se o item está ativo/selecionado */
    isActive?: boolean,
    /** Grupo/categoria a que o menu pertence */
    group?: GroupMenuSidebarProps
}

/**
 * Item de menu com submenus aninhados.
 * Estende NavMenuSidebarProps adicionando suporte a submenus.
 */
export interface NavMenuAndSubmenuSidebarProps extends NavMenuSidebarProps {
    /** Lista de submenus abaixo do item principal */
    submenus?: SubMenuSidebarProps[]
}

/**
 * Tipo união para itens da barra lateral — pode ser
 * um item simples ou um item com submenus.
 */
export type NavMenuItem = NavMenuSidebarProps | NavMenuAndSubmenuSidebarProps
