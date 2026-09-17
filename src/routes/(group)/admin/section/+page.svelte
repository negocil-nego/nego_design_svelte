<script lang="ts">
    import AdminSection from "$lib/components/pages/admin/shared/section/AdminSection.svelte";
    import type {
        AdminSectionMenuItem,
        AdminSectionCard,
    } from "$lib/components/pages/admin/shared/section/types";
    import {
        Analytics01Icon,
        DashboardSquare01Icon,
        Money01Icon,
        Payment01Icon,
        PieChartIcon,
        ShoppingBasket01Icon,
        UserMultipleIcon,
        Wallet01Icon,
    } from "@hugeicons/core-free-icons";

    let selectedKey = $state<string | number>("overview");

    const user = {
        name: "Sedrac",
        email: "slcsedrac@gmail.com",
        avatarUrl: "https://github.com/octocat.png",
        onProfile: () => console.log("profile"),
        onSettings: () => console.log("settings"),
    };

    const menuItems: AdminSectionMenuItem[] = [
        { id: "overview", title: "Overview", icon: DashboardSquare01Icon },
        { id: "revenue", title: "Revenue", icon: Money01Icon },
        { id: "analytics", title: "Analytics", icon: Analytics01Icon },
    ];

    const cards: AdminSectionCard[] = [
        {
            id: 1,
            menuId: "overview",
            icon: UserMultipleIcon,
            value: "2.450",
            title: "Total clients",
            description: "+12% vs previous month",
        },
        {
            id: 2,
            menuId: "overview",
            icon: ShoppingBasket01Icon,
            value: "8.320",
            title: "Orders",
            description: "340 awaiting fulfilment",
        },
        {
            id: 3,
            menuId: "revenue",
            icon: Wallet01Icon,
            value: "$84.120",
            title: "Gross revenue",
            description: "Last 30 days",
        },
        {
            id: 4,
            menuId: "revenue",
            icon: Payment01Icon,
            value: "2.140",
            title: "Payments",
            description: "99.2% success rate",
        },
        {
            id: 5,
            menuId: "analytics",
            icon: PieChartIcon,
            value: "64%",
            title: "Conversion rate",
            description: "+8% vs last week",
        },
        {
            id: 6,
            menuId: "analytics",
            icon: Analytics01Icon,
            value: "18.9k",
            title: "Total visits",
            description: "Peak at 4 PM daily",
        },
    ];

    function handleSelect(id: string | number) {
        selectedKey = id;
    }
</script>

<div class="p-3">
    <AdminSection
        title="Dashboard"
        {user}
        {menuItems}
        {cards}
        {selectedKey}
        onSelect={handleSelect}
        onCardClick={(id) => console.log("card", id)}
    />
</div>
