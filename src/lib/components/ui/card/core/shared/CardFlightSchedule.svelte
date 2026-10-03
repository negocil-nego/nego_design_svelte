<script lang="ts">
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";

  type Props = {
    departureTime?: string;
    arrivalTime?: string;
    duration?: string;
    isLoading?: boolean;
    className?: string;
  };

  let {
    departureTime,
    arrivalTime,
    duration,
    isLoading = false,
    className = "",
  }: Props = $props();

  const hasSchedule = $derived(Boolean(departureTime || arrivalTime || duration));
</script>

{#if isLoading}
  <div class="flex items-center gap-4 {className}">
    <Skeleton class="h-4 w-28 rounded-lg" />
    <Skeleton class="h-4 w-28 rounded-lg" />
  </div>
{:else if hasSchedule}
  <div
    class="flex items-center flex-wrap gap-x-4 gap-y-1 text-[13px] md:text-[14px] text-gray-600 dark:text-gray-300 {className}"
  >
    {#if departureTime}
      <div class="flex items-center gap-1">
        <ImageHugeicons icon="AirplaneTakeOff01Icon" class="size-4 shrink-0" />
        <span class="whitespace-nowrap">{departureTime}</span>
      </div>
    {/if}
    {#if arrivalTime}
      <div class="flex items-center gap-1">
        <ImageHugeicons icon="AirplaneLanding01Icon" class="size-4 shrink-0" />
        <span class="whitespace-nowrap">{arrivalTime}</span>
      </div>
    {/if}
    {#if duration}
      <div class="flex items-center gap-1">
        <ImageHugeicons icon="Clock01Icon" class="size-4 shrink-0" />
        <span class="whitespace-nowrap">{duration}</span>
      </div>
    {/if}
  </div>
{/if}