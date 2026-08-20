<script lang="ts">
  import * as NavigationMenu from "$lib/components/ui/navigation-menu/index.js";
  import type { NavigationMenuItemProps } from "./types";
  import { navigationMenuTriggerStyle } from "$lib/components/ui/navigation-menu/navigation-menu-trigger.svelte";

  let { label, href }: NavigationMenuItemProps = $props();
</script>

<NavigationMenu.Item>
  <NavigationMenu.Link>
    {#snippet child()}
      <a {href} class={navigationMenuTriggerStyle()}>{label}</a>
    {/snippet}
  </NavigationMenu.Link>
</NavigationMenu.Item>
