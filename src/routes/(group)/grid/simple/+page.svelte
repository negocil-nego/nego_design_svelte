<script lang="ts">
    import SimpleGrid from "$lib/components/ui/grid/core/ui/ItemsSimpleGrid.svelte";
</script>

<SimpleGrid
  isLoading
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
  ]}
/>
