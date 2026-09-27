import type { Snippet } from "svelte";
import type { NavMenuButtonProps, NavMenuLinksProps } from "../../data/nav-menu";

export type SimpleMenuMobileProps = {
    links: NavMenuLinksProps[];
    iconLinkClass?: string;
    onclickButtonLogin?: () => void;
    onclickButtonRegister?: () => void;
    /**
     * Exibe o `AdminUserSection` no drawer quando o `userStore` tem um
     * utilizador logado. Por omissão é `true`.
     */
    showUserSection?: boolean;
}

export type MenuTriggerMobileProps = {
    navMenuButton?: NavMenuButtonProps;
    isThemeSwitch?: boolean;
    isLanguageSwitcher?: boolean;
    triggerClass?: string;
    trigger: Snippet;
    children: Snippet;
};