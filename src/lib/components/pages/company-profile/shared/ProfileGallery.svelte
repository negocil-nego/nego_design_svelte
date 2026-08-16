<script lang="ts" module>
  /**
   * Secção "Galeria": grelha de imagens/vídeos da empresa com lightbox simples.
   * O vídeo (se existir) ocupa sempre o card em destaque.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProfileGallery data={data.gallery} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { ProfileGalleryData, ProfileImage } from "../types";
  import ImgPlaceholder from "$lib/assets/placeholder-image.png";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { GalleryThumbnailsFreeIcons } from "@hugeicons/core-free-icons";

  let {
    data,
    isLoading = false,
    className,
  }: {
    data: ProfileGalleryData;
    isLoading?: boolean;
    className?: string;
  } = $props();

  // Vídeo primeiro (ocupa o card em destaque), resto mantém a ordem original.
  const images = $derived(
    [...(data?.images ?? [])].sort((a, b) =>
      a.type === "video" ? -1 : b.type === "video" ? 1 : 0,
    ),
  );
  const visible = $derived(images.slice(0, 5));

  let index = $state<number | null>(null);
  const active = $derived(index !== null ? images[index] : undefined);

  const open = (i: number) => (index = i);
  const close = () => (index = null);
  const step = (dir: 1 | -1) => {
    if (index === null || !images.length) return;
    index = (index + dir + images.length) % images.length;
  };
  const onKeydown = (e: KeyboardEvent) => {
    if (index === null) return;
    if (e.key === "Escape") close();
    else if (e.key === "ArrowRight") step(1);
    else if (e.key === "ArrowLeft") step(-1);
  };
</script>

<svelte:window onkeydown={onKeydown} />

{#snippet media(item: ProfileImage, cls: string)}
  {#if item.type === "video"}
    <video src={item.src} class={cls} muted playsinline preload="metadata"
    ></video>
    <span
      class="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30"
    >
      <span
        class="flex size-11 items-center justify-center rounded-full bg-black/50 text-white"
      >
        <svg viewBox="0 0 24 24" class="size-5 fill-white" aria-hidden="true">
          <path d="M8 5v14l11-7z" />
        </svg>
      </span>
    </span>
  {:else}
    <img
      src={item.src}
      alt={item.alt ?? ""}
      class={cls}
      loading="lazy"
      decoding="async"
      onerror={(e) => ((e.target as HTMLImageElement).src = ImgPlaceholder)}
    />
  {/if}
{/snippet}

{#snippet arrow(dir: 1 | -1, side: string)}
  <button
    type="button"
    aria-label={dir === -1 ? "Imagem anterior" : "Próxima imagem"}
    onclick={() => step(dir)}
    class="absolute {side} flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
  >
    <svg
      viewBox="0 0 24 24"
      class="size-5"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d={dir === -1 ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  </button>
{/snippet}

<div class="bg-gray-50 dark:bg-background p-4 md:p-6 {className}">
  <h2 class="mb-4 flex items-center gap-2 text-lg font-bold">
    <HugeiconsIcon icon={GalleryThumbnailsFreeIcons} />
    {data.title ?? "Galeria"}
  </h2>

  {#if isLoading}
    <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
      <Skeleton
        class="col-span-2 row-span-2 aspect-square rounded-lg md:aspect-auto"
      />
      {#each Array.from({ length: 4 }) as _, i (i)}
        <Skeleton class="aspect-square rounded-lg" />
      {/each}
    </div>
  {:else if visible.length}
    <div class="grid grid-cols-2 gap-3 md:grid-cols-3 md:auto-rows-36">
      {#each visible as item, i (item.src)}
        <button
          type="button"
          onclick={() => open(i)}
          class="group relative overflow-hidden rounded-lg border {i === 0
            ? 'col-span-2 row-span-2'
            : ''}"
          aria-label={item.alt ??
            (item.type === "video"
              ? "Reproduzir vídeo"
              : `Ver imagem ${i + 1}`)}
        >
          {@render media(
            item,
            "size-full object-cover transition-transform duration-300 group-hover:scale-105",
          )}
        </button>
      {/each}
    </div>
  {:else}
    <p class="text-sm text-muted-foreground">
      Galeria ainda não foi submetida.
    </p>
  {/if}
</div>

{#if active}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
    role="dialog"
    aria-modal="true"
  >
    <button
      type="button"
      aria-label="Fechar"
      onclick={close}
      class="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
    >
      <svg
        viewBox="0 0 24 24"
        class="size-5"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        aria-hidden="true"
      >
        <path d="M18 6 6 18M6 6l12 12" />
      </svg>
    </button>

    {#if images.length > 1}
      {@render arrow(-1, "left-2 md:left-6")}
      {@render arrow(1, "right-2 md:right-6")}
    {/if}

    {#if active.type === "video"}
      <!-- svelte-ignore a11y_media_has_caption -->
      <video
        src={active.src}
        class="max-h-[85vh] max-w-full rounded-lg object-contain"
        controls
        autoplay
        playsinline
      ></video>
    {:else}
      <img
        src={active.src}
        alt={active.alt ?? ""}
        class="max-h-[85vh] max-w-full rounded-lg object-contain"
        onerror={(e) => ((e.target as HTMLImageElement).src = ImgPlaceholder)}
      />
    {/if}
  </div>
{/if}
