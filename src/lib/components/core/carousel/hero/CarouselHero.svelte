<script lang="ts">
  import type { CarouselHeroItem, CarouselHeroProps } from "../types";
  import NavMenu from "../../nav/ui/nav-menu.svelte";
  import type { Snippet } from "svelte";

  let {
    navMenu,
    items,
    children,
    intervalMs = 5000,
    transitionMs = 1200,
  }: CarouselHeroProps & {
    children?: Snippet;
    intervalMs?: number;
    transitionMs?: number;
  } = $props();

  // Buffer duplo: duas camadas fixas, nunca desmontadas — só a opacidade muda.
  let layers = $state<[string, string]>([items?.[0]?.image ?? "", ""]);
  let active = $state<0 | 1>(0);
  let index = $state(0);
  let switching = false; // evita trocas sobrepostas se o intervalo disparar antes do preload acabar

  // eslint-disable-next-line svelte/prefer-svelte-reactivity
  const preloadCache = new Map<string, Promise<void>>();

  function preload(src: string): Promise<void> {
    if (!src) return Promise.resolve();
    const cached = preloadCache.get(src);
    if (cached) return cached;

    const promise = new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve(); // não bloqueia o carousel por uma imagem partida
      img.src = src;
    });

    preloadCache.set(src, promise);
    return promise;
  }

  // Pré-carrega todas as imagens uma vez, assim que os items ficam disponíveis.
  $effect(() => {
    items?.forEach((item) => void preload(item.image));
  });

  async function goTo(nextIndex: number) {
    if (!items || nextIndex === index || switching) return;
    switching = true;

    const nextSrc = items[nextIndex].image;
    await preload(nextSrc); // garante decode/cache antes de trocar a camada -> sem flash

    const nextLayer = active === 0 ? 1 : 0;
    layers[nextLayer] = nextSrc;
    active = nextLayer;
    index = nextIndex;
    switching = false;
  }

  $effect(() => {
    if (!items || items.length <= 1) return;

    const timer = setInterval(() => {
      goTo((index + 1) % items.length);
    }, intervalMs);

    return () => clearInterval(timer);
  });

  function fadeIn(node: HTMLElement) {
    requestAnimationFrame(() => {
      node.style.opacity = "1";
    });
    return {};
  }

  let selected = $derived<CarouselHeroItem | undefined>(items?.[index]);
</script>

{#if selected}
  <header
    class="w-full relative flex flex-col justify-center items-center h-[300px] md:h-[400px] overflow-hidden"
  >
    {#each layers as bg, i (i)}
      <div
        class="absolute inset-0 bg-cover bg-center will-change-[opacity]"
        style="
          background-image: {bg ? `url(${bg})` : 'none'};
          opacity: {i === active ? 1 : 0};
          transition: opacity {transitionMs}ms ease-in-out;
        "
      ></div>
    {/each}

    <div class="absolute inset-0 bg-black/40"></div>

    <div class="relative z-10 w-full flex flex-col items-center flex-1">
      <NavMenu {...navMenu} />

      <section
        class="flex flex-col justify-center items-center flex-1 w-full h-auto text-center px-4"
      >
        {#key selected.title}
          <div
            style="transition: opacity {transitionMs * 0.6}ms ease-in-out;"
            class="opacity-0"
            use:fadeIn
          >
            <h1 class="text-white text-2xl md:text-4xl font-bold">
              {selected.title}
            </h1>
            <p class="text-white/90 mt-2 max-w-2xl">
              {selected.description}
            </p>
          </div>
        {/key}

        {#if children}
          {@render children()}
        {/if}
      </section>
    </div>

    {#if items && items.length > 1}
      <div class="absolute bottom-3 z-10 flex gap-2">
        {#each items as item, i (i)}
          <button
            aria-label={`Ir para o slide ${i + 1}: ${item.title}`}
            class="w-2 h-2 rounded-full transition-colors {i === index
              ? 'bg-white'
              : 'bg-white/40'}"
            onclick={() => goTo(i)}
          ></button>
        {/each}
      </div>
    {/if}
  </header>
{/if}
