<script lang="ts" module>
  /**
   * Banner de apresentação da empresa/fábrica: imagem de capa, logótipo,
   * nome, país, botão de contacto e faixa de estatísticas rápidas.
   * Quando `isLoading` é true, exibe Skeletons.
   * @component
   * @example
   * ```svelte
   * <ProfileBanner data={data.banner} id={data.id} {onContact} {onCopyLink} {onShare} />
   * ```
   */
</script>

<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import { Button } from "$lib/components/ui/button/index.js";
  import ImgPlaceholder from "$lib/assets/placeholder-image.png";
  import type { ProfileBannerData, ProfileBannerTag } from "../types";
  import { HugeiconsIcon } from "@hugeicons/svelte";
  import { Copy, Email, Share, WhatsappIcon } from "@hugeicons/core-free-icons";

  let {
    id,
    data,
    isLoading = false,
    onWhatsapp,
    onEmail,
    onCopyLink,
    onShare,
    tags,
  }: {
    id: string | number;
    data: ProfileBannerData;
    isLoading?: boolean;
    onWhatsapp?: (id: string | number) => void;
    onEmail?: (id: string | number) => void;
    onCopyLink?: (id: string | number) => void;
    onShare?: (id: string | number) => void;
    tags?: ProfileBannerTag[];
  } = $props();

  const cover = $derived(data?.coverImages ?? []);
</script>

{#if isLoading}
  <div class="flex flex-col gap-4">
    <Skeleton class="aspect-21/9 w-full rounded-xl" />
    <div class="flex flex-col items-center gap-3">
      <Skeleton class="size-24 rounded-2xl -mt-16 border-4 border-background" />
      <Skeleton class="h-7 w-48 rounded-md" />
      <Skeleton class="h-10 w-44 rounded-md" />
    </div>
    <div class="flex justify-center gap-6">
      {#each Array.from({ length: 4 }) as _, i (i)}
        <Skeleton class="h-12 w-24 rounded-md" />
      {/each}
    </div>
  </div>
{:else}
  <div
    class="flex flex-col items-center justify-center bg-gradient p-2 relative rounded-lg"
  >
    <!-- Capa -->
    <div class="overflow-hidden rounded-xl absolute top-0 right-0">
      <div class="flex gap-2 md:gap-5 p-4">
        <Button
          type="button"
          variant="ghost"
          class="rounded-full bg-white dark:bg-background"
          aria-label="Copiar link"
          onclick={() => onCopyLink?.(id)}
        >
          <HugeiconsIcon icon={Copy} />
        </Button>
        <Button
          type="button"
          variant="ghost"
          class="rounded-full bg-white dark:bg-background"
          aria-label="Partilhar"
          onclick={() => onShare?.(id)}
        >
          <HugeiconsIcon icon={Share} />
        </Button>
      </div>
    </div>

    <!-- Logótipo + nome + contacto -->
    <div
      class="flex flex-col items-center gap-3 px-4 text-center justify-center"
    >
      <div class="flex shrink-0 items-center justify-center">
        {#if data.logo}
          <img
            src={data.logo}
            alt={data.name}
            class="rounded-full w-15 md:w-25 h-15 md:h-25 p-2"
            onerror={(e) =>
              ((e.target as HTMLImageElement).src = ImgPlaceholder)}
          />
        {:else}
          <span class="text-2xl font-bold text-muted-foreground"
            >{data.name?.[0] ?? "?"}</span
          >
        {/if}
      </div>
      <h1 class="text-lg font-bold tracking-tight md:text-xl mb-5 text-white">
        {data.name}
      </h1>
    </div>
    <Button
      variant="ghost"
      onclick={() => onEmail?.(id)}
      class="absolute bottom-5 left-5 bg-white cursor-pointer"
    >
      <HugeiconsIcon icon={Email} class="text-red-500" />
      Email
    </Button>
    <Button
      variant="ghost"
      onclick={() => onWhatsapp?.(id)}
      class="absolute bottom-5 right-5 bg-white cursor-pointer"
    >
      <HugeiconsIcon icon={WhatsappIcon} class="text-green-500" />
      Whatsapp
    </Button>
  </div>
  <div
    class="bg-gray-50 dark:bg-background p-2 md:p-10 flex flex-col items-center justify-center"
  >
    <div class="mb-3"></div>
  </div>
{/if}
