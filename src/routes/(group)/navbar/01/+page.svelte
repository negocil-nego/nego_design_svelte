<script lang="ts">
  import CarouselBadge from "$lib/components/ui/carousel/core/badge/ui/CarouselBadge.svelte";
  import NavMenu from "$lib/components/ui/nav/ui/SimpleMenu.svelte";
</script>

<div
  class="flex flex-col justify-center items-center gap-2 md:gap-5 bg-gradient pb-5 border-b"
>
  <NavMenu
    logo={{
      label: "Negoturismo",
      className: "text-white",
    }}
    linkClass="text-white"
    buttonClass="bg-white text-black dark:bg-black dark:text-white"
    links={[
      { label: "Hospegadem", href: "#", icon: "BedDoubleIcon" },
      { label: "Voos", href: "#", icon: "Rocket01Icon" },
      { label: "Tradutores", href: "#", icon: "Message01Icon" },
    ]}
    onclickButtonLogin={() => alert("login")}
    onclickButtonRegister={() => alert("register")}
  />
</div>
<div class="relative">
  <CarouselBadge
    btnNavClass="bg-[#00b627] text-white dark:bg-black dark:text-white"
    orientation="vertical"
    iconClass="size-6"
    items={[
      { label: "Todos", value: "hospegadem", icon: "DashboardCircleAddIcon" },
      { label: "Hotel", value: "hotel", icon: "BedDoubleIcon" },
      { label: "Hospedaria", value: "hospedaria", icon: "BedDoubleIcon" },
      { label: "Pensão", value: "pensao", icon: "BedDoubleIcon" },
    ]}
  />
</div>
