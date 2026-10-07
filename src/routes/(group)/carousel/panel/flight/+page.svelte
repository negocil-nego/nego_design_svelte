<script lang="ts">
  import CarouselItemsFlight from "$lib/components/ui/carousel/core/panel/CarouselItemsFlight.svelte";
  import items from "$lib/components/ui/card/core/flight/data";

  const sampleItems = items.slice(0, 5);
</script>

<div class="container mx-auto px-4 py-8 space-y-12">
  <section class="space-y-4">
    <div class="border-b pb-2">
      <h1 class="text-3xl font-bold">CarouselItemsFlight — Demo</h1>
      <p class="text-muted-foreground">
        Carousel de cards de viagem/voo (CardFlight) em grade com paginação
        configurável por colunas e linhas.
      </p>
    </div>

    <!-- Exemplo 1: Grade 3x1 (3 itens por slide) com variante 1 -->
    <div class="rounded-2xl border bg-card p-4 md:p-6 shadow-xs">
      <CarouselItemsFlight
        gridColumns={3}
        rowColumns={1}
        variant={1}
        items={sampleItems}
        headerProps={{
          title: "Viagens em Destaque (Grade 3x1)",
          description: "Navegue pelos voos e viagens interprovinciais disponíveis",
        }}
        slotProps={{
          positionButtonPreviousAndNext: "top_right",
          isButtonPreviousAndNext: true,
        }}
        onClickBuy={(id) => console.log("Reservar:", id)}
        onClickFavorite={(id) => console.log("Favoritar:", id)}
      />
    </div>

    <!-- Exemplo 2: Grade 2x2 com variante 2 e classe customizada -->
    <div class="rounded-2xl border bg-card p-4 md:p-6 shadow-xs">
      <CarouselItemsFlight
        gridColumns={2}
        rowColumns={2}
        variant={2}
        items={sampleItems}
        itemClassName="bg-muted/40 hover:bg-muted/80 transition-colors"
        headerProps={{
          title: "Ofertas Relâmpago (Grade 2x2 — Variante 2)",
          description: "Reserve já as melhores tarifas do mercado",
        }}
        slotProps={{
          positionButtonPreviousAndNext: "top_right",
          isButtonPreviousAndNext: true,
        }}
        onClickBuy={(id) => console.log("Reservar:", id)}
        onClickFavorite={(id) => console.log("Favoritar:", id)}
      />
    </div>

    <!-- Exemplo 3: Loading Skeleton -->
    <div class="rounded-2xl border bg-card p-4 md:p-6 shadow-xs">
      <CarouselItemsFlight
        gridColumns={3}
        rowColumns={2}
        isLoading={true}
        items={[]}
        headerProps={{
          title: "Estado de Carregamento (Loading Skeleton)",
          description: "Exemplo com esqueletos animados em grade",
        }}
        slotProps={{
          positionButtonPreviousAndNext: "top_right",
        }}
      />
    </div>
  </section>
</div>
