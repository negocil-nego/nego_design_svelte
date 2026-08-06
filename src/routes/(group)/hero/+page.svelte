<script lang="ts">
  import SimpleHero from "$lib/components/core/hero/SimpleHero.svelte";
  import type { HeroSimpleProps } from "$lib/components/core/hero/types";

  let props: HeroSimpleProps = $state({
    title: "Negócios e Turismo",
    subTitle: "Desenvolvimento de Projetos",
    description:
      "Negócios e Turismo: Onde o empreendedorismo encontra o mundo dos negócios. ",
    image:
      "https://images.unsplash.com/photo-1785788684002-f500e756047d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    buttons: [
      { href: "#", label: "Saiba mais", className: "" },
      { href: "#", label: "Saiba mais", className: "" },
    ],
  });
</script>

<SimpleHero {...props} />
