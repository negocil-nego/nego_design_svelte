<script>
  import { CarouselHero } from "$lib";
  import SearchHostingerInput from "$lib/components/ui/search/varients/SearchHostingerInput.svelte";
</script>

<CarouselHero
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
  simpleMenu={{
    logo: { url: "/", label: "Negoturismo", className: "text-white" },
    linkClass: "text-white",
    links: [
      { label: "Hospedagem", url: "#", icon: "bed-double" },
      { label: "Voos", url: "#", icon: "rocket-01" },
      { label: "Tradutores", url: "#", icon: "message-01" },
    ],
    isLanguageSwitcher: false,
    isThemeSwitch: false,
    buttonClass: "text-white",
    onclickButtonLogin: () => alert("login"),
    onclickButtonRegister: () => alert("register"),
  }}
>
  <div
    class="w-11/12 md:w-225 lg:w-11/12 mt-3 mb-10 space-y-2 flex flex-col items-center justify-center"
    style="z-index: 999;"
  >
    <div class="px-2 md:px-0 md:w-8/12" style="z-index: 999;">
      <SearchHostingerInput />
    </div>
  </div>
</CarouselHero>
