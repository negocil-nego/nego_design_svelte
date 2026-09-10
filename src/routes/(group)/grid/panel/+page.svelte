<script lang="ts">
  import {
    Coffee03Icon,
    Money01Icon,
    PhoneCall,
    TestTube02Icon,
  } from "@hugeicons/core-free-icons";
  import ItemsPanel from "$lib/components/ui/grid/core/ui/ItemsPanel.svelte";
</script>

<ItemsPanel
  variant={2}
  style="inline"
  itemClassName="bg-amber-50 border-none"
  items={[
    {
      icon: Coffee03Icon,
      title: "Café",
      description: "Café com leite e pão de queijo para começar bem o dia",
    },
    {
      icon: Money01Icon,
      title: "Computador",
      description: "Computador com internet para trabalhar",
    },
    {
      icon: PhoneCall,
      title: "Telefone",
      description: "Telefone com internet para trabalhar",
    },
    {
      icon: TestTube02Icon,
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: TestTube02Icon,
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
    {
      icon: TestTube02Icon,
      title: "Teste",
      description: "Teste com internet para trabalhar",
    },
  ]}
/>
