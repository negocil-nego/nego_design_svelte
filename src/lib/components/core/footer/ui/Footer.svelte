<script lang="ts">
  import Footer01 from "./01/Footer01.svelte";
  import Footer02 from "./02/Footer02.svelte";
  import type { FooterProps } from "../types";

  let {
    variant = 1,
    ...restProps
  }: FooterProps & {
    variant?: 1 | 2;
  } = $props();
</script>

{#if variant === 2}
  <Footer02 {...restProps} />
{:else}
  <Footer01 {...restProps} />
{/if}
