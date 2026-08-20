<script lang="ts">
  import type { ComplexMenuProps, SimpleMenuProps } from "$lib/types";
  import ComplexMenu from "./ComplexMenu.svelte";
  import SimpleMenu from "./SimpleMenu.svelte";

  type NavMenuItem = ComplexMenuProps | SimpleMenuProps;

  let { navMenu }: { navMenu: NavMenuItem } = $props();

  function isLinks(item: NavMenuItem): item is SimpleMenuProps {
    return "links" in item;
  }

  function isMenu(item: NavMenuItem): item is ComplexMenuProps {
    return "menus" in item;
  }
</script>

{#if isLinks(navMenu)}
  <SimpleMenu {...navMenu} />
{:else if isMenu(navMenu)}
  <ComplexMenu {...navMenu} />
{/if}
