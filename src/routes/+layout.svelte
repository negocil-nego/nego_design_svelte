<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import NegoDesign from "$lib/components/NegoDesign.svelte";
  import SimpleBadgeCarousel from "$lib/components/core/carousel/shared/ui/SimpleBadgeCarousel.svelte";
  import NavMenu from "$lib/components/core/nav/ui/nav-menu.svelte";
  import SearchInput from "$lib/components/core/search/SearchInput.svelte";
  import {
    AirplaneTakeOff02Icon,
    BedDoubleIcon,
    ConversationIcon,
    DashboardCircleIcon,
    Hotel01Icon,
    Hotel02Icon,
  } from "@hugeicons/core-free-icons";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<NegoDesign>
  <div
    class="flex flex-col justify-center items-center bg-gradient-left pb-5 border-b"
  >
    <div
      class="container-fixed flex flex-col justify-center items-center gap-2 md:gap-5"
    >
      <NavMenu
        logo={{
          label: "Negoturismo",
          className: "text-white",
        }}
        linkClass="text-white"
        buttonClass="bg-white text-black dark:bg-black dark:text-white"
        links={[
          { label: "Hospegadem", href: "#", icon: Hotel01Icon },
          { label: "Voos", href: "#", icon: AirplaneTakeOff02Icon },
          { label: "Tradutores", href: "#", icon: ConversationIcon },
        ]}
        onclickButtonLogin={() => alert("login")}
        onclickButtonRegister={() => alert("register")}
      />
      <SearchInput
        variant={1}
        buttonClass="bg-gradient-left"
        onSubmit={(q) => {
          alert(q);
        }}
      />
    </div>
  </div>
  <div class="relative">
    <SimpleBadgeCarousel
      buttonPreviousAndNextClass="bg-blue-900 text-white dark:bg-black dark:text-white"
      orientation="vertical"
      isBorderItem={false}
      iconClass="size-6"
      items={[
        {
          label: "Todos",
          value: "hospegadem",
          icon: DashboardCircleIcon,
        },
        { label: "Hotel", value: "hotel", icon: Hotel01Icon },
        { label: "Hospedaria", value: "hospedaria", icon: Hotel02Icon },
        { label: "Pensão", value: "pensao", icon: BedDoubleIcon },
      ]}
    />
  </div>
  {@render children()}
</NegoDesign>
