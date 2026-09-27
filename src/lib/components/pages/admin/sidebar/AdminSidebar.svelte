<script lang="ts">
    import { AdminPanel, MenuBarSidebar } from "$lib";
    import type { AdminSidebarProps } from "./types";

    let { sidebar, children }: AdminSidebarProps = $props();
</script>

<AdminPanel>
    {#snippet appsidebar()}
        <MenuBarSidebar {...sidebar} />
    {/snippet}
    {#snippet content()}
        {#if children}
            {@render children()}
        {/if}
    {/snippet}
</AdminPanel>
