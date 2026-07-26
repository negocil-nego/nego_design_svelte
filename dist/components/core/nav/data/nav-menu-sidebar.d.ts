import type { IconSvgElement } from "@hugeicons/svelte";
export interface GroupMenuSidebar {
    name: string;
}
export interface SubMenuSidebar {
    title: string;
    url: string;
    icon: IconSvgElement;
    isActive?: boolean;
}
export interface NavMenuSidebar {
    title: string;
    url?: string;
    icon: IconSvgElement;
    isActive?: boolean;
    group?: GroupMenuSidebar;
}
export interface NavMenuAndSubmenuSidebar extends NavMenuSidebar {
    submenus?: SubMenuSidebar[];
}
export type NavMenuItem = NavMenuSidebar | NavMenuAndSubmenuSidebar;
