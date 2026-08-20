<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import type { NavigationMenuItemsProps } from "./types";

  let { label, items }: NavigationMenuItemsProps = $props();
</script>

<NavigationMenu.Item class="hidden md:block">
  <NavigationMenu.Trigger>{label}</NavigationMenu.Trigger>
  <NavigationMenu.Content>
    <ul class="grid min-w-50 gap-4 p-1 md:p-2">
      {#each items as item, i (i)}
        <li>
          <NavigationMenu.Link href={item.href} class="py-1">
            {item.title}
          </NavigationMenu.Link>
        </li>
      {/each}
    </ul>
  </NavigationMenu.Content>
</NavigationMenu.Item>
