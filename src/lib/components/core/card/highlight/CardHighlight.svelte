<script lang="ts">
  /**
   * Card component with a title and content.
   * @component
   */
  import type { CardHighlightProps } from "../types";
  import CardHighlight01 from "./01/CardHighlight01.svelte";
  import CardHighlight02 from "./02/CardHighlight02.svelte";

  let {
    varient = 1,
    ...restProps
  }: CardHighlightProps & {
    varient?: 1 | 2;
  } = $props();
</script>

{#if varient == 2}
  <CardHighlight02 {...restProps} />
{:else}
  <CardHighlight01 {...restProps} />
{/if}
