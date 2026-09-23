<script lang="ts">
  import type { LoginCarouselProps } from "../../types";
  import type { Snippet } from "svelte";
  import { t } from "$lib/i18n";

  type Props = {
    title?: string | Snippet;
    autoPlayInterval?: number;
  };

  let {
    title,
    items = [],
    type = "DOT",
    autoPlayInterval = 5000,
  }: Props & LoginCarouselProps = $props();

  let currentIndex = $state(0);
  let currentItem = $derived(items[currentIndex] ?? items[0]);

  function goTo(index: number) {
    currentIndex = index;
  }

  function next() {
    if (items.length === 0) return;
    currentIndex = (currentIndex + 1) % items.length;
  }

  $effect(() => {
    if (items.length <= 1) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  });
</script>

<div
  class="relative flex flex-col justify-between overflow-hidden w-full h-full text-white"
>
  {#if currentItem?.backgroundUrl}
    <div
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style="background-image: url('{currentItem.backgroundUrl}')"
    ></div>
    <div class="absolute inset-0 bg-black/40"></div>
  {:else}
    <div class="absolute inset-0 bg-gradient"></div>
  {/if}

  <div class="relative z-10 flex items-center gap-2 p-8">
    <div class="font-bold text-xl tracking-wider flex items-center gap-2">
      {#if typeof title === "function"}
        {@render title()}
      {:else}
        {title || $t("label.welcome")}
      {/if}
    </div>
  </div>

  <section class="relative z-10 flex flex-col gap-5 p-8">
    <div class="my-auto max-w-sm md:max-w-md lg:max-w-100">
      {#if currentItem}
        {#key currentIndex}
          <div
            class="text-xl md:text-2xl font-bold tracking-tight mb-4 leading-tight animate-fade-in duration-300"
          >
            {currentItem.title}
          </div>
          <p class="text-sm mb-6 leading-relaxed animate-fade-in duration-300">
            {currentItem.description}
          </p>
        {/key}
      {/if}
    </div>

    <div class="flex items-center gap-2 mb-2">
      {#each items as it, i (it.title)}
        <button
          type="button"
          onclick={() => goTo(i)}
          aria-label={`Ir para o item ${i + 1}`}
          aria-current={currentIndex === i}
          class="transition-all duration-300 focus:outline-none flex items-center justify-center {currentIndex ===
          i
            ? 'opacity-100 scale-110'
            : 'opacity-50 hover:opacity-75'}"
        >
          {#if type === "NUMBER"}
            <span
              class="w-6 h-6 text-xs font-semibold rounded-full text-primary flex items-center justify-center"
            >
              {i + 1}
            </span>
          {:else}
            <span class="w-2 h-2 rounded-full bg-gradient dark:bg-white"></span>
          {/if}
        </button>
      {/each}
    </div>
  </section>
</div>
