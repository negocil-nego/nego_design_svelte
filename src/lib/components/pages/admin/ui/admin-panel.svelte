<script lang="ts">
  import { Separator } from "$lib/components/ui/separator/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import type { Snippet } from "svelte";

  type Props = {
    appsidebar?: Snippet;
    content?: Snippet;
    breadcrumb?: Snippet;
  };

  let { appsidebar, content, breadcrumb }: Props = $props();
</script>

<Sidebar.Provider>
  {@render appsidebar?.()}
  <Sidebar.Inset>
    <header
      class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12"
    >
      <div class="flex items-center gap-2 px-4">
        <Sidebar.Trigger class="-ms-1" />
        <Separator
          orientation="vertical"
          class="me-2 data-[orientation=vertical]:h-4"
        />
        {@render breadcrumb?.()}
      </div>
    </header>
    {@render content?.()}
  </Sidebar.Inset>
</Sidebar.Provider>
