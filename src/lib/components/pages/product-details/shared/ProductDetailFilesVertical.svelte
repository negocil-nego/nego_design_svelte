<script lang="ts" module>
  /**
   * Lista vertical de ficheiros/thumbnails do produto com seleção de imagem/vídeo.
   * Quando `isLoading` é true, exibe Skeletons.
   * Se houver um item do tipo "video", ele é priorizado (aparece primeiro).
   * @component
   * @example
   * ```svelte
   * <ProductDetailFilesVertical files={data.gallery} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { ProductDetailsImage } from "../types";

  let {
    files,
    className,
    isLoading = false,
  }: {
    files: ProductDetailsImage[];
    className?: string;
    isLoading?: boolean;
  } = $props();

  // Vídeo primeiro, mantendo a ordem relativa do resto
  const sortedFiles = $derived(
    [...(files ?? [])].sort(
      (a, b) => (a.type === "video" ? 0 : 1) - (b.type === "video" ? 0 : 1),
    ),
  );

  let activeIndex = $state(0);
  const active = $derived(sortedFiles[activeIndex]);
</script>

{#snippet media(file: ProductDetailsImage, cls: string)}
  {#if file.type === "video"}
    <!-- svelte-ignore a11y_media_has_caption -->
    <video src={file.src} class={cls} muted playsinline></video>
  {:else}
    <img src={file.src} alt={file.alt ?? ""} class={cls} />
  {/if}
{/snippet}

<div class="flex flex-col gap-3 {className}">
  {#if isLoading}
    <div class="flex gap-3">
      <div class="flex shrink-0 flex-col gap-2">
        {#each Array.from( { length: Math.min(files.length || 3, 4) }, ) as _, i (i)}
          <Skeleton class="h-16 w-16 rounded-md" />
        {/each}
      </div>
      <Skeleton class="aspect-4/3 min-w-0 flex-1 rounded-lg" />
    </div>
  {:else if sortedFiles.length > 0}
    <div class="flex gap-3">
      <div class="flex shrink-0 flex-col gap-2">
        {#each sortedFiles as file, i (file.src)}
          <button
            type="button"
            aria-label={file.alt ?? `Item ${i + 1}`}
            onclick={() => (activeIndex = i)}
            class="relative overflow-hidden rounded-md border transition-opacity {i ===
            activeIndex
              ? 'border-foreground opacity-100'
              : 'border-muted opacity-60 hover:opacity-100'}"
          >
            {@render media(file, "h-16 w-16 object-cover")}
            {#if file.type === "video"}
              <span
                class="absolute inset-0 flex items-center justify-center bg-black/30"
              >
                <svg
                  viewBox="0 0 24 24"
                  class="h-4 w-4 fill-white"
                  aria-hidden="true"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            {/if}
          </button>
        {/each}
      </div>

      <div class="min-w-0 flex-1 overflow-hidden rounded-lg border">
        {#if active.type === "video"}
          <!-- svelte-ignore a11y_media_has_caption -->
          <video
            src={active.src}
            class="aspect-4/3 w-full object-cover"
            controls
            playsinline
          ></video>
        {:else}
          {@render media(active, "aspect-4/3 w-full object-cover")}
        {/if}
      </div>
    </div>
  {/if}
</div>
