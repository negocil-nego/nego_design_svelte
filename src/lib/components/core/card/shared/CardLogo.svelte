<script lang="ts">
  import Skeleton from "$lib/components/ui/skeleton/skeleton.svelte";
  import ImgPlaceholderCompany from "$lib/assets/placeholder-company.png";

  let { logo, isLoading = false }: { logo?: string; isLoading?: boolean } =
    $props();
</script>

{#if isLoading}
  <Skeleton class="w-12 h-12 rounded-lg bg-gray-300" />
{:else if logo}
  <img
    src={logo}
    alt={logo}
    class="w-12 h-12 rounded-lg"
    onerror={(e) =>
      ((e.target as HTMLImageElement).src = ImgPlaceholderCompany)}
  />
{/if}
