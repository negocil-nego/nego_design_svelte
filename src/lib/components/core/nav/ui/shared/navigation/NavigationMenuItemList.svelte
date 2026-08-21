<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import type { NavigationMenuItemListProps } from "../../../data/types";

  let { label, list }: NavigationMenuItemListProps = $props();
</script>

<NavigationMenu.Item class="hidden md:block relative">
  <NavigationMenu.Trigger>{label}</NavigationMenu.Trigger>
  <NavigationMenu.Content>
    <ul class="grid w-75 gap-4 p-2">
      {#each list as item, i (i)}
        <li>
          <NavigationMenu.Link href={item.href}>
            <div class="font-medium">{item.title ?? ""}</div>
            <div class="text-muted-foreground">
              {item.content}
            </div>
          </NavigationMenu.Link>
        </li>
      {/each}
    </ul>
  </NavigationMenu.Content>
</NavigationMenu.Item>
