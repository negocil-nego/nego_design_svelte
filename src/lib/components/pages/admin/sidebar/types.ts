import type { MenuBarSidebarProps } from "$lib/types";
import type { Snippet } from "svelte";

export interface AdminSidebarProps {
    sidebar: MenuBarSidebarProps
    children?: Snippet;
}