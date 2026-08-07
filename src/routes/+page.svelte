<script lang="ts">
  import CarouselHero from "$lib/components/core/carousel/hero/CarouselHero.svelte";
  import SimpleBadgeCarousel from "$lib/components/core/carousel/shared/ui/SimpleBadgeCarousel.svelte";
  import {
    AirplaneTakeOff02Icon,
    ConversationIcon,
    Hotel01Icon,
  } from "@hugeicons/core-free-icons";
</script>

<CarouselHero
  titleClass="md:text-2xl lg:text-4px md:my-2 mt-3"
  descriptionClass="text-xs md:text-lg md:w-3/5 mt-4 mb-2 text-white"
  navMenu={{
    logo: { url: "/", label: "Negoturismo", className: "text-white" },
    navClass: "w-11/12 mt-3 mb-5",
    linkClass: "text-white",
    groupClass: "gap-2 md:gap-20",
    links: [
      { label: "Hospedagem", url: "#", icon: Hotel01Icon },
      { label: "Voos", url: "#", icon: AirplaneTakeOff02Icon },
      { label: "Tradutores", url: "#", icon: ConversationIcon },
    ],
    isLanguageSwitcher: false,
    isLightSwitch: false,
    buttonClass: "text-white",
    onclickButtonLogin: () => alert("login"),
    onclickButtonRegister: () => alert("register"),
  }}
  items={[
    {
      title: "Encontre a hospedagem ideal",
      description:
        "Hotéis, guest houses e apartamentos verificados em todo o país, com reserva rápida e segura.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Voos para o seu próximo destino",
      description:
        "Compare e reserve voos nacionais e internacionais com as melhores companhias, sem complicações.",
      image:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Guias turísticos locais",
      description:
        "Explore com quem conhece o destino de verdade — guias experientes prontos para tornar a sua viagem inesquecível.",
      image:
        "https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "Tradutores e intérpretes à sua disposição",
      description:
        "Comunique sem barreiras: profissionais qualificados para o acompanhar em reuniões, passeios e negociações.",
      image:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1600&q=80",
    },
  ]}
>
  <div class="md:w-225 mb-10">
    <SimpleBadgeCarousel
      buttonPreviousAndNextClass="bg-[#00b627] text-white dark:bg-black dark:text-white"
      itemCarouselClass="text-white pt-1.5"
      iconClass="size-6"
      items={[
        {
          label: "Todos",
          value: "hospegadem",
          icon: "hgi hgi-stroke hgi-rounded hgi-second-bracket",
        },
        {
          label: "Hotel",
          value: "hotel",
          icon: "hgi hgi-stroke hgi-rounded hgi-second-bracket",
        },
        {
          label: "Hospedaria",
          value: "hospedaria",
          icon: "hgi hgi-stroke hgi-rounded hgi-second-bracket",
        },
        {
          label: "Pensão",
          value: "pensao",
          icon: "hgi hgi-stroke hgi-rounded hgi-second-bracket",
        },
      ]}
    />
  </div>
</CarouselHero>
