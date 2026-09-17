<script lang="ts">
    import { AdminPanel, MenuBarSidebar } from "$lib";
    import type { AdminSidebarProps } from "./types";

    let { sidebar }: AdminSidebarProps = $props();
</script>

<AdminPanel>
    {#snippet appsidebar()}
        <MenuBarSidebar {...sidebar} />
    {/snippet}
</AdminPanel>
