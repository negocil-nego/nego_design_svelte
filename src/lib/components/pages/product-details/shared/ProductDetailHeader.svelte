<script lang="ts" module>
  /**
   * Cabeçalho do produto: título e subtítulo.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProductDetailHeader title={data.title} subtitle={data.subtitle} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  let {
    title,
    subtitle,
    className,
    isLoading = false,
  }: {
    title: string;
    subtitle?: string;
    className?: string;
    isLoading?: boolean;
  } = $props();
</script>

{#if isLoading}
  <div class="flex flex-col gap-2 {className}">
    <Skeleton class="h-8 w-2/3 rounded-md" />
    <Skeleton class="h-4 w-1/2 rounded-md" />
  </div>
{:else}
  <header class="flex flex-col gap-2 {className}">
    <h1 class="text-3xl font-bold tracking-tight">{title}</h1>
    {#if subtitle}
      <p class="text-muted-foreground">{subtitle}</p>
    {/if}
  </header>
{/if}
