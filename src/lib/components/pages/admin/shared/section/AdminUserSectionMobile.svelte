<script lang="ts">
  import type { AdminUserSectionMobileProps } from "./types";
  import { t } from "$lib/i18n";
  import MenuTriggerMobile from "$lib/components/ui/nav/ui/mobile/MenuTriggerMobile.svelte";
  import AdminUserSection from "./AdminUserSection.svelte";
  import MenuLinks from "$lib/components/ui/nav/ui/shared/MenuLinks.svelte";

  const { user, menuItems = [] }: AdminUserSectionMobileProps = $props();
</script>

<MenuTriggerMobile triggerClass="bg-transparent">
  {#snippet trigger()}
    <AdminUserSection {...user} />
  {/snippet}
  <nav>
    <div class="mt-5 mb-4 font-semibold">{$t("label.navigation")}</div>
    {#if menuItems.length > 0}
      <MenuLinks
        links={menuItems}
        groupClass="space-y-3"
        orientation="vertical"
      />
    {/if}
  </nav>
</MenuTriggerMobile>
