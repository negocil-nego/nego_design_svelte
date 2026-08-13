<script lang="ts" module>
  /**
   * Lista vertical de ficheiros/thumbnails do produto com seleção de imagem.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProductDetailFilesVertical images={data.gallery} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { ProductDetailsImage } from "../types";

  let {
    images,
    className,
    isLoading = false,
  }: {
    images: ProductDetailsImage[];
    className?: string;
    isLoading?: boolean;
  } = $props();

  let activeIndex = $state(0);
  const active = $derived(images[activeIndex]);
</script>

<div class="flex flex-col gap-3 {className}">
  {#if isLoading}
    <div class="flex gap-3">
      <div class="flex shrink-0 flex-col gap-2">
        {#each Array.from({ length: Math.min(images.length || 3, 4) }) as _, i (i)}
          <Skeleton class="h-16 w-16 rounded-md" />
        {/each}
      </div>
      <Skeleton class="aspect-4/3 min-w-0 flex-1 rounded-lg" />
    </div>
  {:else if images.length > 0}
    <div class="flex gap-3">
      <div class="flex shrink-0 flex-col gap-2">
        {#each images as image, i (image.src)}
          <button
            type="button"
            aria-label={image.alt ?? `Imagem ${i + 1}`}
            onclick={() => (activeIndex = i)}
            class="overflow-hidden rounded-md border transition-opacity {i ===
            activeIndex
              ? 'border-foreground opacity-100'
              : 'border-muted opacity-60 hover:opacity-100'}"
          >
            <img
              src={image.src}
              alt={image.alt ?? ""}
              class="h-16 w-16 object-cover"
            />
          </button>
        {/each}
      </div>

      <div class="min-w-0 flex-1 overflow-hidden rounded-lg border">
        <img
          src={active.src}
          alt={active.alt ?? ""}
          class="aspect-4/3 w-full object-cover"
        />
      </div>
    </div>
  {/if}
</div>
