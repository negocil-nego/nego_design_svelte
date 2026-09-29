<script>
    import AdminPanel from "$lib/components/pages/admin/shared/AdminPanel.svelte";
    import MenuBarSidebar from "$lib/components/ui/sidebar/core/MenuBarSidebar.svelte";
    import { t } from "$lib/i18n";
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
                { icon: "Home01Icon", title: $t("label.home"), url: "#" },
                {
                    icon: "UserSearch01Icon",
                    title: $t("label.users"),
                    url: "#",
                },
                {
                    icon: "ManagerIcon",
                    title: $t("label.manager"),
                    submenus: [
                        {
                            icon: "GlobalEditingIcon",
                            title: $t("label.folder"),
                            url: "#",
                        },
                        {
                            icon: "Folder01Icon",
                            title: $t("label.file"),
                            url: "#",
                        },
                        { icon: "SmartPhone02Icon", title: $t("label.account"), url: "#" },
                    ],
                },
            ]}
            menusButtons={[
                { icon: "HelpCircleIcon", title: $t("label.help") },
                { icon: "Setting07Icon", title: $t("label.settings") },
            ]}
        />
    {/snippet}
</AdminPanel>
