<script lang="ts">
  import GridItemsPanel from "$lib/components/ui/grid/core/panel/GridItemsPanel.svelte";
  import type { ItemGridProps } from "$lib/components/ui/grid/core/shared/data/types";

  const items: ItemGridProps[] = [
    {
      id: "1",
      icon: "SparklesIcon",
      title: "Praias",
      description: "Águas cristalinas",
    },
    {
      id: "2",
      icon: "Hotel01Icon",
      title: "Resorts & Hotéis",
      description: "Hospedagem de alto padrão",
    },
    {
      id: "3",
      icon: "Airplane01Icon",
      title: "Voos Promocionais",
      description: "Passagens com desconto",
    },
    {
      id: "4",
      icon: "Restaurant01Icon",
      title: "Gastronomia",
      description: "Culinária típica regional",
    },
    {
      id: "5",
      icon: "Compass01Icon",
      title: "Ecoturismo",
      description: "Passeios e trilhas ecológicas",
    },
    {
      id: "6",
      icon: "Camera01Icon",
      title: "Tours Fotográficos",
      description: "Pontos turísticos imperdíveis",
    },
  ];
</script>

<GridItemsPanel
  variant={1}
  {items}
  headerProps={{
    title: "Serviços e Destinos",
    description: "Confira as categorias disponíveis na plataforma",
    containerClass: "bg-gray-50 dark:bg-gray-800",
  }}
  onClick={(id: string | number) => console.log("item", id)}
/>
