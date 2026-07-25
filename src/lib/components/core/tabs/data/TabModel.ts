import type { Snippet } from "svelte"

export interface TabItem {
    label: string
    value: string
}

export interface TabProps {
    item: TabItem
    children: Snippet
}