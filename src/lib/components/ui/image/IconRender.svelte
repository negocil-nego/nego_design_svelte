<script lang="ts">
  import { hugeiconsIcons } from "$lib/components/ui/image/hugeicons-icons";
  import ImageHugeicons from "$lib/components/ui/image/ImageHugeicons.svelte";
  import type { HugeiconsIconName } from "$lib/components/ui/image/hugeicons-icons";

  let {
    icon,
    class: className = "",
  }: {
    icon: string | HugeiconsIconName;
    class?: string;
  } = $props();

  const isHugeiconsKey = $derived(
    typeof icon === "string" && icon in hugeiconsIcons,
  );
</script>

{#if isHugeiconsKey}
  <ImageHugeicons {icon} class={className} />
{:else if typeof icon === "string"}
  <i class="{icon} {className}"></i>
{:else}
  <ImageHugeicons {icon} class={className} />
{/if}
