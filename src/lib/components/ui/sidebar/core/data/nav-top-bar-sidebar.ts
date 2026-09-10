import type { Component } from "svelte";

export interface NavTopBarSidebarItem {
    content: {
        logo?: Component<{ class?: string }>;
        title: string;
        subtitle: string
    }
    dropdownMenu?: {
        header: {
            icon?: Component<{ class?: string }>,
            text: string
        },
        items?: {
            icon: Component<{ class?: string }>,
            text: string,
            onclick?: () => void
        }[],
        footer?: {
            icon?: Component<{ class?: string }>,
            text: string
        }
    }
}