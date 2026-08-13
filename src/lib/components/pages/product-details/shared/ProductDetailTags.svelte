<script lang="ts" module>
  /**
   * Lista de tags do produto (ex: localização, categoria).
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProductDetailTags tags={[{ text: "Luanda" }, { text: "Kilamba" }]} />
   * ```
   */
</script>

<script lang="ts">
  import CardTags from "../../../core/card/shared/CardTags.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { ProductDetailsTag } from "../types";

  let {
    tags,
    isLoading = false,
  }: {
    tags?: ProductDetailsTag[];
    isLoading?: boolean;
  } = $props();
</script>

{#if isLoading}
  <div class="flex flex-wrap gap-2">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <Skeleton class="h-5 w-20 rounded-full" />
    {/each}
  </div>
{:else if tags?.length}
  <CardTags tags={tags} isWrap />
{/if}
