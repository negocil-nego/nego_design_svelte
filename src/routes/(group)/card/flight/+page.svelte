<script lang="ts">
  import { CardFlight } from "$lib";
  import type { CardFlightProps } from "$lib/types";

  const items: CardFlightProps[] = [
    {
      id: 1,
      title: "Turkish Airlines",
      origin: "IST",
      destination: "LHR",
      departureTime: "8:00 AM",
      arrivalTime: "12:25 PM",
      duration: "4h 25m",
      baggage: "25 KG",
      type: "FLIGHT",
      price: "719.00",
      currency: "$",
      content:
        "Turkish Airlines direct flight from Istanbul (IST) to London Heathrow (LHR). Includes 25 KG baggage allowance, in-flight gourmet meals, and entertainment.",
      tags: [
        { icon: "Airplane01Icon", text: "Direct Flight" },
        { icon: "Ticket01Icon", text: "25 KG Baggage" },
        { icon: "AirplaneSeatIcon", text: "Economy" },
      ],
      imageUrl:
        "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1170&auto=format&fit=crop",
      isFavorite: true,
    },
    {
      id: 2,
      title: "TAAG Luanda — Lubango",
      origin: "LAD",
      destination: "SDD",
      departureTime: "08:30 AM",
      arrivalTime: "09:45 AM",
      duration: "1h 15m",
      baggage: "20 KG",
      type: "FLIGHT",
      country: "ao",
      price: "85.000",
      currency: "Kz",
      content: "Voo directo da TAAG com 20kg de bagagem incluídos e check-in prioritário.",
      tags: [{ icon: "Airplane01Icon", text: "Voo directo" }, { icon: "Ticket01Icon", text: "20 KG" }],
      imageUrl:
        "https://images.unsplash.com/photo-1540962351504-03099e0a754b?q=80&w=1170&auto=format&fit=crop",
      isFavorite: false,
    },
    {
      id: 3,
      title: "TAP Luanda — Lisboa",
      origin: "LAD",
      destination: "LIS",
      departureTime: "10:40 PM",
      arrivalTime: "06:05 AM",
      duration: "7h 25m",
      baggage: "2x 23 KG",
      type: "FLIGHT",
      country: "ao",
      price: "420.000",
      currency: "Kz",
      content: "Voo internacional de longo curso com serviço de bordo completo e entretenimento individual.",
      tags: [{ icon: "GlobalIcon", text: "Internacional" }],
      imageUrl:
        "https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1170&auto=format&fit=crop",
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