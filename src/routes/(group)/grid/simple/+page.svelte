<script lang="ts">
    import SimpleGrid from "$lib/components/ui/grid/core/ui/ItemsSimpleGrid.svelte";
</script>

<SimpleGrid
  isLoading
  items={[
    {
      icon: "sparkles",
      title: "Café",
      description: "Café com leite e pão de queijo para começar bem o dia",
    },
    {
      icon: "money-01",
      title: "Computador",
      description: "Computador com internet para trabalhar",
    },
    {
      icon: "smart-phone-02",
      title: "Telefone",
      description: "Telefone com internet para trabalhar",
    },
    {
      icon: "component",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: "component",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: "component",
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
  ]}
/>
