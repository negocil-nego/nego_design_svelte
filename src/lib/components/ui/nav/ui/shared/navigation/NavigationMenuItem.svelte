<script lang="ts">
  import { goto } from "$app/navigation";
  import type { NavigationMenuItemProps } from "../../../data/types";
  import NavDropdown from "./NavDropdown.svelte";

  let { label, href, textClass, hoverClass, isLoading = false }: NavigationMenuItemProps =
    $props();
</script>

<NavDropdown
  {label}
  {isLoading}
  className="hidden md:block"
  {hoverClass}
  onClick={() => {
    if (href) goto(href);
  }}
/>
