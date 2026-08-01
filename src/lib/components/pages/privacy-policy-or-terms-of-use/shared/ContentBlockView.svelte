<script lang="ts" module>
  /**
   * Renders a content block (paragraph or list).
   * @component
   * @example
   * ```svelte
   * <ContentBlockView block={{ type: "paragraph", text: "Hello world" }} />
   * ```
   */
</script>

<script lang="ts">
  import type { ContentBlock } from "../types";

  let { block }: { block: ContentBlock } = $props();
</script>

{#if block.type === "paragraph"}
  <p class="leading-7 text-foreground/90">{block.text}</p>
{:else if block.type === "list"}
  <ul class="list-disc pl-6 flex flex-col gap-1.5 text-foreground/90">
    {#each block.items as item, i (i)}
      <li class="leading-7">{item}</li>
    {/each}
  </ul>
{/if}
