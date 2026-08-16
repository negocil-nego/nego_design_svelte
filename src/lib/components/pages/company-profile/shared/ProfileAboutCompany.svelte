<script lang="ts" module>
  /**
   * Secção "Sobre a Empresa": imagem ilustrativa e parágrafos descritivos.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProfileAboutCompany data={data.about} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import ImgPlaceholder from "$lib/assets/placeholder-image.png";
  import type { ProfileAboutData } from "../types";

  let {
    data,
    isLoading = false,
    className,
  }: {
    data: ProfileAboutData;
    isLoading?: boolean;
    className?: string;
  } = $props();
</script>

<div class="bg-gray-50 dark:bg-background p-4 md:p-6 rounded-lg {className}">
  <h2 class="mb-4 flex items-center gap-2 text-lg font-bold">
    <svg
      viewBox="0 0 24 24"
      class="size-5 text-muted-foreground"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M3 21h18" />
      <path d="M6 21V7l6-4 6 4v14" />
      <path d="M10 21v-6h4v6" />
      <path d="M10 11h.01M14 11h.01M10 15h.01M14 15h.01" />
    </svg>
    Sobre a Empresa
  </h2>

  {#if isLoading}
    <div class="grid gap-6 md:grid-cols-2">
      <Skeleton class="aspect-4/3 w-full rounded-lg" />
      <div class="flex flex-col gap-3">
        {#each Array.from({ length: 5 }) as _, i (i)}
          <Skeleton class="h-4 w-full rounded-md" />
        {/each}
      </div>
    </div>
  {:else}
    <div class="grid gap-6 md:grid-cols-2 md:items-start">
      {#if data.image}
        <div class="overflow-hidden rounded-lg border">
          <img
            src={data.image || ImgPlaceholder}
            alt={data.imageAlt ?? data.title ?? "Sobre a empresa"}
            class="aspect-4/3 w-full object-cover"
            onerror={(e) =>
              ((e.target as HTMLImageElement).src = ImgPlaceholder)}
          />
        </div>
      {/if}

      <div class="flex flex-col gap-4">
        {#each data.paragraphs as paragraph, i (i)}
          <p class="leading-7 text-foreground/80">{paragraph}</p>
        {/each}
      </div>
    </div>
  {/if}
</div>
