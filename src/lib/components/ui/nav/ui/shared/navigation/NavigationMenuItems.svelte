<script lang="ts">
  import type { NavigationMenuItemsProps } from "../../../data/types";
  import NavDropdown from "./NavDropdown.svelte";

  let { label, items, hoverClass, isLoading = false }: NavigationMenuItemsProps = $props();
</script>

<NavDropdown {label} className="hidden md:block" {hoverClass} {isLoading}>
  <ul class="grid min-w-50 gap-4 p-1 md:p-2">
    {#each items as item, i (i)}
      <li>
        <a
          href={item.href}
          class="block rounded-xl px-3 py-2 text-sm font-medium no-underline hover:bg-muted focus:bg-muted"
        >
          {item.title}
        </a>
      </li>
    {/each}
  </ul>
</NavDropdown>
