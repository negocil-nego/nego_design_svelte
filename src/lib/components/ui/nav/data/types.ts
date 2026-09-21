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
    textClass?: string;
    hoverClass?: string;
    isLoading?: boolean;
}

export type NavigationMenuItemCardProps = {
    label?: string;
    textClass?: string;
    subTextClass?: string;
    hoverClass?: string;
    header?: {
        label: string;
        description: string;
        href?: string;
        imgUrl?: string;
        descriptionClass?: string;
        labelClass?: string
    };
    cards?: ListItemProps[];
    isLoading?: boolean;
}

export type NavigationMenuItemGridProps = {
    label: string;
    textClass?: string;
    hoverClass?: string;
    subTextClass?: string;
    grids?: ListItemProps[];
    isLoading?: boolean;
}

export type NavigationMenuItemListProps = {
    label: string;
    textClass?: string;
    hoverClass?: string;
    subTextClass?: string;
    list?: ListItemProps[];
    isLoading?: boolean;
}

export type NavigationMenuItemsProps = {
    label: string;
    textClass?: string;
    hoverClass?: string;
    items?: {
        title: string;
        href: string;
    }[];
    isLoading?: boolean;
}

export type ComplexMenuProps = IMenuProps & {
    menus: (NavigationMenuItemProps | NavigationMenuItemListProps | NavigationMenuItemCardProps | NavigationMenuItemGridProps | NavigationMenuItemsProps)[];
    textClass?: string;
    subTextClass?: string;
    hoverClass?: string;
    isLoading?: boolean;
}

export type MenuVarientProps = ComplexMenuProps | SimpleMenuProps;

export type MenuProps = IMenuProps & {
    logo?: NavMenuLogoProps
    navMenuButton?: NavMenuButtonProps
    isBorder?: boolean
    /** Exibe o interruptor de tema (claro/escuro) */
    isThemeSwitch?: boolean
    /** Exibe o seletor de idioma */
    isLanguageSwitcher?: boolean
}
