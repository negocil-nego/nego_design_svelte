<script lang="ts">
  import type { CardMediaProps } from "../types";
  import CardMedia01 from "./01/CardMedia01.svelte";
  import CardMedia02 from "./02/CardMedia02.svelte";

  type Props = {
    variant?: 1 | 2;
    isLoading?: boolean;
  };

  let { variant, isLoading, ...restProps }: CardMediaProps & Props = $props();
</script>

{#if variant === 2}
  <CardMedia02 {...restProps} {isLoading} />
{:else}
  <CardMedia01 {...restProps} {isLoading} />
{/if}
