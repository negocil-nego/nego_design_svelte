<script lang="ts">
  import type { Snippet } from "svelte";

  type Props = {
    content?: Snippet;
  };

  let { content }: Props = $props();
</script>

<div class="flex flex-1 flex-col gap-4 p-4 pt-0">
  {@render content?.()}
</div>
