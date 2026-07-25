import type { IconSvgElement } from "@hugeicons/svelte";

export interface SubMenuSidebar {
    title: string,
    url: string,
    icon: IconSvgElement,
    isActive?: boolean,
}

export interface NavMenuSidebar {
    title: string,
    url?: string,
    icon: IconSvgElement,
    isActive?: boolean,
}

export interface NavMenuAndSubmenuSidebar extends NavMenuSidebar {
    submenus?: SubMenuSidebar[]
}

export type NavMenuItem = NavMenuSidebar | NavMenuAndSubmenuSidebar