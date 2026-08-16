<script lang="ts" module>
  /* eslint-disable @typescript-eslint/no-explicit-any */
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
  import {
    Calendar01FreeIcons,
    Copy,
    DashboardBrowsingIcon,
    Email,
    Link01FreeIcons,
    MapPin,
    Share,
    WhatsappIcon,
  } from "@hugeicons/core-free-icons";

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
      class="flex flex-col items-center gap-3 px-4 text-center justify-center md:-mb-10"
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
    <div class="flex justify-between w-full p-5">
      <Button
        variant="ghost"
        size="sm"
        onclick={() => onEmail?.(id)}
        class="bg-white cursor-pointer"
      >
        <HugeiconsIcon icon={Email} class="text-red-500" />
        Email
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onclick={() => onWhatsapp?.(id)}
        class="bg-white cursor-pointer"
      >
        <HugeiconsIcon icon={WhatsappIcon} class="text-green-500" />
        Whatsapp
      </Button>
    </div>
  </div>
  <div
    class="bg-gray-50 dark:bg-background p-2 md:p-10 flex flex-col items-center justify-center"
  >
    <div
      class="grid grid-cols-2 items-center w-full
         [&>*:nth-child(odd)]:border-r
         [&>*:nth-child(-n+2)]:pb-1 [&>*:nth-child(-n+2)]:md:pb-2.5 [&>*:nth-child(-n+2)]:lg:pb-5
         [&>*:nth-child(-n+2)]:border-b
         [&>*:nth-child(n+3)]:pt-1 [&>*:nth-child(n+3)]:md:pt-2.5 [&>*:nth-child(n+3)]:lg:pt-5
         *:border-border
         *:w-full
         *:flex *:flex-col *:items-center"
    >
      {@render companyInfo({
        title: "Categoria",
        description: data.category,
        icon: DashboardBrowsingIcon,
      })}
      {@render companyInfo({
        title: "Endereço",
        description: data.address,
        icon: MapPin,
      })}
      {@render companyInfo({
        title: "Anos de Atuação",
        description: data.yearFounded,
        icon: Calendar01FreeIcons,
      })}
      {@render companyInfo({
        title: "Website",
        description: data.website,
        icon: Link01FreeIcons,
      })}
    </div>
  </div>
{/if}

{#snippet companyInfo({
  title,
  description,
  icon,
}: {
  title: string;
  description?: string;
  icon: any;
})}
  <div class="flex flex-col gap-2 items-center">
    <h3 class="text-md font-semibold flex gap-2 items-center">
      <HugeiconsIcon {icon} size={15} />
      {title}
    </h3>
    <p class="text-md text-gray-400">{description ?? "---"}</p>
  </div>
{/snippet}
