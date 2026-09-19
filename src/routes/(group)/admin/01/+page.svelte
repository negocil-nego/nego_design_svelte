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
                { icon: "home-01", title: $t("label.home"), url: "#" },
                {
                    icon: "user-search-01",
                    title: $t("label.users"),
                    url: "#",
                },
                {
                    icon: "manager",
                    title: $t("label.manager"),
                    submenus: [
                        {
                            icon: "global-editing",
                            title: $t("label.folder"),
                            url: "#",
                        },
                        {
                            icon: "folder-01",
                            title: $t("label.file"),
                            url: "#",
                        },
                        { icon: "smart-phone-02", title: $t("label.account"), url: "#" },
                    ],
                },
            ]}
            menusButtons={[
                { icon: "help-circle", title: $t("label.help") },
                { icon: "setting-07", title: $t("label.settings") },
            ]}
        />
    {/snippet}
</AdminPanel>
