<script lang="ts">
  import { CarouselHero, Menu, VisibilityFallback } from "$lib";
  import SearchHostingerInput from "$lib/components/ui/search/varients/SearchHostingerInput.svelte";
  import type { NavMenuLinksProps } from "$lib/types";

  const heroSlides = [
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
  ];

  const menuLinks: NavMenuLinksProps[] = [
    { label: "Hospedagem", url: "#hospedagem", icon: "BedDoubleIcon" },
    { label: "Voos", url: "#voos", icon: "Rocket01Icon" },
    { label: "Tradutores", url: "#tradutores", icon: "Message01Icon" },
  ];
</script>

<div class="w-full space-y-12 pb-24">
  <!-- Componente VisibilityFallback com CarouselHero e Menu Fixo -->
  <VisibilityFallback
    fixed={true}
    fixedPosition="top"
    animation="animate__fadeIn"
    fallbackAnimation="animate__slideInDown animate__faster"
    fixedClass="w-full shadow-lg border-b bg-background/95 backdrop-blur-md transition-all"
  >
    {#snippet fallback({ isVisible, isFixed })}
      <div class="w-full bg-background/95 backdrop-blur-md shadow-md border-b">
        <Menu
          logo={{ url: "/", label: "Negoturismo" }}
          isBorder={false}
          isThemeSwitch={true}
          isLanguageSwitcher={true}
          navMenu={{
            links: menuLinks,
          }}
          navMenuButton={{
            textButtonLogin: "Entrar",
            textButtonRegister: "Registrar",
            onclickButtonLogin: () => alert("Login clicado"),
            onclickButtonRegister: () => alert("Registrar clicado"),
            buttonClass: "bg-primary text-primary-foreground",
          }}
        />
      </div>
    {/snippet}

    <CarouselHero
      className="lg:h-120"
      items={heroSlides}
      simpleMenu={{
        logo: { url: "/", label: "Negoturismo", className: "text-white" },
        linkClass: "text-white",
        links: menuLinks,
        isLanguageSwitcher: false,
        isThemeSwitch: false,
        buttonClass: "text-white",
        onclickButtonLogin: () => alert("Login no CarouselHero"),
        onclickButtonRegister: () => alert("Registrar no CarouselHero"),
      }}
    >
      <div
        class="w-11/12 md:w-225 lg:w-11/12 mt-3 mb-8 space-y-2 flex flex-col items-center justify-center"
      >
        <div class="px-2 md:px-0 md:w-8/12">
          <SearchHostingerInput />
        </div>
      </div>
    </CarouselHero>
  </VisibilityFallback>

  <!-- Conteúdo abaixo para permitir scroll e visualização do Menu Fixo -->
  <div class="container mx-auto px-4 space-y-16 max-w-5xl">
    <div
      class="p-6 rounded-2xl bg-muted/40 border border-border text-center space-y-2"
    >
      <p class="text-base font-semibold text-foreground">
        ⬇️ Role para baixo para ver o componente Menu fixado no topo ⬇️
      </p>
      <p class="text-xs text-muted-foreground">
        Quando o CarouselHero sai da tela, o VisibilityFallback ativa o Menu no
        topo com animação suave.
      </p>
    </div>

    <section id="hospedagem" class="space-y-6">
      <div class="border-b pb-3">
        <h2 class="text-2xl font-bold">Hospedagens em Destaque</h2>
        <p class="text-sm text-muted-foreground">
          Encontre os melhores locais para a sua estadia
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div
          class="rounded-xl border overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            class="h-48 bg-cover bg-center"
            style="background-image: url('https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80');"
          ></div>
          <div class="p-5 space-y-2">
            <h3 class="font-bold text-lg">Resort Vista Paradisíaca</h3>
            <p class="text-xs text-muted-foreground">
              Luanda, Angola • 5 estrelas
            </p>
            <p class="text-sm font-semibold text-primary">
              A partir de $120 / noite
            </p>
          </div>
        </div>

        <div
          class="rounded-xl border overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            class="h-48 bg-cover bg-center"
            style="background-image: url('https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80');"
          ></div>
          <div class="p-5 space-y-2">
            <h3 class="font-bold text-lg">Hotel Boutique Central</h3>
            <p class="text-xs text-muted-foreground">
              Benguela, Angola • Conforto & Charme
            </p>
            <p class="text-sm font-semibold text-primary">
              A partir de $85 / noite
            </p>
          </div>
        </div>

        <div
          class="rounded-xl border overflow-hidden bg-card shadow-sm hover:shadow-md transition-shadow"
        >
          <div
            class="h-48 bg-cover bg-center"
            style="background-image: url('https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=80');"
          ></div>
          <div class="p-5 space-y-2">
            <h3 class="font-bold text-lg">Eco Lodge Serenidade</h3>
            <p class="text-xs text-muted-foreground">
              Huíla, Angola • Imersão na Natureza
            </p>
            <p class="text-sm font-semibold text-primary">
              A partir de $95 / noite
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="voos" class="space-y-6">
      <div class="border-b pb-3">
        <h2 class="text-2xl font-bold">Ofertas de Voos</h2>
        <p class="text-sm text-muted-foreground">
          Rotas com tarifas especiais esta semana
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div
          class="p-5 rounded-xl border bg-card flex items-center justify-between"
        >
          <div class="space-y-1">
            <div
              class="text-xs font-semibold text-primary uppercase tracking-wide"
            >
              Direto
            </div>
            <h4 class="font-bold text-base">Luanda (LAD) ➔ Lisboa (LIS)</h4>
            <p class="text-xs text-muted-foreground">Voo noturno • 7h 45m</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-muted-foreground block">ida e volta</span>
            <span
              class="text-lg font-bold text-emerald-600 dark:text-emerald-400"
              >$640</span
            >
          </div>
        </div>

        <div
          class="p-5 rounded-xl border bg-card flex items-center justify-between"
        >
          <div class="space-y-1">
            <div
              class="text-xs font-semibold text-primary uppercase tracking-wide"
            >
              Direto
            </div>
            <h4 class="font-bold text-base">Luanda (LAD) ➔ São Paulo (GRU)</h4>
            <p class="text-xs text-muted-foreground">Voo diurno • 8h 20m</p>
          </div>
          <div class="text-right">
            <span class="text-xs text-muted-foreground block">ida e volta</span>
            <span
              class="text-lg font-bold text-emerald-600 dark:text-emerald-400"
              >$780</span
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</div>
