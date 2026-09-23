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
      { label: "Hospegadem", href: "#", icon: "bed-double" },
      { label: "Voos", href: "#", icon: "rocket-01" },
      { label: "Tradutores", href: "#", icon: "message-01" },
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
      { label: "Todos", value: "hospegadem", icon: "dashboard-circle-add" },
      { label: "Hotel", value: "hotel", icon: "bed-double" },
      { label: "Hospedaria", value: "hospedaria", icon: "bed-double" },
      { label: "Pensão", value: "pensao", icon: "bed-double" },
    ]}
  />
</div>
