<script lang="ts">
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import type { WithoutChildren } from "$lib/utils.js";
  import type { ComponentProps } from "svelte";
  import type { NavMenuSidebar } from "../data/nav-menu-sidebar";
  import { HugeiconsIcon } from "@hugeicons/svelte";

  let {
    items,
    ...restProps
  }: { items?: NavMenuSidebar[] } & WithoutChildren<
    ComponentProps<typeof Sidebar.Group>
  > = $props();
</script>

<Sidebar.Group {...restProps}>
  <Sidebar.GroupContent>
    <Sidebar.Menu>
      {#each items as item (item.title)}
        <Sidebar.MenuItem>
          <Sidebar.MenuButton>
            {#snippet child({ props })}
              <a href={item.url} {...props}>
                <HugeiconsIcon icon={item.icon} size={16} />
                <span>{item.title}</span>
              </a>
            {/snippet}
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      {/each}
    </Sidebar.Menu>
  </Sidebar.GroupContent>
</Sidebar.Group>
