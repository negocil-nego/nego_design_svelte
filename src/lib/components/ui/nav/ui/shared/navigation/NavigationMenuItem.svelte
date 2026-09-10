<script lang="ts">
  import { goto } from "$app/navigation";
  import type { NavigationMenuItemProps } from "../../../data/types";
  import NavDropdown from "./NavDropdown.svelte";

  let { label, href, textClass, hoverClass }: NavigationMenuItemProps =
    $props();
</script>

<NavDropdown
  {label}
  className="hidden md:block"
  {hoverClass}
  onClick={() => {
    if (href) goto(href);
  }}
/>
