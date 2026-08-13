<script lang="ts" module>
  /**
   * Breadcrumb de navegação para a página de detalhes do produto.
   * Quando `isLoading` é true, exibe um Skeleton.
   * @component
   * @example
   * ```svelte
   * <ProductDetailBreadcrumb items={[{ label: "Home", href: "/" }, { label: "Hotel Baía Azul" }]} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { ProductDetailsBreadcrumbItem } from "../types";

  let {
    items,
    isLoading = false,
  }: {
    items: ProductDetailsBreadcrumbItem[];
    isLoading?: boolean;
  } = $props();
</script>

{#if isLoading}
  <Skeleton class="h-4 w-48 rounded-md" />
{:else}
  <nav
    aria-label="Breadcrumb"
    class="flex items-center gap-1.5 text-sm text-muted-foreground"
  >
    {#each items as item, i (item.label)}
      {#if item.href}
        <a href={item.href} class="hover:text-foreground transition-colors"
          >{item.label}</a
        >
      {:else}
        <span class="text-foreground font-medium">{item.label}</span>
      {/if}
      {#if i < items.length - 1}
        <span class="select-none">/</span>
      {/if}
    {/each}
  </nav>
{/if}
