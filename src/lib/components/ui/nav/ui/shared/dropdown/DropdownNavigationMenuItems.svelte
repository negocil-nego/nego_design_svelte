<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import type { NavigationMenuItemsProps } from "../../../data/types";

  let { label, items }: NavigationMenuItemsProps = $props();
</script>

<DropdownMenu.Sub>
  <DropdownMenu.SubTrigger>{label}</DropdownMenu.SubTrigger>
  <DropdownMenu.SubContent>
    <ul class="grid min-w-50 gap-4 p-1 md:p-2">
      {#each items as item, i (i)}
        <li>
          <a
            href={item.href}
            class="block rounded-md px-3 py-2 text-sm font-medium no-underline hover:bg-accent"
          >
            {item.title}
          </a>
        </li>
      {/each}
    </ul>
  </DropdownMenu.SubContent>
</DropdownMenu.Sub>
