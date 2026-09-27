<script lang="ts">
  import { isLoggedIn } from "$lib/stores";
  import type { SimpleMenuProps } from "../data/nav-menu";
  import MenuLinks from "./shared/MenuLinks.svelte";
  import AdminUserSection from "$lib/components/pages/admin/shared/section/AdminUserSection.svelte";

  let { ...restProps }: SimpleMenuProps = $props();

  const showUserSection = $derived(restProps.showUserSection !== false);
  const isLogged = $derived(isLoggedIn());
</script>

{#if restProps.align === "LINK_INTO_ACTIONS"}
  <div class="flex items-center gap-2 w-full">
    <MenuLinks
      {...restProps}
      orientation="vertical"
      iconClass={restProps.iconLinkClass}
    />
  </div>
{:else}
  <MenuLinks
    {...restProps}
    orientation="horizontal"
    iconClass={restProps.iconLinkClass}
  />
{/if}

{#if showUserSection && isLogged}
  <AdminUserSection className="ms-auto" />
{/if}
