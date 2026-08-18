<script lang="ts">
  import type { CardProfileProps } from "../types";
  import CardProfile01 from "./01/CardProfile01.svelte";
  import CardProfile02 from "./02/CardProfile02.svelte";

  type Props = {
    variant?: 1 | 2;
    isLoading?: boolean;
  };

  let { variant, isLoading, ...restProps }: CardProfileProps & Props = $props();
</script>

{#if variant === 2}
  <CardProfile02 {...restProps} {isLoading} />
{:else}
  <CardProfile01 {...restProps} {isLoading} />
{/if}
