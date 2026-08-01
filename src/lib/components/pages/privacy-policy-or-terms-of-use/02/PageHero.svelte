<script lang="ts" module>
  /**
   * Documentation page hero with colored banner and optional action.
   * Displays title, last update date, and a search button in the top-right corner.
   * @component
   * @example
   * ```svelte
   * <PageHero title="Privacy Policy" lastUpdated="24 June 2024" accent="#f0400f">
   *   {#snippet action()}
   *     <button>Search</button>
   *   {/snippet}
   * </PageHero>
   * ```
   */
</script>

<script lang="ts">
  import type { Snippet } from "svelte";

  let {
    title,
    lastUpdated,
    accent = "#f0400f",
    action,
  }: {
    /** Page title. */
    title: string;
    /** Last update date of the document. */
    lastUpdated: string;
    /** Banner background color. */
    accent?: string;
    /** Optional action in the top-right corner (e.g., search button). */
    action?: Snippet;
  } = $props();
</script>

<header
  class="relative px-6 py-10 sm:px-10 sm:py-14 text-white"
  style="background-color: {accent}"
>
  <div class="mx-auto max-w-3xl">
    <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h1>
    <p class="mt-2 text-sm text-white/80">Latest update: {lastUpdated}</p>
  </div>

  {#if action}
    <div class="absolute right-4 top-4 sm:right-6 sm:top-6">
      {@render action()}
    </div>
  {/if}
</header>
