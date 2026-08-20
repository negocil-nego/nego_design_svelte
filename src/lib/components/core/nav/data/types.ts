import type { HTMLAttributes } from "svelte/elements";
import type { IMenuProps, NavMenuButtonProps, NavMenuLogoProps, SimpleMenuProps } from "./nav-menu";

export type ListItemProps = HTMLAttributes<HTMLAnchorElement> & {
    title: string;
    href: string;
    content: string;
    icon?: string;
}

export type NavigationMenuItemProps = {
    label: string;
    href?: string;
}

export type NavigationMenuItemCardProps = {
    label?: string;
    header?: {
        label: string;
        description: string;
        href?: string;
        imgUrl?: string;
        descriptionClass?: string;
        labelClass?: string
    };
    cards?: ListItemProps[];
}

export type NavigationMenuItemGridProps = {
    label: string;
    grids?: ListItemProps[];
}

export type NavigationMenuItemListProps = {
    label: string;
    list?: ListItemProps[];
}

export type NavigationMenuItemsProps = {
    label: string;
    items?: {
        title: string;
        href: string;
    }[];
}

export type ComplexMenuProps = IMenuProps & {
    menus: (NavigationMenuItemProps | NavigationMenuItemListProps | NavigationMenuItemCardProps | NavigationMenuItemGridProps | NavigationMenuItemsProps)[]
}

export type MenuVarientProps = ComplexMenuProps | SimpleMenuProps;

export type MenuProps = IMenuProps & {
    logo?: NavMenuLogoProps
    navMenu: MenuVarientProps
    navMenuButton?: NavMenuButtonProps
    isBorder?: boolean
    /** Exibe o interruptor de tema (claro/escuro) */
    isLightSwitch?: boolean
    /** Exibe o seletor de idioma */
    isLanguageSwitcher?: boolean
}
