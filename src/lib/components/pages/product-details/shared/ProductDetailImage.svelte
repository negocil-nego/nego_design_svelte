<script lang="ts" module>
  /**
   * Galeria de imagens do produto com miniatura selecionável.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProductDetailImage images={data.gallery} className="md:col-span-2" />
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
    <Skeleton class="aspect-4/3 w-full rounded-lg" />
    <div class="flex gap-2">
      {#each Array.from({ length: Math.min(images.length || 3, 4) }) as _, i (i)}
        <Skeleton class="h-16 w-16 rounded-md md:h-20 md:w-20" />
      {/each}
    </div>
  {:else if active}
    <div class="overflow-hidden rounded-lg border">
      <img
        src={active.src}
        alt={active.alt ?? ""}
        class="aspect-4/3 w-full object-cover"
      />
    </div>

    {#if images.length > 1}
      <div class="flex gap-2 overflow-x-auto no-scrollbar">
        {#each images as image, i (image.src)}
          <button
            type="button"
            aria-label={image.alt ?? `Imagem ${i + 1}`}
            onclick={() => (activeIndex = i)}
            class="shrink-0 overflow-hidden rounded-md border transition-opacity {i ===
            activeIndex
              ? 'border-foreground opacity-100'
              : 'border-muted opacity-60 hover:opacity-100'}"
          >
            <img
              src={image.src}
              alt={image.alt ?? ""}
              class="h-16 w-16 object-cover md:h-20 md:w-20"
            />
          </button>
        {/each}
      </div>
    {/if}
  {/if}
</div>
