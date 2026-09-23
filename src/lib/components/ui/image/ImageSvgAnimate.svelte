<script lang="ts">
  import { svgMap, type SvgAnimateKey } from "./svg-map";

  let { key, class: className = "" }: { key: SvgAnimateKey; class?: string } =
    $props();

  let svgContent = $derived(svgMap[key] ?? "");
</script>

<div class={className}>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  {@html svgContent}
</div>
