<script lang="ts">
  import DataTableCore from "$lib/components/core/datatable/ui/DataTableCore.svelte";
  import DataTableActions from "$lib/components/core/datatable/ui/DataTableActions.svelte";
  import MenuBarSidebar from "$lib/components/core/sidebar/menu-bar-sidebar.svelte";
  import AdminContent from "$lib/components/pages/admin/ui/admin-content.svelte";
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

  type Payment = {
    id: string;
    amount: number;
    status: "Pending" | "Processing" | "Success" | "Failed";
    email: string;
  };

  const data: Payment[] = [
    {
      id: "m5gr84i9",
      amount: 316,
      status: "Success",
      email: "ken99@yahoo.com",
    },
    {
      id: "3u1reuv4",
      amount: 242,
      status: "Success",
      email: "Abe45@gmail.com",
    },
    {
      id: "derv1ws0",
      amount: 837,
      status: "Processing",
      email: "Monserrat44@gmail.com",
    },
    {
      id: "5kma53ae",
      amount: 874,
      status: "Success",
      email: "Silas22@gmail.com",
    },
    {
      id: "bhqecj4p",
      amount: 721,
      status: "Failed",
      email: "carmella@hotmail.com",
    },
  ];
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
            {
              icon: GlobalEditingIcon,
              title: $t("label.folder"),
              url: "#",
            },
            {
              icon: Folder01FreeIcons,
              title: $t("label.file"),
              url: "#",
            },
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
  {#snippet content()}
    <AdminContent>
      <DataTableCore
        config={[
          { accessorKey: "email", header: "Email", cell: "email" },
          { accessorKey: "amount", header: "Amount", cell: "amount" },
          {
            accessorKey: "status",
            header: "Status",
            cell: "status",
            badge: [
              { value: "Pending", className: "bg-yellow-500" },
              { value: "Processing", className: "bg-blue-500" },
              { value: "Success", className: "bg-green-500" },
              { value: "Failed", className: "bg-red-500" },
            ],
          },
        ]}
        actions={DataTableActions}
        columnFilter="email"
        items={data}
      />
    </AdminContent>
  {/snippet}
</AdminPanel>
