<script>
  import PageLogin from "$lib/components/pages/security/login/PageLogin.svelte";
</script>

<PageLogin
  title="Negoturismo"
  formType="USERNAME_PASSWORD"
  carousel={[
    {
      title: "Encontre a hospedagem ideal",
      description:
        "Hotéis, guest houses e apartamentos verificados em todo o país, com reserva rápida e segura.",
      backgroundUrl:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=80",
      buttonText: "Entrar",
    },
    {
      title: "Guias turísticos locais",
      description:
        "Explore com quem conhece o destino de verdade — guias experientes prontos para tornar a sua viagem inesquecível.",
      backgroundUrl:
        "https://images.unsplash.com/photo-1552083375-1447ce886485?auto=format&fit=crop&w=1600&q=80",
      buttonText: "Entrar",
    },
    {
      title: "Tradutores e intérpretes à sua disposição",
      description:
        "Comunique sem barreiras: profissionais qualificados para o acompanhar em reuniões, passeios e negociações.",
      backgroundUrl:
        "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1600&q=80",
      buttonText: "Entrar",
    },
  ]}
  isLoading={false}
  onButtonBack={() => {}}
/>
