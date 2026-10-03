<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";

  type Props = {
    departureTime?: string;
    arrivalTime?: string;
    origin?: string;
    destination?: string;
    duration?: string;
    isLoading?: boolean;
    class?: string;
  };

  let {
    departureTime,
    arrivalTime,
    origin,
    destination,
    duration,
    isLoading = false,
    class: className = "",
  }: Props = $props();
</script>

<div class="flex flex-col gap-0.5 {className}">
  <!-- Flight Times: Ultra-compact & Minimal -->
  <div class="grid grid-cols-2 items-baseline">
    {#if isLoading}
      <Skeleton class="h-4 w-14 rounded" />
      <Skeleton class="h-4 w-14 rounded justify-self-end" />
    {:else}
      <span class="text-sm sm:text-base font-bold text-foreground tracking-tight">
        {departureTime || "--:--"}
      </span>
      <span class="text-sm sm:text-base font-bold text-foreground tracking-tight text-right">
        {arrivalTime || "--:--"}
      </span>
    {/if}
  </div>

  <!-- Flight Route & Duration Line -->
  <div class="flex items-center justify-between gap-1.5 my-0.5">
    {#if isLoading}
      <Skeleton class="h-3 w-8 rounded" />
      <Skeleton class="h-2 flex-1 rounded-full mx-1.5" />
      <Skeleton class="h-3 w-8 rounded" />
    {:else}
      <!-- Origin -->
      <span class="font-semibold text-[11px] sm:text-xs text-foreground uppercase tracking-wider min-w-[30px]">
        {origin || "IST"}
      </span>

      <!-- Route Track with Duration & Airplane -->
      <div class="flex items-center flex-1 min-w-0 px-1">
        <span class="size-1 rounded-full bg-muted-foreground/40 shrink-0"></span>
        <span class="h-px flex-1 bg-border"></span>

        <div class="flex items-center gap-1 text-[10px] font-medium text-muted-foreground px-1 shrink-0">
          <ImageHugeicons icon="Clock01Icon" class="size-2.5 shrink-0" />
          <span>{duration || "Direct"}</span>
        </div>

        <span class="h-px flex-1 bg-border"></span>
        <ImageHugeicons icon="Airplane01Icon" class="size-3 rotate-90 text-muted-foreground shrink-0" />
      </div>

      <!-- Destination -->
      <span class="font-semibold text-[11px] sm:text-xs text-foreground uppercase tracking-wider text-right min-w-[30px]">
        {destination || "LHR"}
      </span>
    {/if}
  </div>
</div>
