<script lang="ts">
  import { CardFlight } from "$lib";
  import type { CardFlightProps } from "$lib/types";

  const items: CardFlightProps[] = [
    {
      id: 1,
      title: "TAAG Luanda — Lubango",
      origin: "Luanda",
      destination: "Lubango",
      departureTime: "01 Mar, 08:30",
      arrivalTime: "01 Mar, 09:45",
      duration: "1h 15min",
      type: "FLIGHT",
      country: "ao",
      price: "85.000",
      currency: "Kz",
      content: "Voo directo com 20kg de bagagem incluídos.",
      tags: [{ icon: "Airplane01Icon", text: "Voo directo" }],
      isFavorite: true,
    },
    {
      id: 2,
      title: "Interprovincial Benguela",
      origin: "Luanda",
      destination: "Benguela",
      departureTime: "05 Mar, 06:00",
      arrivalTime: "05 Mar, 12:30",
      duration: "6h 30min",
      type: "INTERPROVINCIAL",
      country: "ao",
      price: "32.500",
      currency: "Kz",
      content: "Viagem rodoviária com paragem em Catumbela.",
      tags: [{ icon: "Bus01Icon", text: "Rodoviária" }],
      isFavorite: false,
    },
    {
      id: 3,
      title: "TAP Luanda — Lisboa",
      origin: "Luanda",
      destination: "Lisboa",
      departureTime: "12 Mar, 22:40",
      arrivalTime: "13 Mar, 06:05",
      duration: "7h 25min",
      type: "FLIGHT",
      country: "ao",
      price: "420.000",
      currency: "Kz",
      content: "Voo internacional com escala em Casablanca.",
      tags: [{ icon: "GlobalIcon", text: "Internacional" }],
      isFavorite: false,
    },
  ];
</script>

<svelte:head>
  <title>CardFlight Demo | NegoDesign</title>
</svelte:head>

<div class="mx-auto max-w-5xl px-4 py-10 md:px-8">
  <h1 class="text-3xl font-extrabold tracking-tight">CardFlight</h1>
  <p class="mt-2 text-muted-foreground">
    Card de viagem/voo com rota (origem → destino), horários de partida e
    chegada, duração, preço e botão de reserva. Possui 2 variantes visuais.
  </p>

  <div class="mt-8 space-y-8">
    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground mb-4">Variant 1</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each items as item (item.id)}
          <CardFlight
            variant={1}
            {...item}
            onClickBuy={(id) => console.log("book", id)}
            onClickFavorite={(id) => console.log("favorite", id)}
          />
        {/each}
      </div>
    </section>

    <section class="rounded-xl border border-border bg-card p-6">
      <h2 class="text-sm font-semibold text-muted-foreground mb-4">Variant 2</h2>
      <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {#each items as item (item.id)}
          <CardFlight
            variant={2}
            {...item}
            onClickBuy={(id) => console.log("book", id)}
            onClickFavorite={(id) => console.log("favorite", id)}
          />
        {/each}
      </div>
    </section>
  </div>
</div>