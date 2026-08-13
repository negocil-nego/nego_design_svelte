<script lang="ts" module>
  /**
   * Abas de conteúdo do produto (descrição, avaliações, etc).
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProductDetailTabs tabs={data.tabs} {data}>
   *   {#snippet tabContent(tab)}
   *     ...
   *   {/snippet}
   * </ProductDetailTabs>
   * ```
   */
</script>

<script lang="ts">
  import type { Snippet } from "svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { ProductDetailsData, ProductDetailsTab } from "../types";
  import ProductDetailDescription from "./ProductDetailDescription.svelte";
  import ProductDetailFeatures from "./ProductDetailFeatures.svelte";
  import ProductDetailReviews from "./ProductDetailReviews.svelte";

  let {
    data,
    tabs,
    isLoading = false,
    children,
  }: {
    data: ProductDetailsData;
    tabs?: ProductDetailsTab[];
    isLoading?: boolean;
    /** Snippet opcional para renderizar o conteúdo de cada aba. */
    children?: Snippet<[ProductDetailsTab]>;
  } = $props();

  const defaultTabs = $derived(
    tabs?.length
      ? tabs
      : [
          { id: "description", label: "Descrição" },
          { id: "reviews", label: "Avaliações" },
        ],
  );

  let activeTab = $state<string | undefined>(undefined);
  const currentTab = $derived(activeTab ?? defaultTabs[0]?.id ?? "description");
</script>

<div>
  <div class="mb-6 flex gap-1 border-b">
    {#if isLoading}
      {#each defaultTabs as tab (tab.id)}
        <Skeleton class="h-9 w-24 rounded-t-md" />
      {/each}
    {:else}
      {#each defaultTabs as tab (tab.id)}
        <button
          type="button"
          onclick={() => (activeTab = tab.id)}
          class="px-4 py-2 text-sm font-medium transition-colors {currentTab ===
          tab.id
            ? 'border-b-2 border-foreground text-foreground'
            : 'border-b-2 border-transparent text-muted-foreground hover:text-foreground'}"
        >
          {tab.label}
        </button>
      {/each}
    {/if}
  </div>

  {#if isLoading}
    <div class="flex max-w-3xl flex-col gap-2">
      {#each Array.from({ length: 4 }) as _, i (i)}
        <Skeleton class="h-4 w-full rounded-md" />
      {/each}
    </div>
  {:else if children}
    {@render children(defaultTabs.find((tab) => tab.id === currentTab) ?? defaultTabs[0])}
  {:else if currentTab === "description"}
    <div class="flex max-w-3xl flex-col gap-5">
      <ProductDetailDescription
        description={data.description}
        longDescription={data.longDescription}
      />
      {#if data.features}
        <ProductDetailFeatures features={data.features} />
      {/if}
    </div>
  {:else if currentTab === "reviews"}
    <div class="max-w-3xl">
      <ProductDetailReviews reviews={data.reviews} />
    </div>
  {/if}
</div>
