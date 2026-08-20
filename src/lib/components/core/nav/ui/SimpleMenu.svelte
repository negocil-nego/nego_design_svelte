<script lang="ts">
  import type { SimpleMenuProps } from "../data/nav-menu";
  import MenuLinks from "./shared/MenuLinks.svelte";

  let { ...restProps }: SimpleMenuProps = $props();
</script>

{#if restProps.align === "LINK_INTO_ACTIONS"}
  <div class="flex items-center gap-2">
    <MenuLinks {...restProps} orientation="vertical" />
  </div>
{:else}
  <MenuLinks {...restProps} orientation="horizontal" />
{/if}
