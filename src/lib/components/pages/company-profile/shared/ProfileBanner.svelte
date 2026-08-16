<script lang="ts" module>
  /* eslint-disable @typescript-eslint/no-explicit-any */
  /**
   * Banner de apresentação da empresa/fábrica: imagem de capa, logótipo,
   * nome, país, botão de contacto e faixa de estatísticas rápidas.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProfileBanner data={data.banner} id={data.id} {onContact} {onCopyLink} {onShare} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import ImgPlaceholder from "$lib/assets/placeholder-image.png";
  import type { ProfileBannerData, ProfileBannerTag } from "../types";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { onDestroy } from "svelte";
  import {
    Calendar01FreeIcons,
    Copy,
    DashboardBrowsingIcon,
    Email,
    Link01FreeIcons,
    MapPin,
    Share,
    WhatsappIcon,
  } from "@hugeicons/core-free-icons";

  const AUTOPLAY_MS = 8000;

  let {
    id,
    data,
    isLoading = false,
    onWhatsapp,
    onEmail,
    onCopyLink,
    onShare,
    tags,
  }: {
    id: string | number;
    data: ProfileBannerData;
    isLoading?: boolean;
    onWhatsapp?: (id: string | number) => void;
    onEmail?: (id: string | number) => void;
    onCopyLink?: (id: string | number) => void;
    onShare?: (id: string | number) => void;
    tags?: ProfileBannerTag[];
  } = $props();

  const cover = $derived(data?.coverImages ?? []);
  const isCover = $derived(cover.length > 0);
  const hasMultipleCovers = $derived(cover.length > 1);

  // ---- Carrossel de imagens de capa ----
  let activeIndex = $state(0);
  let intervalId: ReturnType<typeof setInterval> | undefined;

  function stopAutoplay() {
    if (intervalId) clearInterval(intervalId);
  }

  function startAutoplay() {
    stopAutoplay();
    if (hasMultipleCovers) {
      intervalId = setInterval(() => {
        activeIndex = (activeIndex + 1) % cover.length;
      }, AUTOPLAY_MS);
    }
  }

  function goTo(index: number) {
    activeIndex = index;
    startAutoplay(); // reinicia o timer ao clicar manualmente
  }

  // Reinicia apenas quando o conjunto de imagens muda (não a cada render)
  $effect(() => {
    void cover.length; // dependência explícita
    activeIndex = 0;
    startAutoplay();
    return stopAutoplay;
  });

  onDestroy(stopAutoplay);

  // Ações do header (topo direito) — evita repetir markup de botão
  const headerActions = $derived([
    { icon: Copy, label: "Copiar link", onclick: () => onCopyLink?.(id) },
    { icon: Share, label: "Partilhar", onclick: () => onShare?.(id) },
  ]);

  const contactActions = $derived([
    {
      icon: Email,
      label: "Email",
      iconClass: "text-red-500",
      onclick: () => onEmail?.(id),
    },
    {
      icon: WhatsappIcon,
      label: "Whatsapp",
      iconClass: "text-green-500",
      onclick: () => onWhatsapp?.(id),
    },
  ]);

  const infoItems = $derived([
    {
      title: "Categoria",
      description: data.category,
      icon: DashboardBrowsingIcon,
    },
    { title: "Endereço", description: data.address, icon: MapPin },
    {
      title: "Anos de Atuação",
      description: data.yearFounded,
      icon: Calendar01FreeIcons,
    },
    { title: "Website", description: data.website, icon: Link01FreeIcons },
  ]);
</script>

{#if isLoading}
  <div class="flex flex-col gap-4">
    <Skeleton class="aspect-21/9 w-full rounded-xl" />
    <div class="flex flex-col items-center gap-3">
      <Skeleton class="size-24 rounded-2xl -mt-16 border-4 border-background" />
      <Skeleton class="h-7 w-48 rounded-md" />
      <Skeleton class="h-10 w-44 rounded-md" />
    </div>
    <div class="flex justify-center gap-6">
      {#each Array.from({ length: 4 }) as _, i (i)}
        <Skeleton class="h-12 w-24 rounded-md" />
      {/each}
    </div>
  </div>
{:else}
  <div
    class="flex flex-col items-center justify-center p-2 relative rounded-lg overflow-hidden
    {isCover ? '' : 'bg-gradient'}"
  >
    {#if isCover}
      <div class="absolute inset-0 -z-10">
        {#each cover as image, i (image.src)}
          <img
            src={image.src}
            alt={image.alt ?? ""}
            class="absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out {i ===
            activeIndex
              ? 'opacity-100'
              : 'opacity-0 pointer-events-none'}"
          />
        {/each}
        <div class="absolute inset-0 bg-black/30"></div>

        {#if hasMultipleCovers}
          <div
            class="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5"
          >
            {#each cover as _, i (i)}
              <button
                type="button"
                aria-label={`Ir para imagem ${i + 1}`}
                onclick={() => goTo(i)}
                class="h-1.5 rounded-full transition-all {i === activeIndex
                  ? 'w-4 bg-white'
                  : 'w-1.5 bg-white/50'}"
              ></button>
            {/each}
          </div>
        {/if}
      </div>
    {/if}

    <div class="overflow-hidden rounded-xl absolute top-0 right-0">
      <div class="flex gap-2 md:gap-5 p-4">
        {#each headerActions as action (action.label)}
          <Button
            type="button"
            variant="ghost"
            class="rounded-full bg-white dark:bg-background"
            aria-label={action.label}
            onclick={action.onclick}
          >
            <HugeiconsIcon icon={action.icon} />
          </Button>
        {/each}
      </div>
    </div>

    <div
      class="flex flex-col items-center gap-3 px-4 text-center justify-center md:-mb-10"
    >
      <div class="flex shrink-0 items-center justify-center">
        {#if data.logo}
          <img
            src={data.logo}
            alt={data.name}
            class="rounded-full w-15 md:w-25 h-15 md:h-25 lg:w-40 lg:h-40 p-2"
            onerror={(e) =>
              ((e.target as HTMLImageElement).src = ImgPlaceholder)}
          />
        {:else}
          <span class="text-2xl font-bold text-muted-foreground"
            >{data.name?.[0] ?? "?"}</span
          >
        {/if}
      </div>
      <h1 class="text-lg font-bold tracking-tight md:text-xl mb-5 text-white">
        {data.name}
      </h1>
    </div>

    <div class="flex justify-between w-full p-5">
      {#each contactActions as action (action.label)}
        <Button
          variant="ghost"
          size="sm"
          onclick={action.onclick}
          class="bg-white cursor-pointer"
        >
          <HugeiconsIcon icon={action.icon} class={action.iconClass} />
          {action.label}
        </Button>
      {/each}
    </div>
  </div>

  <div
    class="bg-gray-50 dark:bg-background p-2 md:p-10 flex flex-col items-center justify-center"
  >
    <div
      class="grid grid-cols-2 items-center w-full
         [&>*:nth-child(odd)]:border-r
         [&>*:nth-child(-n+2)]:pb-1 [&>*:nth-child(-n+2)]:md:pb-2.5 [&>*:nth-child(-n+2)]:lg:pb-5
         [&>*:nth-child(-n+2)]:border-b
         [&>*:nth-child(n+3)]:pt-1 [&>*:nth-child(n+3)]:md:pt-2.5 [&>*:nth-child(n+3)]:lg:pt-5
         *:border-border
         *:w-full
         *:flex *:flex-col *:items-center"
    >
      {#each infoItems as item (item.title)}
        {@render companyInfo(item)}
      {/each}
    </div>
  </div>
{/if}

{#snippet companyInfo({
  title,
  description,
  icon,
}: {
  title: string;
  description?: string;
  icon: any;
})}
  <div class="flex flex-col gap-2 items-center">
    <h3 class="text-md font-semibold flex gap-2 items-center">
      <HugeiconsIcon {icon} size={15} />
      {title}
    </h3>
    <p class="text-md text-gray-400">{description ?? "---"}</p>
  </div>
{/snippet}
