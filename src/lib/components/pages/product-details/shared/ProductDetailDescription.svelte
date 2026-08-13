<script lang="ts" module>
  /**
   * Descrição do produto (curta e longa opcional).
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProductDetailDescription description={data.description} longDescription={data.longDescription} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  let {
    description,
    longDescription,
    isLoading = false,
  }: {
    description: string;
    longDescription?: string;
    isLoading?: boolean;
  } = $props();
</script>

{#if isLoading}
  <div class="flex flex-col gap-2">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <Skeleton class="h-4 w-full rounded-md" />
    {/each}
  </div>
{:else}
  <p class="leading-7 text-foreground/90">{description}</p>
  {#if longDescription}
    <p class="leading-7 text-foreground/75">{longDescription}</p>
  {/if}
{/if}
