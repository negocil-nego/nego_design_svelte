<script lang="ts" module>
  /**
   * Documentation page hero with banner and content sections.
   * Combines PageHero with document section rendering.
   * @component
   * @example
   * ```svelte
   * <DocsPageHero data={pageData} accent="#f0400f" />
   * ```
   */
</script>

<script lang="ts">
  import DocSectionView from "../shared/DocSectionView.svelte";
  import type { DocPageData } from "../types";
  import PageHero from "./PageHero.svelte";

  let {
    data,
    accent,
  }: {
    /** Page data — uses title, lastUpdated, and sections. */
    data: Pick<DocPageData, "title" | "lastUpdated" | "sections">;
    /** Hero banner background color. */
    accent?: string;
  } = $props();
</script>

<div class="min-h-screen bg-background">
  <PageHero title={data.title} lastUpdated={data.lastUpdated} {accent}>
    {#snippet action()}
      <button
        type="button"
        aria-label="Search"
        class="flex h-9 w-9 items-center justify-center rounded-md bg-white/15 hover:bg-white/25 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="h-4 w-4"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>
    {/snippet}
  </PageHero>

  <main class="mx-auto max-w-3xl px-6 py-12 flex flex-col gap-10">
    {#each data.sections as section (section.id)}
      <DocSectionView {section} />
    {/each}
  </main>
</div>
