<script lang="ts">
    import TabUnderline from "$lib/components/ui/tabs/ui/tab-underline.svelte";
    import { t } from "$lib/i18n";
    import AdminProfileTab from "./AdminProfileTab.svelte";
    import AdminSecurityTab from "./AdminSecurityTab.svelte";
    import type { AdminTabsProps } from "./types";

    let { profileTab, securityTab }: AdminTabsProps = $props();

    let hasProfile = $derived(profileTab != null);
    let hasSecurity = $derived(securityTab != null);
</script>

<TabUnderline
    items={[
        ...(hasProfile
            ? [
                  {
                      item: {
                          label: $t("label.profile"),
                          value: "profile",
                      },
                      children: profile,
                  },
              ]
            : []),
        ...(hasSecurity
            ? [
                  {
                      item: {
                          label: $t("label.security"),
                          value: "security",
                      },
                      children: security,
                  },
              ]
            : []),
    ]}
/>

{#snippet profile()}
    <AdminProfileTab {...profileTab} />
{/snippet}

{#snippet security()}
    <AdminSecurityTab {...securityTab} />
{/snippet}
