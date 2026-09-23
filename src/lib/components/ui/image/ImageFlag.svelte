<script lang="ts">
  import { flagMap, languageFlagMap } from "./flag-map";

  let {
    country,
    class: className = "",
    alt = "",
  }: {
    country: string;
    class?: string;
    alt?: string;
  } = $props();

  let flagSrc = $derived(flagMap[country] ?? flagMap[languageFlagMap[country]] ?? "");
  let flagAlt = $derived(alt || country.toUpperCase());
</script>

{#if flagSrc}
  <img
    src={flagSrc}
    alt={flagAlt}
    class={className}
    style="aspect-ratio: 4/3; object-fit: cover;"
  />
{/if}
