<script lang="ts" module>
  /**
   * Mapa de localização do produto (iframe embed).
   * Quando `isLoading` é true, exibe um Skeleton.
   * @component
   * @example
   * ```svelte
   * <ProductDetailMap location={data.location} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { ProductDetailsLocation } from "../types";

  let {
    location,
    className,
    isLoading = false,
  }: {
    location?: ProductDetailsLocation;
    className?: string;
    isLoading?: boolean;
  } = $props();

  const defaultMapUrl = $derived(
    "https://www.openstreetmap.org/export/embed.html?bbox=13.2292%2C-8.8486%2C13.2462%2C-8.8339&layer=mapnik&marker=-8.8412%2C13.2377",
  );
</script>

{#if isLoading}
  <div class="flex flex-col gap-3 {className}">
    <Skeleton class="h-4 w-40 rounded-md" />
    <Skeleton class="h-72 w-full rounded-lg" />
  </div>
{:else if location}
  <div class="flex flex-col gap-3 {className}">
    {#if location.label || location.address}
      <div class="flex flex-col gap-1">
        {#if location.label}
          <p class="text-sm font-semibold">{location.label}</p>
        {/if}
        {#if location.address}
          <p class="text-sm text-muted-foreground">{location.address}</p>
        {/if}
      </div>
    {/if}

    <iframe
      title={location.label ?? "Localização"}
      src={location.mapUrl ?? defaultMapUrl}
      class="h-72 w-full rounded-lg border"
      loading="lazy"
    ></iframe>
  </div>
{/if}
