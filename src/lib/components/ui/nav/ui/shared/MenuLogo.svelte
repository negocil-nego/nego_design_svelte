<script lang="ts">
  import type { NavMenuLogoProps } from "$lib/types";

  let { img, url, label, className, onclick }: NavMenuLogoProps = $props();
</script>

<a href={url} {onclick}>
  {#if img}
    <img src={img} alt="logo of site" class={`max-h-50 ${className}`} />
  {:else if label}
    <span class={className}>{label}</span>
  {/if}
</a>
