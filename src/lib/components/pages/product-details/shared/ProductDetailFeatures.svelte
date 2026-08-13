<script lang="ts" module>
  /**
   * Bloco de características do produto (lista de bullets).
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProductDetailFeatures features={["Wi-Fi gratuito", "Pequeno-almoço incluído"]} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  let {
    features,
    isLoading = false,
  }: {
    features: string[];
    isLoading?: boolean;
  } = $props();
</script>

{#if isLoading}
  <div class="flex flex-col gap-2">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <Skeleton class="h-4 w-2/3 rounded-md" />
    {/each}
  </div>
{:else}
  <ul class="flex flex-col gap-2">
    {#each features as feature, i (i)}
      <li class="flex items-start gap-2 text-sm text-foreground/90">
        <span aria-hidden="true" class="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"></span>
        <span>{feature}</span>
      </li>
    {/each}
  </ul>
{/if}
