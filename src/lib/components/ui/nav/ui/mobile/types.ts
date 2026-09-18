import type { Snippet } from "svelte";
import type { NavMenuButtonProps } from "../../data/nav-menu";

export type MenuTriggerMobileProps = {
    navMenuButton?: NavMenuButtonProps;
    isThemeSwitch?: boolean;
    isLanguageSwitcher?: boolean;
    triggerClass?: string;
    trigger: Snippet;
    children: Snippet;
};