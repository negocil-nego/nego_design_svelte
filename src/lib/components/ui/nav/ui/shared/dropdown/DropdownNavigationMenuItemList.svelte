<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import type { NavigationMenuItemListProps } from "../../../data/types";

  let { label, list }: NavigationMenuItemListProps = $props();
</script>

<DropdownMenu.Sub>
  <DropdownMenu.SubTrigger>{label}</DropdownMenu.SubTrigger>
  <DropdownMenu.SubContent>
    <ul class="grid w-75 gap-4 p-2">
      {#each list as item, i (i)}
        <li>
          <a href={item.href} class="block rounded-md p-2 no-underline hover:bg-accent">
            <div class="font-medium">{item.title ?? ""}</div>
            <div class="text-sm text-muted-foreground">
              {item.content}
            </div>
          </a>
        </li>
      {/each}
    </ul>
  </DropdownMenu.SubContent>
</DropdownMenu.Sub>
