<script lang="ts">
  import { CardProduct } from "$lib";

  const items = [
    {
      id: 1,
      title: "Camiseta NegoDesign",
      content: "Camiseta 100% algodão com estampa exclusiva.",
      imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      tags: [{ text: "Novo" }],
      price: "25.000 Kz",
      rating: 4,
      buttonBuyText: "Adicionar ao carrinho",
      isFavorite: false,
    },
    {
      id: 2,
      title: "Mochila Travel Pro",
      content: "Mochila resistente à água com 40L de capacidade.",
      imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
      tags: [{ text: "Popular" }],
      price: "45.000 Kz",
      rating: 5,
      buttonBuyText: "Comprar",
      isFavorite: true,
    },
    {
      id: 3,
      title: "Boné Adventure",
      content: "Boné UV com ajuste traseiro.",
      imageUrl: "https://images.unsplash.com/photo-1588850561407-ed78c334e67a?w=400",
      price: "12.000 Kz",
      rating: 3,
      buttonBuyText: "Adicionar",
      isFavorite: false,
    },
  ];
</script>

<svelte:head>
  <title>CardProduct Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">CardProduct</h1>
  <p class="mt-2 text-muted-foreground">
    Card de produto com preço, rating, botão de comprar e favoritar. Possui 2 variantes visuais.
  </p>

  <div class="mt-8 space-y-8">
    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground mb-4">Variant 1</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each items as item (item.id)}
          <CardProduct
            variant={1}
            {...item}
            onClickBuy={(id) => console.log("buy", id)}
            onClickShop={(id) => console.log("shop", id)}
            onClickFavorite={(id) => console.log("favorite", id)}
          />
        {/each}
      </div>
    </section>

    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground mb-4">Variant 2</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each items as item (item.id)}
          <CardProduct
            variant={2}
            {...item}
            onClickBuy={(id) => console.log("buy", id)}
            onClickShop={(id) => console.log("shop", id)}
            onClickFavorite={(id) => console.log("favorite", id)}
          />
        {/each}
      </div>
    </section>
  </div>
</div>
