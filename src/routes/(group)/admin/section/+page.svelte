<script lang="ts">
  import AdminSection from "$lib/components/pages/admin/shared/section/AdminSection.svelte";
  import AdminUserSectionMobile from "$lib/components/pages/admin/shared/section/AdminUserSectionMobile.svelte";
  import type { AdminSectionCardProps } from "$lib/components/pages/admin/shared/section/types";
  import AdminTabs from "$lib/components/pages/admin/shared/tabs/AdminTabs.svelte";
  import type { NavMenuLinksProps } from "$lib/components/ui/nav/data/nav-menu";
  
  let selectedKey = $state<string | number>("overview");

  const user = {
    name: "Sedrac",
    email: "slcsedrac@gmail.com",
    avatarUrl: "https://github.com/octocat.png",
    onProfile: () => console.log("profile"),
    onSettings: () => console.log("settings"),
  };

  const menuItems: NavMenuLinksProps[] = [
    {
      key: "overview",
      label: "Overview",
      url: "#overview",
      icon: "dashboard-square-01",
    },
    {
      key: "revenue",
      label: "Revenue",
      url: "#revenue",
      icon: "money-01",
    },
    {
      key: "analytics",
      label: "Analytics",
      url: "#analytics",
      icon: "analytics-01",
    },
  ];

  const cards: AdminSectionCardProps[] = [
    {
      id: 1,
      menuId: "overview",
      icon: "user-multiple",
      value: "2.450",
      title: "Total clients",
      iconClass: "bg-red-900/70 rounded-full! text-white",
    },
    {
      id: 2,
      menuId: "overview",
      icon: "shopping-basket-01",
      value: "8.320",
      title: "Orders",
      iconClass: "bg-lime-900/70 rounded-full! text-white",
    },
    {
      id: 3,
      menuId: "revenue",
      icon: "wallet-01",
      value: "$84.120",
      title: "Gross revenue",
      iconClass: "bg-yellow-900/70 rounded-full! text-white",
    },
    {
      id: 4,
      menuId: "revenue",
      icon: "payment-01",
      value: "2.140",
      title: "Payments",
      iconClass: "bg-purple-900/70 rounded-full! text-white",
    },
  ];

  function handleSelect(id: string | number) {
    selectedKey = id;
  }
</script>

<div class="space-y-5 p-3">
  <AdminSection
    logo={{
      src: "https://plus.unsplash.com/premium_photo-1789200609644-cbcd8711dae2?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      textClass: "text-white font-bold ml-1 text-lg",
      text: "Negodesign",
    }}
    {user}
    {menuItems}
    {cards}
    {selectedKey}
    onSelect={handleSelect}
    onCardClick={(id) => console.log("card", id)}
  />
  <AdminTabs
    profileTab={{
      valuesUser: {
        firstName: "Sedrac",
        lastName: "SLC",
        email: "slcsedrac@gmail.com",
        phone: "+244 923 456 789",
      },
      valuesAddress: {
        streetNumber: "12",
        neighborhood: "Maculusso",
        state: "Luanda",
      },
      valuesSocial: {
        whatsapp: "https://wa.me/244923456789",
        instagram: "https://instagram.com/sedrac.slc",
      },
      onSubmitUser: (data) => console.log("profile", data),
      onSubmitAddress: (data) => console.log("address", data),
      onSubmitSocial: (data) => console.log("social", data),
    }}
    securityTab={{}}
  />
</div>
