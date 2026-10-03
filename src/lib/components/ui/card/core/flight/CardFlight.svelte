<script lang="ts">
  /**
   * Card component with a title and content.
   * @component
   */
  import type { CardFlightProps } from "../types";
  import CardFlight01 from "./01/CardFlight01.svelte";
  import CardFlight02 from "./02/CardFlight02.svelte";

  let {
    variant,
    ...restProps
  }: CardFlightProps & {
    variant?: 1 | 2;
  } = $props();
</script>

{#if variant === 2}
  <CardFlight02 {...restProps} />
{:else}
  <CardFlight01 {...restProps} />
{/if}