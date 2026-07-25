import type { IconSvgElement } from "@hugeicons/svelte";

export interface NavUserSidebarItem {
    user: {
        name: string; email: string; avatar: string
    }
    actions?: {
        label: string;
        icon: IconSvgElement;
        onclick?: () => void;
    }[];
    onLogout?: () => void
}