<script lang="ts">
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
  import type { LoginCarouselProps } from "$lib/components/pages/security/login/types";
  import type { Snippet } from "svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { t } from "$lib/i18n";
  import Logo from "$lib/assets/login-01-admin.webp";

  type Props = {
    title?: string | Snippet;
    variant?: "NUMBER" | "DOT";
    autoPlayInterval?: number;
  };

  let {
    title,
    items = [],
    variant = "DOT",
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
  class="relative flex flex-col justify-between overflow-hidden h-screen p-8 bg-gradient text-white"
>
  <div class="flex items-center gap-2">
    <div class="font-bold text-xl tracking-wider flex items-center gap-2">
      {#if typeof title === "function"}
        {@render title()}
      {:else}
        {title || $t("label.welcome")}
      {/if}
    </div>
  </div>

  <section class="flex flex-col gap-5">
    <div class="my-auto max-w-sm md:max-w-md lg:max-w-100">
      {#if currentItem}
        {#key currentIndex}
          <div
            class="text-xl md:text-2xl font-bold tracking-tight mb-4 leading-tight animate-in fade-in duration-300"
          >
            {currentItem.title}
          </div>
          <p
            class=" text-sm mb-6 leading-relaxed animate-in fade-in duration-300"
          >
            {currentItem.description}
          </p>
        {/key}
        <Button
          variant="outline"
          class="inline-flex items-center gap-2 text-sm font-semibold bg-primary"
        >
          {currentItem.buttonText}
          <HugeiconsIcon icon={ArrowRight01Icon} size={16} />
        </Button>
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
          {#if variant === "NUMBER"}
            <span
              class="w-6 h-6 text-xs font-semibold rounded-full text-primary flex items-center justify-center"
            >
              {i + 1}
            </span>
          {:else}
            <span class="w-2 h-2 rounded-full bg-white"></span>
          {/if}
        </button>
      {/each}
    </div>
  </section>

  <aside
    class="hidden z-50 lg:block lg:absolute lg:right-0 lg:-bottom-3 lg:w-105 lg:h-105"
  >
    <img
      src={Logo}
      alt=""
      class="shadow rounded-tl-lg rounded-bl-lg lg:w-105 lg:h-105"
    />
  </aside>
</div>

<aside class="absolute grid-pattern p-0 top-0 h-screen w-8/12"></aside>
