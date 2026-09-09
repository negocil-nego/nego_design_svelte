<script lang="ts">
  import { SidebarProvider, SidebarInset } from "$lib/components/ui/sidebar";
  import DocsSidebar from "$lib/docs/DocsSidebar.svelte";
  let { children } = $props();
</script>

<SidebarProvider collapsible="icon" defaultOpen={true}>
  <DocsSidebar />
  <SidebarInset>
    <main class="flex min-h-svh flex-1 flex-col">
      {@render children()}
    </main>
  </SidebarInset>
</SidebarProvider>
