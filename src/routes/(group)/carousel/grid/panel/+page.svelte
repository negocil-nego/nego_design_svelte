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
  ];
</script>

<div class="container mx-auto px-4 py-8">
  <CarouselItemsPanel
    gridColumns={3}
    rowColumns={3}
    variant={1}
    items={sampleItems}
    headerProps={{
      title: "Grade de Turismo (3x3)",
      description: "Itens agrupados e paginados em carousel",
    }}
    slotProps={{
      positionButtonPreviousAndNext: "top_right",
      isButtonPreviousAndNext: true,
    }}
  />
</div>
