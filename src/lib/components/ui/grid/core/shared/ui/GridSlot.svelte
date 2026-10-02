<script lang="ts">
  import type { Snippet } from "svelte";
  import { cn } from "$lib/utils.js";

  type Props = {
    class?: string;
    children: Snippet;
  };

  const { class: className = "", children }: Props = $props();
</script>

<div
  class={cn("grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 p-2", className)}
>
  {@render children()}
</div>
