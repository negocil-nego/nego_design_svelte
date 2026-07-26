import * as Sidebar from "../../../ui/sidebar/index.js";
import type { WithoutChildren } from "../../../../utils.js";
import type { ComponentProps } from "svelte";
import type { NavMenuSidebar } from "../data/nav-menu-sidebar";
type $$ComponentProps = {
    items?: NavMenuSidebar[];
} & WithoutChildren<ComponentProps<typeof Sidebar.Group>>;
declare const NavMenuBottomBar: import("svelte").Component<$$ComponentProps, {}, "">;
type NavMenuBottomBar = ReturnType<typeof NavMenuBottomBar>;
export default NavMenuBottomBar;
