<script lang="ts" module>
  /**
   * Renders a document section with title, content blocks, and recursive subsections.
   * @component
   * @example
   * ```svelte
   * <DocSectionView section={sectionData} />
   * ```
   */
</script>

<script lang="ts">
  import type { DocSection } from "../types";
  import ContentBlockView from "./ContentBlockView.svelte";
  import DocSectionView from "./DocSectionView.svelte";

  let { section }: { section: DocSection } = $props();

  const level = $derived(section.level ?? 1);
  const heading = $derived(
    section.number
      ? `${section.number}. ${section.title}`
      : section.title,
  );
</script>

<section id={section.id} class="scroll-mt-24 flex flex-col gap-4">
  {#if level === 1}
    <h2 class="text-2xl font-semibold tracking-tight">{heading}</h2>
  {:else}
    <h3 class="text-xl font-semibold tracking-tight">{heading}</h3>
  {/if}

  {#each section.blocks ?? [] as block, i (i)}
    <ContentBlockView {block} />
  {/each}

  {#if section.subsections}
    <div class="flex flex-col gap-6 mt-2">
      {#each section.subsections as subsection (subsection.id)}
        <DocSectionView section={subsection} />
      {/each}
    </div>
  {/if}
</section>
