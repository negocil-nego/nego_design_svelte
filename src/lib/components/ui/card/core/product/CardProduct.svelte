<script lang="ts">
  /**
   * Card component with a title and content.
   * @component
   */
  import type { CardProductProps } from "../types";
  import CardProduct01 from "./01/CardProduct01.svelte";
  import CardProduct02 from "./02/CardProduct02.svelte";

  let {
    variant,
    ...restProps
  }: CardProductProps & {
    variant?: 1 | 2;
  } = $props();
</script>

{#if variant === 2}
  <CardProduct02 {...restProps} />
{:else}
  <CardProduct01 {...restProps} />
{/if}
