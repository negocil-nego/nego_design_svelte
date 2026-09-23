import type { NavMenuLinksProps } from "$lib/types";

export type MenuLinksProps = {
    links: NavMenuLinksProps[];
    linkClass?: string;
    groupClass?: string;
    menuKey?: string;
    activeClass?: string;
    iconClass?: string;
    orientation?: "horizontal" | "vertical";
}