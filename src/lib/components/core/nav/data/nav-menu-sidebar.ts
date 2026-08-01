import type { IconSvgElement } from "@hugeicons/svelte";

export interface GroupMenuSidebarProps {
    name: string,
}

export interface SubMenuSidebarProps {
    title: string,
    url: string,
    icon: IconSvgElement,
    isActive?: boolean,
}

export interface NavMenuSidebarProps {
    title: string,
    url?: string,
    icon: IconSvgElement,
    isActive?: boolean,
    group?: GroupMenuSidebarProps
}

export interface NavMenuAndSubmenuSidebarProps extends NavMenuSidebarProps {
    submenus?: SubMenuSidebarProps[]
}

export type NavMenuItem = NavMenuSidebarProps | NavMenuAndSubmenuSidebarProps