import type { Snippet } from "svelte";
import type { NavMenuButtonProps, NavMenuLinksProps } from "../../data/nav-menu";

export type SimpleMenuMobileProps = {
    links: NavMenuLinksProps[];
    iconLinkClass?: string;
    onclickButtonLogin?: () => void;
    onclickButtonRegister?: () => void;
}

export type MenuTriggerMobileProps = {
    navMenuButton?: NavMenuButtonProps;
    isThemeSwitch?: boolean;
    isLanguageSwitcher?: boolean;
    triggerClass?: string;
    trigger: Snippet;
    children: Snippet;
};