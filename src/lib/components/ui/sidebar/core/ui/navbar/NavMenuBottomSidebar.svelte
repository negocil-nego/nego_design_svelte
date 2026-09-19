<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import type { WithoutChildren } from "$lib/utils.js";
  import type { ComponentProps } from "svelte";
  import type { NavMenuSidebarProps } from "../../data/nav-menu-sidebar";
  
  let {
    items,
    ...restProps
  }: { items?: NavMenuSidebarProps[] } & WithoutChildren<
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
                <ImageHugeicons icon={item.icon} width={16} height={16} />
                <span>{item.title}</span>
              </a>
            {/snippet}
          </Sidebar.MenuButton>
        </Sidebar.MenuItem>
      {/each}
    </Sidebar.Menu>
  </Sidebar.GroupContent>
</Sidebar.Group>
