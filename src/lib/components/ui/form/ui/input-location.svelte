<script lang="ts">
import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import { Label } from "$lib/components/ui/label";
    
  type Coordinates = {
    latitude: number;
    longitude: number;
  };

  let {
    label,
    isLabel = false,
    description,
    locationText = "Get current location",
    locationLoadingText = "Getting location...",
    disabled = false,
    onGetLocation,
  }: {
    label?: string;
    isLabel?: boolean;
    description?: string;
    locationText?: string;
    locationLoadingText?: string;
    disabled?: boolean;
    onGetLocation: (coords: Coordinates) => void;
  } = $props();

  let isLoading = $state(false);
  let error = $state("");

  function handleGetLocation() {
    if (isLoading || disabled) return;

    if (!("geolocation" in navigator)) {
      error = "Geolocation is not supported by this browser.";
      return;
    }

    isLoading = true;
    error = "";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        isLoading = false;
        onGetLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (err) => {
        isLoading = false;
        error = err.message || "Unable to retrieve your location.";
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
    );
  }
</script>

{#if isLabel}
  <div class="flex w-full flex-col gap-2">
    {#if label}
      <Label>{label}</Label>
    {/if}
    <button
      type="button"
      onclick={handleGetLocation}
      disabled={disabled || isLoading}
      class="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-primary/50 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {#if isLoading}
        <ImageHugeicons icon="loader-pinwheel" width={16} height={16} color="currentColor" class="animate-spin" />
        {locationLoadingText}
      {:else}
        <ImageHugeicons icon="location-01" width={16} height={16} color="currentColor" />
        {locationText}
      {/if}
    </button>
    {#if description}
      <p class="text-xs text-muted-foreground">{description}</p>
    {/if}
    {#if error}
      <p class="text-xs text-destructive">{error}</p>
    {/if}
  </div>
{:else}
  <button
    type="button"
    onclick={handleGetLocation}
    disabled={disabled || isLoading}
    class="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-dashed border-primary/50 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary transition hover:bg-primary/10 disabled:cursor-not-allowed disabled:opacity-50"
  >
    {#if isLoading}
      <ImageHugeicons icon="loader-pinwheel" width={16} height={16} color="currentColor" class="animate-spin" />
      {locationLoadingText}
    {:else}
      <ImageHugeicons icon="location-01" width={16} height={16} color="currentColor" />
      {locationText}
    {/if}
  </button>
{/if}