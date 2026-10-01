<script lang="ts">
  import CarouselItemsPanel from "$lib/components/ui/carousel/core/panel/CarouselItemsPanel.svelte";
  import type { ItemGridProps } from "$lib/types";

  const sampleItems: ItemGridProps[] = [
    {
      id: "1",
      icon: "SparklesIcon",
      title: "Praias Paradisíacas",
      description: "Descubra as praias mais bonitas e águas cristalinas",
      iconClass: "text-blue-500",
    },
    {
      id: "2",
      icon: "Hotel01Icon",
      title: "Resorts & Hotéis",
      description: "Hospedagem com todo conforto, requinte e sofisticação",
      iconClass: "text-amber-500",
    },
    {
      id: "3",
      icon: "Airplane01Icon",
      title: "Voos & Pacotes",
      description: "Passagens aéreas com os melhores descontos do mercado",
      iconClass: "text-sky-500",
    },
    {
      id: "4",
      icon: "Restaurant01Icon",
      title: "Gastronomia Local",
      description: "Experimente os pratos típicos e sabores inesquecíveis",
      iconClass: "text-red-500",
    },
    {
      id: "5",
      icon: "Compass01Icon",
      title: "Passeios & Trilhas",
      description: "Guias credenciados e trilhas em cenários naturais",
      iconClass: "text-emerald-500",
    },
    {
      id: "6",
      icon: "Camera01Icon",
      title: "Fotografia & Tours",
      description: "Pontos turísticos icônicos para eternizar seus momentos",
      iconClass: "text-purple-500",
    },
    {
      id: "7",
      icon: "Car01Icon",
      title: "Aluguel de Carros",
      description: "Mobilidade e liberdade para explorar cada canto do destino",
      iconClass: "text-indigo-500",
    },
    {
      id: "8",
      icon: "Ticket01Icon",
      title: "Eventos & Shows",
      description: "Ingressos para as principais atrações e festivais locais",
      iconClass: "text-orange-500",
    },
    {
      id: "9",
      icon: "Shield01Icon",
      title: "Seguro Viagem",
      description: "Tranquilidade garantida em qualquer imprevisto na viagem",
      iconClass: "text-teal-500",
    },
    {
      id: "10",
      icon: "Ship01Icon",
      title: "Cruzeiros & Barcos",
      description: "Navegações costeiras e passeios privativos de lancha",
      iconClass: "text-cyan-500",
    },
    {
      id: "11",
      icon: "Mountain01Icon",
      title: "Ecoturismo",
      description: "Preservação, natureza exuberante e montanhas",
      iconClass: "text-green-600",
    },
    {
      id: "12",
      icon: "Sun01Icon",
      title: "Mergulho & Mar",
      description: "Explore a vida marinha em recifes preservados",
      iconClass: "text-yellow-500",
    },
  ];

  let selectedId = $state<string | number | null>(null);
</script>

<div class="container mx-auto px-4 py-8 space-y-12">
  <section class="space-y-4">
    <div class="border-b pb-2">
      <h1 class="text-3xl font-bold">CarouselItemsPanel — Demo</h1>
      <p class="text-muted-foreground">
        Carousel de itens em grade (Grid01 / Grid02) com paginação configurável por colunas e linhas.
      </p>
    </div>

    {#if selectedId}
      <div class="rounded-lg bg-primary/10 border border-primary/20 p-3 text-sm text-primary">
        Item selecionado: <strong>ID {selectedId}</strong>
      </div>
    {/if}

    <!-- Exemplo 1: Grade 3x2 (6 itens por slide) com variante 1 -->
    <div class="rounded-2xl border bg-card p-4 md:p-6 shadow-xs">
      <CarouselItemsPanel
        gridColumns={3}
        rowColumns={2}
        variant={1}
        items={sampleItems}
        headerProps={{
          title: "Categorias em Destaque (Grade 3x2)",
          description: "Navegue pelas categorias de turismo disponíveis",
        }}
        slotProps={{
          positionButtonPreviousAndNext: "top_right",
          isButtonPreviousAndNext: true,
        }}
        onClick={(id) => {
          selectedId = id;
          console.log("Selecionado:", id);
        }}
      />
    </div>

    <!-- Exemplo 2: Grade 4x1 com variante 2 e fundo customizado -->
    <div class="rounded-2xl border bg-card p-4 md:p-6 shadow-xs">
      <CarouselItemsPanel
        gridColumns={4}
        rowColumns={1}
        variant={2}
        items={sampleItems}
        itemClassName="bg-muted/40 hover:bg-muted/80 transition-colors"
        headerProps={{
          title: "Acesso Rápido (Grade 4x1 — Variante 2)",
          description: "Serviços recomendados para a sua viagem",
        }}
        slotProps={{
          positionButtonPreviousAndNext: "top_right",
          isButtonPreviousAndNext: true,
        }}
        onClick={(id) => {
          selectedId = id;
          console.log("Selecionado:", id);
        }}
      />
    </div>

    <!-- Exemplo 3: Loading Skeleton -->
    <div class="rounded-2xl border bg-card p-4 md:p-6 shadow-xs">
      <CarouselItemsPanel
        gridColumns={3}
        rowColumns={2}
        isLoading={true}
        items={[]}
        headerProps={{
          title: "Estado de Carregamento (Loading Skeleton)",
          description: "Exemplo com esqueletos animados em grade",
        }}
        slotProps={{
          positionButtonPreviousAndNext: "top_right",
        }}
      />
    </div>
  </section>
</div>
