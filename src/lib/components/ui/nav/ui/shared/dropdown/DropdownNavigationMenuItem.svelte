<script lang="ts">
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import type { NavigationMenuItemProps } from "../../../data/types";

  let { label, href }: NavigationMenuItemProps = $props();
</script>

<DropdownMenu.Item>
  <a {href} class="block w-full px-3 py-2 text-sm font-medium">
    {label}
  </a>
</DropdownMenu.Item>
