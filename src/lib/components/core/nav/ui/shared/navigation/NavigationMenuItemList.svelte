<script lang="ts">
  import type { NavigationMenuItemListProps } from "../../../data/types";
  import NavDropdown from "./NavDropdown.svelte";

  let { label, list }: NavigationMenuItemListProps = $props();
</script>

<NavDropdown {label} className="hidden md:block">
  <ul class="grid w-75 gap-4 p-2">
    {#each list as item, i (i)}
      <li>
        <a
          href={item.href}
          class="block rounded-xl p-2 no-underline hover:bg-muted"
        >
          <div class="font-medium">{item.title ?? ""}</div>
          <div class="text-muted-foreground">
            {item.content}
          </div>
        </a>
      </li>
    {/each}
  </ul>
</NavDropdown>
