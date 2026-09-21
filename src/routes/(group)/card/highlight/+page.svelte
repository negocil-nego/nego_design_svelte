<script lang="ts">
  import { CardHighlight } from "$lib";

  const items = [
    {
      id: 1,
      title: "Hotel Presidente",
      content: "Hotel 5 estrelas no centro da cidade com vista panorâmica.",
      imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400",
      logo: "https://ui-avatars.com/api/?name=HP&background=0D8ABC&color=fff",
      tags: [{ text: "Premium" }, { text: " Estrelas" }],
      isFavorite: false,
      buttonText: "Ver detalhes",
    },
    {
      id: 2,
      title: "Resort Palmeiras",
      content: "Resort à beira-mar com piscina infinita e spa.",
      imageUrl: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400",
      tags: [{ text: "Luxo" }],
      isFavorite: true,
      buttonText: "Reservar",
    },
    {
      id: 3,
      title: "Pousada Serra Azul",
      content: "Pousada rústica nas montanhas com café da manhã incluso.",
      imageUrl: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=400",
      tags: [{ text: "Rústico" }, { text: " Natureza" }],
      isFavorite: false,
      buttonText: "Explorar",
    },
  ];
</script>

<svelte:head>
  <title>CardHighlight Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">CardHighlight</h1>
  <p class="mt-2 text-muted-foreground">
    Card de destaque com imagem, logo, tags e botão de ação. Possui 2 variantes visuais.
  </p>

  <div class="mt-8 space-y-8">
    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground mb-4">Variant 1</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each items as item (item.id)}
          <CardHighlight
            varient={1}
            {...item}
            onClickBtn={(id) => console.log("click", id)}
            onClickFavorite={(id) => console.log("favorite", id)}
          />
        {/each}
      </div>
    </section>

    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground mb-4">Variant 2</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each items as item (item.id)}
          <CardHighlight
            varient={2}
            {...item}
            onClickBtn={(id) => console.log("click", id)}
            onClickFavorite={(id) => console.log("favorite", id)}
          />
        {/each}
      </div>
    </section>
  </div>
</div>
