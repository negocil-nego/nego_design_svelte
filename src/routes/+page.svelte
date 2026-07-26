<script>
  import MenuBarSidebar from "$lib/components/core/sidebar/menu-bar-sidebar.svelte";
  import AdminPanel from "$lib/components/pages/admin/ui/admin-panel.svelte";
  import { t } from "$lib/i18n";
  import {
    Folder01FreeIcons,
    GlobalEditingIcon,
    HelpCircleFreeIcons,
    Home01FreeIcons,
    ManagerFreeIcons,
    Phone,
    Setting06FreeIcons,
    UserSearch01FreeIcons,
  } from "@hugeicons/core-free-icons";
</script>

<AdminPanel>
  {#snippet appsidebar()}
    <MenuBarSidebar
      user={{
        user: {
          name: "Sedrac",
          email: "slcsedrac@gmail.com",
        },
      }}
      menus={[
        { icon: Home01FreeIcons, title: $t("label.home"), url: "#" },
        {
          icon: UserSearch01FreeIcons,
          title: $t("label.users"),
          url: "#",
        },
        {
          icon: ManagerFreeIcons,
          title: $t("label.maneger"),
          submenus: [
            { icon: GlobalEditingIcon, title: $t("label.folder"), url: "#" },
            { icon: Folder01FreeIcons, title: $t("label.file"), url: "#" },
            { icon: Phone, title: $t("label.account"), url: "#" },
          ],
        },
      ]}
      menusButtons={[
        { icon: HelpCircleFreeIcons, title: $t("label.help") },
        { icon: Setting06FreeIcons, title: $t("label.settings") },
      ]}
    />
  {/snippet}
</AdminPanel>
