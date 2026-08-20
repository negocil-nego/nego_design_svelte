<script lang="ts">
  import type { CarouselHeroItem, CarouselHeroProps } from "../types";
  import type { Snippet } from "svelte";
  import NavbarMenu from "../../nav/ui/NavbarMenu.svelte";

  let {
    items,
    navMenu,
    children,
    className,
    titleClass,
    descriptionClass,
    intervalMs = 5000,
    transitionMs = 1200,
    indicatorShow = false,
    sectionClass,
  }: CarouselHeroProps & {
    children?: Snippet;
    intervalMs?: number;
    transitionMs?: number;
    indicatorShow?: boolean;
  } = $props();

  let layers = $state<[string, string]>([items?.[0]?.image ?? "", ""]);
  let active = $state<0 | 1>(0);
  let index = $state(0);
  let switching = false;

  // eslint-disable-next-line svelte/prefer-svelte-reactivity
  const preloadCache = new Map<string, Promise<void>>();

  function preload(src: string): Promise<void> {
    if (!src) return Promise.resolve();
    const cached = preloadCache.get(src);
    if (cached) return cached;

    const promise = new Promise<void>((resolve) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = () => resolve();
      img.src = src;
    });

    preloadCache.set(src, promise);
    return promise;
  }

  $effect(() => {
    items?.forEach((item) => void preload(item.image));
  });

  async function goTo(nextIndex: number) {
    if (!items || nextIndex === index || switching) return;
    switching = true;

    const nextSrc = items[nextIndex].image;
    await preload(nextSrc);

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
    class="w-full relative flex flex-col justify-center items-center h-75 md:h-100 overflow-hidden {className}"
  >
    {#each layers as bg, i (`layer-${i}`)}
      <div
        style="
    position: absolute;
    inset: 0;
    will-change: opacity;
    background-image: {bg ? `url(${bg})` : 'none'};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: {i === active ? 1 : 0};
    transition: opacity {transitionMs}ms ease-in-out;
  "
      ></div>
    {/each}

    <div
      style="position: absolute; inset: 0; height: 100%; background-color: rgba(0,0,0,0.4);"
    ></div>

    <div class="relative z-10 w-full flex flex-col items-center flex-1">
      <NavbarMenu {navMenu} />

      <section
        class="flex flex-col justify-center items-center flex-1 w-full h-auto text-center px-4 {sectionClass}"
      >
        {#key selected.title}
          <div
            style="transition: opacity {transitionMs * 0.6}ms ease-in-out;"
            class="opacity-0 flex flex-col justify-center items-center text-center"
            use:fadeIn
          >
            <div>
              <h1
                class="text-white text-2xl md:text-4xl font-bold {titleClass}"
              >
                {selected.title}
              </h1>
            </div>
            <div class="flex flex-col justify-center items-center">
              <p class="text-white/90 mt-2 max-w-2xl {descriptionClass}">
                {selected.description}
              </p>
            </div>
          </div>
        {/key}

        {#if children}
          {@render children()}
        {/if}
      </section>
    </div>

    {#if indicatorShow}
      {#if items && items.length > 1}
        <div
          style="position: absolute; bottom: 0.75rem; z-index: 10; display: flex; gap: 0.5rem;"
        >
          {#each items as item, i (`hero-dot-${i}`)}
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
    {/if}
  </header>
{/if}
