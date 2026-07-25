<script>
  import MenuBarSidebar from "$lib/components/core/sidebar/menu-bar-sidebar.svelte";
  import AdminPanel from "$lib/components/pages/admin/ui/admin-panel.svelte";
  import {
    Folder01FreeIcons,
    GlobalEditingIcon,
    Home01FreeIcons,
    ManagerFreeIcons,
    Phone,
    UserSearch01FreeIcons,
  } from "@hugeicons/core-free-icons";
</script>

<AdminPanel>
  {#snippet appsidebar()}
    <MenuBarSidebar
      menusButtons={[]}
      menus={[
        { icon: Home01FreeIcons, title: "Página inicial", url: "#" },
        { icon: UserSearch01FreeIcons, title: "Utilizadores", url: "#" },
        {
          icon: ManagerFreeIcons,
          title: "Gestão",
          submenus: [
            { icon: GlobalEditingIcon, title: "Galeria", url: "#" },
            { icon: Folder01FreeIcons, title: "Ficheiro", url: "#" },
            { icon: Phone, title: "Telefone", url: "#" },
          ],
        },
      ]}
      user={{
        user: {
          name: "Sedrac",
          email: "slcsedrac@gmail.com",
        },
      }}
    />
  {/snippet}
</AdminPanel>
