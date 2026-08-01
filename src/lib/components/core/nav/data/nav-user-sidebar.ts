import type { IconSvgElement } from "@hugeicons/svelte";

export interface NavUserSidebarProps {
    user: {
        name: string;
        email: string;
        avatar?: string
    }
    actions?: {
        label: string;
        icon: IconSvgElement;
        onclick?: () => void;
    }[];
    onLogout?: () => void
}