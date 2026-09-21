<script lang="ts">
  import CardPromotion from "$lib/components/ui/card/core/promotion/CardPromotion.svelte";

  const items = [
    {
      id: 1,
      title: "Pacote Lua de Mel",
      content: "7 noites em Fernando de Noronha com passeios inclusos.",
      imageUrl:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400",
      logo: "https://ui-avatars.com/api/?name=PM&background=E91E63&color=fff",
      tags: [{ text: "Promoção" }],
      oldPrice: "450.000 Kz",
      newPrice: "320.000 Kz",
      buttonBuyText: "Comprar agora",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Fim de Semana Relax",
      content: "2 noites em resort com spa e café da manhã.",
      imageUrl:
        "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400",
      tags: [{ text: "Oferta" }],
      oldPrice: "180.000 Kz",
      newPrice: "120.000 Kz",
      buttonBuyText: "Reservar",
      isFavorite: true,
    },
    {
      id: 3,
      title: "Aventura na Serra",
      sendo: "3 noites com trilhas e cachoeiras.",
      imageUrl:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400",
      oldPrice: "250.000 Kz",
      newPrice: "180.000 Kz",
      buttonBuyText: "Comprar",
      isFavorite: false,
    },
  ];
</script>

<svelte:head>
  <title>CardPromotion Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">CardPromotion</h1>
  <p class="mt-2 text-muted-foreground">
    Card de promoção com preço antigo/novo, botão de comprar, favoritar e
    carrinho.
  </p>

  <section class="mt-8 rounded-xl border border-border bg-card p-6">
    <h2 class="text-sm font-semibold text-muted-foreground mb-4">Exemplo</h2>
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {#each items as item (item.id)}
        <CardPromotion
          {...item}
          onClickBuy={(id) => console.log("buy", id)}
          onClickShop={(id) => console.log("shop", id)}
          onClickFavorite={(id) => console.log("favorite", id)}
        />
      {/each}
    </div>
  </section>
</div>
