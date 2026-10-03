<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import ImageFlag from "$lib/components/ui/image/ImageFlag.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import type { HugeiconsIconName } from "$lib/components/ui/image/icons";

  type Props = {
    origin?: string;
    destination?: string;
    type?: string;
    country?: string;
    isLoading?: boolean;
    className?: string;
  };

  let {
    origin,
    destination,
    type,
    country,
    isLoading = false,
    className = "",
  }: Props = $props();

  const icon = $derived<HugeiconsIconName>(
    type === "INTERPROVINCIAL" ? "Bus01Icon" : "Airplane01Icon",
  );

  const hasRoute = $derived(Boolean(origin && destination));
</script>

{#if isLoading}
  <div class="flex items-center gap-2 {className}">
    <Skeleton class="h-6 w-24 rounded-lg" />
    <Skeleton class="h-4 w-8 rounded-full" />
    <Skeleton class="h-6 w-24 rounded-lg" />
  </div>
{:else if hasRoute}
  <div class="flex items-center gap-2 {className}">
    <div class="flex items-center gap-1.5 min-w-0">
      {#if country}
        <ImageFlag {country} class="w-4 h-3 rounded-sm" alt={country} />
      {/if}
      <span class="font-semibold text-sm md:text-base line-clamp-1">
        {origin}
      </span>
    </div>

    <div class="flex items-center gap-1 text-primary shrink-0">
      <span class="h-px w-6 md:w-10 bg-primary/40"></span>
      <ImageHugeicons {icon} class="size-4 rotate-90" />
      <span class="h-px w-6 md:w-10 bg-primary/40"></span>
    </div>

    <div class="flex items-center gap-1.5 min-w-0">
      <span class="font-semibold text-sm md:text-base line-clamp-1">
        {destination}
      </span>
      <ImageHugeicons icon="MapPinnedIcon" class="size-4 shrink-0" />
    </div>
  </div>
{:else if origin}
  <div class="flex items-center gap-1.5 {className}">
    <ImageHugeicons {icon} class="size-4 shrink-0 text-primary" />
    {#if country}
      <ImageFlag {country} class="w-4 h-3 rounded-sm" alt={country} />
    {/if}
    <span class="font-semibold text-sm md:text-base line-clamp-1">{origin}</span>
  </div>
{/if}