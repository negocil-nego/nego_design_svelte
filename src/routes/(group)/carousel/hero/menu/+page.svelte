<script>
  import { CarouselHero } from "$lib";
  import {
    AirplaneTakeOff02Icon,
    ConversationIcon,
    Hotel01Icon,
  } from "@hugeicons/core-free-icons";
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
  navMenu={{
    menus: [
      {
        label: "Inicio",
        href: "/",
      },
      {
        label: "Novidade",
        header: {
          href: "/novidade",
          label: "Novidades",
          description: "Novidades em primeira mão",
        },
        cards: [
          {
            title: "Lorem",
            href: "/",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
          },
          {
            title: "Peasure",
            href: "/",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
          },
        ],
      },
      {
        label: "Lista",
        list: [
          {
            title: "Lorem",
            href: "/",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
          },
          {
            title: "Peasure",
            href: "/",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
          },
        ],
      },
      {
        label: "Grelha",
        grids: [
          {
            title: "Lorem",
            href: "/",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
          },
          {
            title: "Peasure",
            href: "/",
            content:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumm",
          },
        ],
      },
      {
        label: "Ajuda",
        items: [
          {
            title: "Lorem",
            href: "/",
          },
          {
            title: "Peasure",
            href: "/",
          },
        ],
      },
    ],
  }}
/>
