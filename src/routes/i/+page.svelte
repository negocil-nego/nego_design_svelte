<script lang="ts">
  import { CarouselHero } from "$lib";
  import ItemsPanel from "$lib/components/ui/grid/core/shared/ui/ItemsPanel.svelte";
  import SearchHostingerInput from "$lib/components/ui/search/varients/SearchHostingerInput.svelte";
</script>

<CarouselHero
  className="lg:h-100"
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
  menusProps={{
    isThemeSwitch: true,
    isLanguageSwitcher: true,
    logo: {
      label: "Negoturismo",
      className: "text-white",
      url: "/negoturismo_icone_aviao.svg",
    },
    navMenuButton: {
      textButtonLogin: "Entrar",
      textButtonRegister: "Registrar",
      onclickButtonLogin: () => {},
      onclickButtonRegister: () => {},
      buttonClass: "bg-primary text-white",
    },
    groupClass: "text-white",
  }}
  complexMenu={{
    logo: { url: "/", label: "Negoturismo", className: "text-white" },
    linkClass: "text-white",
    menus: [
      { label: "Hospedagem", href: "#" },
      { label: "Voos", href: "#" },
      { label: "Tradutores", href: "#" },
    ],
  }}
>
  <div
    class="w-11/12 md:w-225 lg:w-11/12 mt-3 mb-10 space-y-2 flex flex-col items-center justify-center"
  >
    <div class="px-2 md:px-0 w-full">
      <SearchHostingerInput />
    </div>
  </div>
</CarouselHero>

<ItemsPanel
  variant={2}
  style="inline"
  itemClassName="bg-amber-50 border-none"
  isShowDescription={false}
  slotProps={{
    positionButtonPreviousAndNext: "top_right",
    isButtonPreviousAndNext: true,
    onMoreViewClick: () => alert(`/organization`),
  }}
  items={[
    {
      icon: "SparklesIcon",
      title: "Café",
      description: "Café com leite e pão de queijo para começar bem o dia",
    },
    {
      icon: "Money01Icon",
      title: "Computador",
      description: "Computador com internet para trabalhar",
    },
    {
      icon: "SmartPhone02Icon",
      title: "Telefone",
      description: "Telefone com internet para trabalhar",
    },
    {
      icon: "ComponentIcon",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: "ComponentIcon",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: "ComponentIcon",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: "SparklesIcon",
      title: "Café",
      description: "Café com leite e pão de queijo para começar bem o dia",
    },
    {
      icon: "Money01Icon",
      title: "Computador",
      description: "Computador com internet para trabalhar",
    },
    {
      icon: "SmartPhone02Icon",
      title: "Telefone",
      description: "Telefone com internet para trabalhar",
    },
    {
      icon: "ComponentIcon",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: "ComponentIcon",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: "ComponentIcon",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: "SparklesIcon",
      title: "Café",
      description: "Café com leite e pão de queijo para começar bem o dia",
    },
    {
      icon: "Money01Icon",
      title: "Computador",
      description: "Computador com internet para trabalhar",
    },
    {
      icon: "SmartPhone02Icon",
      title: "Telefone",
      description: "Telefone com internet para trabalhar",
    },
    {
      icon: "ComponentIcon",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: "ComponentIcon",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: "ComponentIcon",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
  ]}
/>

<!-- <div class="relative flex justify-center mt-10">
  <CarouselBadge
    orientation="horizontal"
    iconClass="size-6"
    onClick={(value: string | number) => console.log(value)}
    items={[
      {
        label: "Todos",
        value: "hospegadem",
        icon: "DashboardCircleAddIcon",
      },
      { label: "Hotel", value: "hotel", icon: "BedDoubleIcon" },
      { label: "Hospedaria", value: "hospedaria", icon: "BedDoubleIcon" },
      { label: "Pensão", value: "pensao", icon: "BedDoubleIcon" },
    ]}
    itemStyle="INLINE"
    showButton={true}
    isBorderInline
  />
</div> -->
