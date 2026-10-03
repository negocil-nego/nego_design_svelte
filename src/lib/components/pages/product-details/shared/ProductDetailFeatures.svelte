<script lang="ts" module>
  /**
   * Bloco de características do produto (lista de bullets).
   * Aceita `string[]` ou `ProductDetailsFeatureProps[]` (com ícone opcional).
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
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { icons, type HugeiconsIconName } from "$lib/components/ui/image/icons";
  import type { ProductDetailsFeatureProps } from "../types";

  let {
    features = [],
    isLoading = false,
  }: {
    features?: string[] | ProductDetailsFeatureProps[];
    isLoading?: boolean;
  } = $props();

  type FeatureItem = { key: string; label: string; icon?: HugeiconsIconName };

  const items = $derived<FeatureItem[]>(
    (features ?? []).map((feature) => {
      if (typeof feature === "string") {
        return { key: feature, label: feature };
      }
      const icon =
        feature.icon && feature.icon in icons
          ? (feature.icon as HugeiconsIconName)
          : undefined;
      return { key: feature.label, label: feature.label, icon };
    }),
  );
</script>

{#if isLoading}
  <div class="flex flex-col gap-2">
    {#each Array.from({ length: 3 }) as _, i (i)}
      <Skeleton class="h-4 w-2/3 rounded-md" />
    {/each}
  </div>
{:else}
  <ul class="flex flex-wrap gap-2 md:gap-5">
    {#each items as feature (feature.key)}
      <li
        class="flex items-start gap-2 text-sm text-foreground/90 border rounded-lg p-2"
      >
        {#if feature.icon}
          <ImageHugeicons icon={feature.icon} class="mt-0.5 size-4 shrink-0" />
        {:else}
          <span
            aria-hidden="true"
            class="mt-1.5 size-1.5 shrink-0 rounded-full bg-gradient"
          ></span>
        {/if}
        <span>{feature.label}</span>
      </li>
    {/each}
  </ul>
{/if}
